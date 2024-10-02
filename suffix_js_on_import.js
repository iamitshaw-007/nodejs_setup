/* eslint-disable quotes */
import fs from "fs";
import path from "path";

// Define the regex to match import statements
const regex =
    /import\s+(?:(?:[\w{}\s,*]+)\s+from\s+)?['"](.\/|..\/)+[\w./-]*['"]/g;

// Use path.resolve to get the absolute path of the directory
const directoryPath = path.resolve(path.dirname(import.meta.filename), "dist");

// Function to append .js to import paths
function appendJsExtension(match) {
    const relativePathRegex = /(['"](.\/|..\/)[\w./-]*)['"]/;
    // Skip if it already ends with .js
    if (match.endsWith('.js"')) {
        return match;
    }
    return match.replace(relativePathRegex, '$1.js"');
}

// Function to process files in a directory
function processDirectory(directoryPath) {
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return;
        }
        files.forEach((file) => {
            const filePath = path.join(directoryPath, file);
            if (fs.statSync(filePath).isDirectory()) {
                processDirectory(filePath); // Recursively process subdirectories
            } else if (filePath.endsWith(".js")) {
                processFile(filePath);
            }
        });
    });
}

// Function to process a single file
function processFile(filePath) {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const modifiedContent = fileContent.replace(regex, appendJsExtension);
    fs.writeFileSync(filePath, modifiedContent, "utf-8");
}

// Process the directory
processDirectory(directoryPath);
