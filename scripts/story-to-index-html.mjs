/**
 * This script renames all story.html files to index.html
 * in specified directories and their subdirectories.
 * It also copies a JavaScript file to the lib directory
 * and updates each module's main index.html file to include the script
 * and call its function to update the course data.
 */

import fs from "fs";
import path from "path";

const TARGET_DIRECTORIES = [
        'modules/Whole_of_government_induction_and_onboarding/Module-1-Working-in-the-queensland-public-sector',
        'modules/Whole_of_government_induction_and_onboarding/Module-2-Integrity-and-ethics',
        'modules/Whole_of_government_induction_and_onboarding/Module-3-Policy',
        'modules/Whole_of_government_induction_and_onboarding/Module-4-Spirit-of-service'
      ];
const JS_FILE = 'scripts/updateCourseData.js';


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

const updateModules = async (directories) => {
  // Iterate over each target directory
  for (const directory of directories) {
    const fullPath = path.resolve(directory);

    // Run the function to change story.html to index.html
    const storyFileFound = await changeStoryToIndexHtml(fullPath);

    if (storyFileFound) {
      // If any story.html files were found and renamed, copy the JS file
      fs.copyFile(
        JS_FILE,
        path.join(directory, 'lib/updateCourseData.js'),
        (err) => {
          if (err) {
            console.error(`Error copying ${JS_FILE} to ${directory}:`, err);
          } else {
            console.log(`Copied ${JS_FILE} to ${directory}/lib/updateCourseData.js`);
          }
        }
      )

      const indexHtmlPath = path.join(fullPath, 'index.html');

      // Add the script tag to the index.html file
      if (fs.existsSync(indexHtmlPath)) {
        let html = await fs.promises.readFile(indexHtmlPath, "utf8");
        const lzwScript = `    <script type="text/javascript" src="lib/lzwcompress.js"></script>`;
        const scriptTag = `    <script type="text/javascript" src="lib/updateCourseData.js"></script>`;
        if (html.includes(lzwScript) && !html.includes(scriptTag)) {
          html = html.replace(
            lzwScript,
            `${lzwScript}\n${scriptTag}`
          );
        }

        // Add the function call to updateStoryToIndex
        const courseData = `          const courseData = deserialize(encoded)`,
              updateFunctionCall = `          updateStoryToIndex(courseData);`;

        if (html.includes(courseData) && !html.includes(updateFunctionCall)) {
          html = html.replace(
            courseData,
            `${courseData}\n${updateFunctionCall}`
          );
        }
        // Write the updated HTML back to the file
        await fs.promises.writeFile(indexHtmlPath, html, "utf8");
      }

      console.log(`Updated ${fullPath} to index.html`);
    } else {
      console.log(`No story.html found in ${fullPath}`);
    }
  }
}

// Run the updates on the target directories
updateModules(TARGET_DIRECTORIES);
