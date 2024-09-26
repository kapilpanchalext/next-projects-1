import { defineConfig } from 'tsup';
import { join } from 'path';
import { readdirSync, promises as fs } from 'fs'; // Import promises for async operations

// Function to get CSS files from the src directory
async function copyCssFiles() {
  const srcDir = join(__dirname, 'src'); // Adjust this path if needed
  const files = readdirSync(srcDir);
  const cssFiles = files.filter(file => file.endsWith('.css'));

  // Copy each CSS file to the dist directory
  await Promise.all(cssFiles.map(async (file) => {
    const srcFile = join(srcDir, file);
    const destFile = join(__dirname, 'dist', file);
    await fs.copyFile(srcFile, destFile); // Use promises to copy the file
  }));
}

// Export the tsup configuration
export default defineConfig({
  entry: ['src/**/*.ts', 'src/**/*.tsx'], // Specify entry points
  format: ['cjs', 'esm'], // Output formats
  dts: true, // Generate TypeScript declaration files
  sourcemap: true, // Generate sourcemaps
  clean: true, // Clean the output directory before each build
  // Use the onSuccess option with async function
  onSuccess: async () => {
    await copyCssFiles(); // Call the copy function
  },
});