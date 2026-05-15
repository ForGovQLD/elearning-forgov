/**
 * upload-images-to-squiz.mjs
 *
 * Uploads every image found under modules/ to Squiz Matrix via the asset API.
 *
 * For each image:
 *   1. Base64-encodes the file and POSTs it to the Squiz asset endpoint.
 *   2. Appends a record (repo path, asset ID, public URL, timestamp) to squiz/log.json.
 *   3. Deletes the image from the repository.
 *
 * Already-uploaded images (present in squiz/log.json) are skipped so the
 * script is safe to re-run after a partial failure.
 *
 * Requires Node.js 18+ (built-in fetch).
 *
 * Usage:
 *   node scripts/upload-images-to-squiz.mjs           # upload all images
 *   node scripts/upload-images-to-squiz.mjs --test     # upload first 10 only (for validation)
 *
 * Environment (squiz/.env):
 *   FORGOV-ELEARNING-KEY        Bearer token for Squiz API auth
 *   FORGOV-ROOT-NODE            Parent asset ID to upload images under
 *   FORGOV-CMS-URL              Squiz instance base URL
 *                               e.g. https://uat.forgov.qld.gov.au/_resources/images/elearning-images
 *   SQUIZ_CMS_ASSET_ENDPOINT    API path (default: /__management_api/v1/assets/)
 */

import fs from 'fs';
import path from 'path';
import { readdir } from 'fs/promises';

// ---------------------------------------------------------------------------
// Paths
// ---------------------------------------------------------------------------

const ENV_FILE   = path.resolve('./squiz/.env');
const LOG_FILE   = path.resolve('./squiz/log.json');
const MODULES_DIR = path.resolve('./modules');

const IMAGE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg']);

const TEST_MODE = process.argv.includes('--test');
const TEST_LIMIT = 10;

// ---------------------------------------------------------------------------
// Parse .env (supports hyphenated key names)
// ---------------------------------------------------------------------------

function parseEnv(filePath) {
  if (!fs.existsSync(filePath)) {
    console.error(`Missing env file: ${filePath}`);
    process.exit(1);
  }

  const env = {};
  for (const line of fs.readFileSync(filePath, 'utf8').split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq === -1) continue;
    env[trimmed.slice(0, eq).trim()] = trimmed.slice(eq + 1).trim();
  }
  return env;
}

// ---------------------------------------------------------------------------
// Find all images recursively under a directory
// ---------------------------------------------------------------------------

async function findImages(dir) {
  const results = [];
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...await findImages(fullPath));
    } else if (
      entry.isFile() &&
      IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase())
    ) {
      results.push(fullPath);
    }
  }

  return results;
}

// ---------------------------------------------------------------------------
// Find all HTML / CSS / JS files recursively under a directory
// ---------------------------------------------------------------------------

const TEXT_EXTENSIONS = new Set(['.html', '.css', '.js']);

async function findTextFiles(dir) {
  const results = [];
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...await findTextFiles(fullPath));
    } else if (
      entry.isFile() &&
      TEXT_EXTENSIONS.has(path.extname(entry.name).toLowerCase())
    ) {
      results.push(fullPath);
    }
  }

  return results;
}

// ---------------------------------------------------------------------------
// Strategy 1 — Rise modules
//
// Rise stores ALL course content (including image filenames) as a
// base64-encoded JSON blob in window.courseData. Each image object has a
// `crushedKey` property whose value is the bare filename in the assets/
// folder (e.g. "tWaMAiidfnZUSogE_9WucY0X0vFxNXN6d.jpg").
//
// The Rise player's internal resolvePath() passes absolute URLs through
// unchanged (it checks for a leading "http" / "//" before prepending any
// base path), so setting crushedKey to the full Squiz URL is safe.
// ---------------------------------------------------------------------------

const RISE_COURSE_DATA_RE = /window\.courseData\s*=\s*"([A-Za-z0-9+/=]+)"/;

