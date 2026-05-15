# ForGov eLearning

Git repository of all ForGov eLearning module files.

## Repository structure

```
elearning-forgov/
├── index.html          # Auto-generated module listing (do not edit manually)
├── modules/            # All eLearning modules
│   └── Aurion_elearning/
├── archive/            # Retired modules
└── scripts/            # Maintenance and build scripts
```

---

## Scripts

### `create-index.mjs`

Regenerates the top-level `index.html` with links to every module in the repository.

**Steps:**
1. Recursively scans the `modules/` directory for every `index.html` file.
2. For each match, derives a human-readable module name from the parent directory name (underscores replaced with spaces).
3. Builds an HTML page containing an unordered list of links to each module.
4. Writes the result to `index.html` in the repository root, overwriting the previous file.

**Usage:**
```bash
node scripts/create-index.mjs
```

---

### `aurion-elearning-module-prep.mjs`

Prepares newly downloaded Aurion eLearning modules for the repository.

**Steps:**
1. Reads all subdirectories inside the supplied source directory (defaults to `modules/Aurion_elearning`).
2. For each module subdirectory, recursively searches for `story.html` and renames it to `index.html`.
3. Renames any module directories that contain spaces, replacing spaces with underscores.
4. After all modules are processed, updates the Aurion section of the root `index.html` with a fresh list of links to each module's `index.html`.

**Usage:**
```bash
node scripts/aurion-elearning-module-prep.mjs modules/Aurion_elearning/new
```

**Typical workflow for adding new Aurion modules:**
1. Download and extract the module files.
2. Place extracted folders in `modules/Aurion_elearning/new/`.
3. Run the script (command above).
4. Move processed folders out of `new/` into the parent `Aurion_elearning/` directory.
5. Delete the now-empty `new/` folder.
6. Stash changes, checkout the test branch, pop the stash, then commit and raise a PR.

---

### `psc-craft-module-prep.mjs`

Prepares PSC Whole of Government Induction modules (built in Articulate Storyline/Rise) for the repository. Target directories are defined in the `TARGET_DIRECTORIES` constant at the top of the file.

**Steps:**
1. For each target directory, recursively searches for `story.html` and renames it to `index.html`.
2. Copies `scripts/updateCourseData.js` into the module's `lib/` directory.
3. Injects a `<script>` tag for `lib/updateCourseData.js` into the module's root `index.html`, placed immediately after the existing `lzwcompress.js` script tag.
4. Locates the course data deserialization call (`return Promise.resolve(deserialize(...))`) in `index.html` and rewrites it to call `updateStoryToIndex()` on the deserialized data before returning it — this updates any internal `story.html` references at runtime.
5. Recursively searches for `sandbox.html` and renames it to `index.html`.
6. Recursively updates all `.js` files in the directory, replacing any remaining references to `sandbox.html` with `index.html`.

**Usage:**
```bash
node scripts/psc-craft-module-prep.mjs
```

---

### `updateCourseData.js`

A client-side JavaScript utility injected into PSC modules by `psc-craft-module-prep.mjs`. It is not run directly.

**Steps:**
1. Receives the deserialized course data object as input.
2. Recursively walks every array and object in the data structure.
3. Wherever a string value contains `story.html`, replaces it with `index.html`.
4. Mutates the data in-place so the corrected object is returned to the Storyline runtime.

---

## Image assets

The repository contains **5,135 images** across all modules:

| Type | Count |
|------|------:|
| PNG  | 3,266 |
| JPG  | 1,737 |
| SVG  |   107 |
| GIF  |    25 |

---

### `scripts/upload-images-to-squiz.mjs`

Uploads every image in `modules/` to Squiz Matrix, records each upload in `squiz/log.json`, then deletes the image from the repository.

**Steps:**
1. Parses `squiz/.env` to read the API bearer token (`FORGOV-ELEARNING-KEY`), parent node (`FORGOV-ROOT-NODE`), CMS URL (`FORGOV-CMS-URL`), and asset endpoint (`SQUIZ_CMS_ASSET_ENDPOINT`).
2. Loads `squiz/log.json` (if it exists) and builds a set of already-uploaded repo paths — re-runs are safe and will skip completed uploads.
3. Recursively scans `modules/` for all image files (`.png`, `.jpg`, `.jpeg`, `.gif`, `.svg`, `.webp`, `.bmp`, `.ico`).
4. For each image not yet in the log:
   - Base64-encodes the file and POSTs it to the Squiz asset API under the configured root node.
   - Appends a record (`repoPath`, `filename`, `assetId`, `url`, `uploadedAt`) to `squiz/log.json` immediately after a successful upload.
   - Deletes the image from the repository.
5. Prints a summary and exits with a non-zero code if any uploads failed (re-run to retry).

**Environment (`squiz/.env`):**

| Variable | Description |
|----------|-------------|
| `FORGOV-ELEARNING-KEY` | Bearer token for Squiz API auth |
| `FORGOV-ROOT-NODE` | Parent asset ID to upload images under |
| `FORGOV-CMS-URL` | Squiz instance base URL |
| `SQUIZ_CMS_ASSET_ENDPOINT` | API path (default: `/__management_api/v1/assets/`) |

**Usage:**
```bash
node scripts/upload-images-to-squiz.mjs
```

> `squiz/log.json` is not in `.gitignore` — commit it to keep a permanent record of where each image was uploaded.