/**
 * This script renames all story.html files to index.html
 * in specified directories and their subdirectories.
 * It also updates the directory name to replace spaces with underscores.
 */

import fs from "fs";
import path from "path";

const changeStoryToIndexHtml = async (directory, storyFileFound = false) => {
  // Load the directory contents
  const filesAndDirectories = await fs.promises.readdir(directory, { withFileTypes: true });

  // Filter for story.html files
  const storyFiles = filesAndDirectories
  .filter(dirent => dirent.isFile() && dirent.name === 'story.html');

  if (storyFiles.length > 0) {
    // Flag that a story.html file was found and updated
    storyFileFound = true;

    // Rename each story.html file to index.html
    storyFiles.forEach(file => {
      fs.rename(
        path.join(directory, "story.html"),
        path.join(directory, "index.html"),
        (err) => {
          if (err) {
            console.error(`\u001b[1;31mError \u001b[0mrenaming file ${file.name}:`, err);
          } else {
            console.log(`\u001b[1;32mRenamed \u001b[0m${file.name} to index.html`);
          }
        }
      );
    });
  }

  // Filter for subdirectories
  const subdirectories = filesAndDirectories.filter(dirent => dirent.isDirectory());

  // Recursively call the function on each subdirectory
  // to check for more story.html files
  for await (const dirent of subdirectories) {
    const nestedDirectory = path.join(directory, dirent.name);
    storyFileFound = await changeStoryToIndexHtml(nestedDirectory, storyFileFound);
  }

  // Return whether any story.html files were found and renamed
  return storyFileFound;
};

const updateAurionElearningIndex = async (sourceDir, indexHtmlPath = "./index.html") => {
  const modules = (await fs.promises.readdir(sourceDir, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  const ulHtml = `<ul>
  ${modules.map((module) => `<li><a href="${path.join(sourceDir, module, "index.html")}" target="_blank">${module.replace(/_/g, " ")}</a></li>`).join("\n")}
  </ul>`;

  let html = await fs.promises.readFile(indexHtmlPath, "utf8");

  html = html.replace(/(<li>\s*Aurion elearning updates\s*)(<ul>[\s\S]*?<\/ul>)/i,`$1${ulHtml}`);

  await fs.promises.writeFile(indexHtmlPath, html);
  console.log(
    `\u001b[1;32mUpdated \u001b[0mAurion elearning module list in ${indexHtmlPath}`
  );
};

const updateModules = async (source_dir = "modules/Aurion_elearning") => {
  const directories = fs.readdirSync(source_dir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => path.join(source_dir, dirent.name));

  // Iterate over each target directory
  for (const directory of directories) {
    const fullPath = path.resolve(directory);

    // Run the function to change story.html to index.html
    const storyFileFound = await changeStoryToIndexHtml(fullPath);

    if (storyFileFound) {
      console.log(`\u001b[1;32mUpdated \u001b[0m${fullPath} to index.html`);
    } else {
      console.log(`\u001b[1;31mNo story.html found \u001b[0min ${fullPath}`);
    }

    const newDirName = directory.replace(/ /g, "_");
    if (newDirName !== directory) {
      // Rename the directory to replace spaces with underscores
      fs.rename(directory, newDirName, (err) => {
        if (err) {
          console.error(`\u001b[1;31mError \u001b[0mrenaming directory ${directory}:`, err);
        } else {
          console.log(`\u001b[1;32mRenamed directory \u001b[0m${directory} to ${newDirName}`);
        }
      });
    }
  }

  // After processing all directories, update the Aurion elearning module links
  // listed in the repo index.html file.
  await updateAurionElearningIndex(source_dir);
};

const [, , SOURCE_DIR] = process.argv;

// Run the updates on the target directory
updateModules(SOURCE_DIR);