function replaceInRiseCourseData(content, filename, newUrl) {
  const match = RISE_COURSE_DATA_RE.exec(content);
  if (!match) return { content, count: 0 };

  let json;
  try {
    json = JSON.parse(Buffer.from(match[1], 'base64').toString('utf8'));
  } catch {
    return { content, count: 0 };
  }

  let count = 0;

  function walk(obj) {
    if (Array.isArray(obj)) {
      for (const item of obj) walk(item);
    } else if (obj !== null && typeof obj === 'object') {
      // Case 1: Rise image object with crushedKey/key pair.
      // The player uses crushedKey first; resolvePath() passes absolute URLs
      // through unchanged, so setting it to the full Squiz URL is safe.
      if (typeof obj.crushedKey === 'string' && obj.crushedKey === filename) {
        obj.crushedKey = newUrl;
        obj.key        = newUrl;
        // useCrushedKey stays true
        count++;
      }
      // Case 2: Any other string property whose value is exactly the bare
      // filename (e.g. avatar, src, url, thumbnail …).  Skip 'key' here
      // because it is already handled above alongside 'crushedKey'.
      for (const [k, val] of Object.entries(obj)) {
        if (k !== 'crushedKey' && k !== 'key' &&
            typeof val === 'string' && val === filename) {
          obj[k] = newUrl;
          count++;
        }
      }
      // Recurse into all child values
      for (const val of Object.values(obj)) walk(val);
    }
  }

  walk(json);
  if (count === 0) return { content, count: 0 };

  const newBase64   = Buffer.from(JSON.stringify(json)).toString('base64');
  const newContent  = content.replace(RISE_COURSE_DATA_RE, `window.courseData = "${newBase64}"`);
  return { content: newContent, count };
}

// ---------------------------------------------------------------------------
// Strategy 2 — Storyline / SCORM / plain HTML modules
//
// Images are referenced as plain relative paths in HTML, CSS and JS files
// (e.g. src="../images/photo.jpg" or url('assets/photo.jpg')).
// A regex matches any path string ending with the exact filename and
// replaces it with the full Squiz URL.
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// replaceImageReferences — runs both strategies against every text file in
// the same module directory and reports what was changed.
// ---------------------------------------------------------------------------

async function replaceImageReferences(imagePath, newUrl) {
  const filename  = path.basename(imagePath);

  // Scope search to the module root: modules/<ModuleName>/
  const repoRel   = path.relative(path.resolve('./'), imagePath);
  const parts     = repoRel.split(path.sep);
  const moduleDir = path.resolve(parts[0], parts[1]);

  const textFiles = await findTextFiles(moduleDir);
  const updates   = [];

  const escapedName = filename.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const refRegex    = new RegExp(`[^"'\\s()]*${escapedName}`, 'g');

  for (const filePath of textFiles) {
    let content;
    try {
      content = await fs.promises.readFile(filePath, 'utf8');
    } catch {
      continue;
    }

    let count = 0;

    // Strategy 1: Rise base64 JSON blob (HTML files only)
    if (path.extname(filePath).toLowerCase() === '.html') {
      const result = replaceInRiseCourseData(content, filename, newUrl);
      if (result.count > 0) {
        content = result.content;
        count  += result.count;
      }
    }

    // Strategy 2: Plain-text path regex (all file types)
    refRegex.lastIndex = 0;
    if (refRegex.test(content)) {
      refRegex.lastIndex = 0;
      count  += (content.match(refRegex) || []).length;
      content = content.replace(refRegex, newUrl);
    }

    if (count > 0) {
      await fs.promises.writeFile(filePath, content, 'utf8');
      updates.push({ file: path.relative(path.resolve('./'), filePath), count });
    }
  }

  return updates;
}

// ---------------------------------------------------------------------------
// Upload a single image to Squiz
// ---------------------------------------------------------------------------

