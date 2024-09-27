// import { sassPlugin } from 'esbuild-sass-plugin';
// import { defineConfig } from 'tsup';

// export default defineConfig({
//   entry: ['src/**/*.ts', 'src/**/*.tsx'],
//   outDir: './dist',
//   format: ['cjs', 'esm'],
//   minify: true,
//   bundle: true,
//   dts: true,
//   sourcemap: true,
//   clean: true,
//   loader: {
//     '.scss': 'css',
//   },
//   esbuildPlugins: [
//     sassPlugin(),
//   ],
// });

// import { defineConfig } from 'tsup';
// import cssModulesPlugin from 'esbuild-plugin-css-modules';

// export default defineConfig({
//   entry: ['src/**/*.ts', 'src/**/*.tsx'],
//   outDir: 'dist',
//   format: ['cjs', 'esm'],
//   bundle: true,
//   minify: true,
//   splitting: true,
//   sourcemap: true,
//   clean: true,
//   esbuildPlugins: [
//     cssModulesPlugin()
//   ]
// });

import { defineConfig } from 'tsup';
import { join } from 'path';
import { promises as fs } from 'fs';

// Function to copy all CSS files
async function copyCssFiles() {
  const srcDir = join(__dirname, 'src/app');
  const destDir = join(__dirname, 'dist');

  const cssFiles = ['globals.css', 'page.module.css'];
  await Promise.all(
    cssFiles.map(async (file) => {
      const srcFile = join(srcDir, file);
      const destFile = join(destDir, file);
      try {
        await fs.copyFile(srcFile, destFile);
        console.log(`Copied ${file} to dist`);
      } catch (error) {
        console.error(`Error copying ${file}: ${error}`);
      }
    })
  );
}

export default defineConfig({
  entry: ['src/index.ts'], // Entry point is now the Next.js layout
  format: ['esm', 'cjs'],        // ESM and CommonJS formats
  dts: true,                     // Generate declaration files
  sourcemap: true,               // Generate sourcemaps
  clean: true,                   // Clean the output directory
  splitting: false,              // Disable code splitting
  onSuccess: async () => {
    await copyCssFiles();        // Copy CSS files to the dist folder
  },
});
