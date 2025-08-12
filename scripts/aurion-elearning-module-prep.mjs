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
        path.join(directory, 'story.html'),
        path.join(directory, 'index.html'),
        (err) => {
          if (err) {
            console.error(`Error renaming file ${file.name}:`, err);
          } else {
            console.log(`Renamed ${file.name} to index.html`);
          }
        }
      )
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

}

const updateModules = async (source_dir) => {
  const directories = fs.readdirSync(source_dir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => path.join(source_dir, dirent.name));

  // Iterate over each target directory
  for (const directory of directories) {
    const fullPath = path.resolve(directory);

    // Run the function to change story.html to index.html
    const storyFileFound = await changeStoryToIndexHtml(fullPath);

    if (storyFileFound) {
    console.log(`Updated ${fullPath} to index.html`);
    } else {
      console.log(`No story.html found in ${fullPath}`);
    }

    const newDirName = fullPath.replace(/ /g, '_');
    if (newDirName !== fullPath) {
      // Rename the directory to replace spaces with underscores
      fs.rename(fullPath, newDirName, (err) => {
        if (err) {
          console.error(`Error renaming directory ${fullPath}:`, err);
        } else {
          console.log(`Renamed directory ${fullPath} to ${newDirName}`);
        }
      });
    }
  }
}

const [, , SOURCE_DIR] = process.argv;

// Run the updates on the target directory
updateModules(SOURCE_DIR);