async function uploadImage(filePath, apiEndpoint, token, rootNode) {
  const filename = path.basename(filePath);
  const fileContent = fs.readFileSync(filePath).toString('base64');

  const payload = {
    asset: {
      type: 'image',
      attributes: {
        name: filename,
        file_content: fileContent,
      },
      published: null,
      metadata_schemas: [],
      metadata_values: null,
      external_id: '',
    },
    parent: {
      asset_id: String(rootNode),
      link_type: 'menu',
      value: '',
      sort_order: -1,
      is_dependent: false,
      is_exclusive: false,
    },
  };

  const response = await fetch(apiEndpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`HTTP ${response.status}: ${text.slice(0, 300)}`);
  }

  const data = await response.json();

  const assetId =
    String(data.asset_id ?? data.id ?? data.asset?.asset_id ?? '') || null;

  // Extract public URL from the response urls array
  let url = null;
  for (const entry of data.urls || []) {
    if (typeof entry === 'string' && entry) {
      url = entry;
      break;
    }
    if (typeof entry === 'object' && entry.path) {
      const schemes = entry.schemes || [];
      const scheme = schemes.includes('https') ? 'https' : (schemes[0] || 'https');
      url = `${scheme}://${entry.path}`;
      break;
    }
  }

  return { assetId, url };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  // -- Load config --
  const env = parseEnv(ENV_FILE);

  const token    = env['FORGOV-ELEARNING-KEY'];
  const rootNode = env['FORGOV-ROOT-NODE'];
  const cmsUrl   = env['FORGOV-CMS-URL'];
  const endpointPath = (env['SQUIZ_CMS_ASSET_ENDPOINT'] || '/__management_api/v1/assets/').trim();

  if (!token || !rootNode || !cmsUrl) {
    console.error(
      'Error: Missing required values in squiz/.env.\n' +
      'Required: FORGOV-ELEARNING-KEY, FORGOV-ROOT-NODE, FORGOV-CMS-URL'
    );
    process.exit(1);
  }

  // Build API endpoint from the origin of the CMS URL
  const apiEndpoint = `${new URL(cmsUrl).origin}${endpointPath}`;

  // -- Load existing log (for resume support) --
  let log = [];
  if (fs.existsSync(LOG_FILE)) {
    try {
      log = JSON.parse(fs.readFileSync(LOG_FILE, 'utf8'));
    } catch {
      console.warn('Warning: could not parse existing log.json — starting fresh.');
    }
  }

  const alreadyUploaded = new Set(log.map((e) => e.repoPath));

  // -- Find images --
  if (TEST_MODE) console.log(`Running in TEST MODE — capped at ${TEST_LIMIT} images.\n`);

  console.log('Scanning modules/ for images...');
  const allImages = await findImages(MODULES_DIR);
  let toUpload = allImages.filter(
    (img) => !alreadyUploaded.has(path.relative(path.resolve('./'), img))
  );

  if (TEST_MODE) toUpload = toUpload.slice(0, TEST_LIMIT);

  console.log(
    `Found ${allImages.length} image(s) total. ` +
    `${alreadyUploaded.size} already uploaded. ` +
    `${toUpload.length} to process.\n`
  );

  if (toUpload.length === 0) {
    console.log('Nothing to upload.');
    return;
  }

  // -- Upload loop --
  let uploaded = 0;
  let failed   = 0;

  for (const imagePath of toUpload) {
    const repoPath = path.relative(path.resolve('./'), imagePath);
    console.log(`\n\u001b[1m${repoPath}\u001b[0m`);

    try {
      // 1. Upload
      process.stdout.write(`  \u001b[90m[1/3]\u001b[0m Uploading ... `);
      const { assetId, url } = await uploadImage(imagePath, apiEndpoint, token, rootNode);
      console.log(`\u001b[1;32mUPLOADED\u001b[0m  asset ${assetId}`);
      if (url) console.log(`        URL: ${url}`);

      // 2. Hot-swap references
      process.stdout.write(`  \u001b[90m[2/3]\u001b[0m Updating references ... `);
      const refs = url ? await replaceImageReferences(imagePath, url) : [];
      if (refs.length === 0) {
        console.log('none found');
      } else {
        console.log(`\u001b[1;32m${refs.reduce((n, r) => n + r.count, 0)} replacement(s)\u001b[0m in ${refs.length} file(s)`);
        for (const { file, count } of refs) {
          console.log(`        \u001b[90m↳\u001b[0m ${file}  (${count})`);
        }
      }

      // 3. Delete from repo
      process.stdout.write(`  \u001b[90m[3/3]\u001b[0m Deleting from repo ... `);
      fs.unlinkSync(imagePath);
      console.log(`\u001b[1;32mDELETED\u001b[0m`);

      // Persist log entry immediately so progress is never lost
      log.push({
        repoPath,
        filename: path.basename(imagePath),
        assetId,
        url,
        referencesUpdated: refs,
        uploadedAt: new Date().toISOString(),
      });
      fs.writeFileSync(LOG_FILE, JSON.stringify(log, null, 2));

      uploaded++;
    } catch (err) {
      console.log(`\n  \u001b[1;31mFAILED\u001b[0m  ${err.message}`);
      failed++;
    }
  }

  // -- Summary --
  console.log(`\n${uploaded} uploaded, ${failed} failed.`);
  if (failed > 0) {
    console.log('Re-run the script to retry failed uploads.');
    process.exit(1);
  }
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
