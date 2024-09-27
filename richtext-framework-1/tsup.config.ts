// import { defineConfig } from 'tsup';
// import { join } from 'path';
// import { promises as fs } from 'fs';

// async function copyGlobalCssFile() {
//   const srcDir = join(__dirname, 'src/app/');
//   console.log('Source Directory: ', srcDir);
//   const globalCssFile = 'globals.css';

//   const srcFile = join(srcDir, globalCssFile);
//   const destFile = join(__dirname, 'dist', globalCssFile);

//   await fs.copyFile(srcFile, destFile);
// }

// export default defineConfig({
//   entry: ['src/**/*.ts', 'src/**/*.tsx'],
//   format: ['cjs', 'esm'],
//   dts: true,
//   sourcemap: true,
//   clean: true,

//   onSuccess: async () => {
//     await copyGlobalCssFile();
//   },
// });

import { defineConfig } from 'tsup';
import cssModulesPlugin from 'esbuild-plugin-css-modules';

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  format: ['cjs', 'esm'],
  bundle: true,
  minify: true,
  splitting: true,
  sourcemap: true,
  clean: true,
  esbuildPlugins: [
    cssModulesPlugin()
  ],
  injectStyle: true
});
