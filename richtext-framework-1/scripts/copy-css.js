const fs = require('fs');
const path = require('path');

// Source and destination directories
const srcDir = path.join(__dirname, '../src/app'); // Adjust the path based on your structure
const destDir = path.join(__dirname, '../dist'); // Destination directory

// Function to create the destination directory if it doesn't exist
function ensureDestDirExists() {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
    console.log(`Created directory: ${destDir}`);
  }
}

// Function to copy all CSS files
function copyCssFiles() {
  fs.readdir(srcDir, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return;
    }

    console.log('CSS files in source directory:', files.filter(file => file.endsWith('.css'))); // Log only CSS files

    files.forEach(file => {
      if (file.endsWith('.css')) {
        const srcFile = path.join(srcDir, file);
        const destFile = path.join(destDir, file);

        // Copy the file
        fs.copyFile(srcFile, destFile, (err) => {
          if (err) {
            console.error(`Error copying ${file}:`, err);
          } else {
            console.log(`Copied ${file} to ${destDir}`);
          }
        });
      }
    });
  });
}

// Ensure the destination directory exists before copying files
ensureDestDirExists();
copyCssFiles();