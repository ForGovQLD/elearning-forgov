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
  "modules/Whole_of_government_induction_and_onboarding/Module-1-working-in-the-queensland-public-sector-version-1",
  "modules/Whole_of_government_induction_and_onboarding/Module-2-integrity-and-ethics-version-1",
  "modules/Whole_of_government_induction_and_onboarding/Module-3-policy-version-1",
  "modules/Whole_of_government_induction_and_onboarding/Module-4-spirit-of-service-version-1"
];
const JS_FILE = "scripts/updateCourseData.js";

const changeToIndexHtml = async (directory, fileToChange, matchingFileFound = false) => {
  // Load the directory contents
  const filesAndDirectories = await fs.promises.readdir(directory, {
    withFileTypes: true,
  });

  // Filter for story.html files
  const matchingFiles = filesAndDirectories.filter(
    (dirent) => dirent.isFile() && dirent.name === fileToChange
  );

  if (matchingFiles.length > 0) {
    // Flag that a story.html file was found and updated
    matchingFileFound = true;

    // Rename each story.html file to index.html
    matchingFiles.forEach((file) => {
      fs.rename(
        path.join(directory, fileToChange),
        path.join(directory, "index.html"),
        (err) => {
          if (err) {
            console.error(`Error renaming file ${file.name}:`, err);
          } else {
            console.log(`Renamed ${file.name} to index.html`);
          }
        }
      );
    });
  }

  // Filter for subdirectories
  const subdirectories = filesAndDirectories.filter((dirent) =>
    dirent.isDirectory()
  );

  // Recursively call the function on each subdirectory
  // to check for more story.html files
  for await (const dirent of subdirectories) {
    const nestedDirectory = path.join(directory, dirent.name);
    matchingFileFound = await changeToIndexHtml(
      nestedDirectory,
      fileToChange,
      matchingFileFound
    );
  }

  // Return whether any story.html files were found and renamed
  return matchingFileFound;
};

const updateModules = async (directories) => {
  // Iterate over each target directory
  for (const directory of directories) {
    const fullPath = path.resolve(directory);

    // Run the function to change story.html to index.html
    const storyFileFound = await changeToIndexHtml(fullPath, "story.html");

    if (storyFileFound) {
      // If any story.html files were found and renamed, copy the JS file
      fs.copyFile(
        JS_FILE,
        path.join(directory, "lib/updateCourseData.js"),
        (err) => {
          if (err) {
            console.error(`Error copying ${JS_FILE} to ${directory}:`, err);
          } else {
            console.log(
              `Copied ${JS_FILE} to ${directory}/lib/updateCourseData.js`
            );
          }
        }
      );

      const indexHtmlPath = path.join(fullPath, "index.html");

      // Add the script tag to the index.html file
      if (fs.existsSync(indexHtmlPath)) {
        let html = await fs.promises.readFile(indexHtmlPath, "utf8");
        const lzwScript = `    <script type="text/javascript" src="lib/lzwcompress.js"></script>`;
        const scriptTag = `    <script type="text/javascript" src="lib/updateCourseData.js"></script>`;
        if (html.includes(lzwScript) && !html.includes(scriptTag)) {
          html = html.replace(lzwScript, `${lzwScript}\n${scriptTag}`);
        }

        // Add the function call to updateStoryToIndex
        const courseDataRegex =
          /return Promise.resolve\(deserialize\("(.*?)"\)\)/;

        if (courseDataRegex.test(html)) {
          html = html.replace(
            courseDataRegex,
            'const courseData = deserialize("$1");\n          updateStoryToIndex(courseData);\n          return courseData;'
          );
        }
        // if (html.includes(courseData) && !html.includes(updateFunctionCall)) {
        //   html = html.replace(
        //     courseData,
        //     `${courseData}\n${updateFunctionCall}`
        //   );
        // }
        // Write the updated HTML back to the file
        await fs.promises.writeFile(indexHtmlPath, html, "utf8");
      }

      console.log(`Updated ${fullPath} to index.html`);
    } else {
      console.log(`No story.html found in ${fullPath}`);
    }

    // Run the function to change sandbox.html to index.html
    const sandboxFileFound = await changeToIndexHtml(fullPath, "sandbox.html");

    if (sandboxFileFound) {

      const updateSandboxJSRefs = async (directory) => {
        const entries = await fs.promises.readdir(directory, {
          withFileTypes: true,
        });
        // Update references in .js files in this directory
        const jsFiles = entries.filter(
          (d) => d.isFile() && d.name.endsWith(".js")
        );
        await Promise.all(
          jsFiles.map(async (file) => {
            const filePath = path.join(directory, file.name);
            let content = await fs.promises.readFile(filePath, "utf8");
            const updated = content.replace(
              /sandbox\.html/g,
              `index.html`
            );
            if (updated !== content) {
              await fs.promises.writeFile(filePath, updated, "utf8");
              console.log(`Updated references to sandbox.html in ${filePath}`);
            }
          })
        );

        // Recurse into subdirectories
        const subdirs = entries.filter((d) => d.isDirectory());
        for (const dirent of subdirs) {
          const nested = path.join(directory, dirent.name);
          await updateSandboxJSRefs(nested);
        }
      }

      await updateSandboxJSRefs(directory);

      console.log(`Updated sandbox.html to index.html in ${fullPath}`);
    } else {
      console.log(`No sandbox.html found in ${fullPath}`);
    }
  }
};

// Run the updates on the target directories
updateModules(TARGET_DIRECTORIES);
