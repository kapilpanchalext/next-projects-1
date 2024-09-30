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

/* BELOW IS THE WORKING CONFIGURATION - 1*/
/*
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
});*/


/* NEW CONFIGURATION - 2 WORKING WITHOUT CSS MODULES */
/* 
import { defineConfig } from 'tsup';
import { join } from 'path';
import { promises as fs } from 'fs';
import { sassPlugin } from 'esbuild-sass-plugin';
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

// export default defineConfig({
//   entry: ['src/index.ts'], // Entry point is now the Next.js layout
//   format: ['esm', 'cjs'],        // ESM and CommonJS formats
//   dts: true,                     // Generate declaration files
//   sourcemap: true,               // Generate sourcemaps
//   clean: true,                   // Clean the output directory
//   splitting: false,              // Disable code splitting
//   onSuccess: async () => {
//     await copyCssFiles();        // Copy CSS files to the dist folder
//   },
// });

export default defineConfig({
  entry: ['src/index.ts'], // Ensure you're using the correct entry point
  outDir: './dist',
  format: ['cjs', 'esm'],
  minify: true,
  bundle: true,
  dts: true,
  sourcemap: true,
  clean: true,
  loader: {
    '.scss': 'css',
  },
  esbuildPlugins: [
    sassPlugin(),
  ],
});*/

/* NEW CONFIGURATION - 3 .scss files WORKING WITHOUT SCSS STYLES APPLIED*/
// import { defineConfig } from 'tsup';
// import { sassPlugin } from 'esbuild-sass-plugin';

// export default defineConfig({
//   entry: ['src/index.ts'],
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

/* NEW CONFIGURATION - 4 .scss files WORKING WITH PARTIALLY APPLIED SCSS*/
/*
import { defineConfig } from 'tsup';
import { sassPlugin } from 'esbuild-sass-plugin';

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: './dist',
  format: ['cjs', 'esm'],
  minify: true,
  bundle: true,
  dts: true,
  sourcemap: true,
  clean: true,
  loader: {
    '.scss': 'css',
  },
  esbuildPlugins: [
    sassPlugin({
      type: 'css',
    }),
  ],
});
*/

/* NEW CONFIGURATION - 5 .scss files WORKING WITH PARTIALLY APPLIED SCSS
* npm install --save-dev postcss postcss-modules
*/
import { defineConfig } from 'tsup';
import { sassPlugin } from 'esbuild-sass-plugin';
import postcssModules from 'postcss-modules';
import postcss from 'postcss';
import path from 'path';
import fs from 'fs';

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: './dist',
  format: ['cjs', 'esm'],
  minify: true,
  bundle: true,
  dts: true,
  sourcemap: true,
  clean: true,
  esbuildPlugins: [
    sassPlugin({
      filter: /\.module\.scss$/,
      transform: async (css, filePath) => {
        const processor = postcss([
          postcssModules({
            generateScopedName: '[local]',
            getJSON: (cssFileName, json) => {
              const jsonFilePath = path.resolve('./dist', `${path.basename(cssFileName, '.scss')}.json`);
              const dir = path.dirname(jsonFilePath);

              if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
              }

              fs.writeFileSync(jsonFilePath, JSON.stringify(json, null, 2));
            },
          }),
        ]);

        const result = await processor.process(css, { from: filePath });
        const cssOutputPath = path.resolve('./dist', `${path.basename(filePath, '.scss')}.css`);
        fs.writeFileSync(cssOutputPath, result.css);

        return {
          contents: result.css,
          loader: 'css',
        };
      },
    }),
    sassPlugin({
      filter: /\.scss$/,
    }),
  ],
});