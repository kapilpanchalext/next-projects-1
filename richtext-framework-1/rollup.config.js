import babel from "@rollup/plugin-babel";
import autoprefixer from "autoprefixer";
import typescript from "rollup-plugin-typescript2";
import terser from "@rollup/plugin-terser";
import pkg from './package.json' with { type: "json" };
import postcss from 'rollup-plugin-postcss';

// const config = [
//   {
//     // preserveModules: true,
//     input: './src/index.ts',
//     output: [
//       {
//         file: pkg.main,
//         format: 'cjs',
//         sourcemap: true,
//       }
//     ],
//     external: [
//       ...Object.keys(pkg.dependencies || {})
//     ],
//     plugins: [
//       babel({
//         exclude: 'node_modules/**',
//         babelHelpers: 'bundled',
//       }),
//       typescript(),
//       postcss({
//         plugins: [autoprefixer()],
//         sourceMap: true,
//         extract: true,
//         minimize: true
//       }),
//       terser()
//     ]
//   }
// ];

// import json from '@rollup/plugin-json';
// import terser from '@rollup/plugin-terser';
// import typescript from 'rollup-plugin-typescript2';
// import { nodeResolve } from '@rollup/plugin-node-resolve';
// import commonjs from '@rollup/plugin-commonjs';

// const config = [
//   {
//     input: './src/index.ts',
//     output: [
//       {
//         file: 'bundle.js',
//         format: 'cjs',
//       },
//       {
//         file: 'bundle.min.js',
//         format: 'iife',
//         name: 'version',
//         plugins: [terser()],
//       },
//     ],
//     plugins: [
//       "@babel/plugin-transform-runtime",
//       json(),
//       nodeResolve({
//         extensions: ['.js', '.ts', '.tsx'],
//       }),
//       commonjs(),
//       typescript({
//         tsconfig: './tsconfig.json',
//       }),
//     ],
//   },
// ];

// export default config;

const config = [
  {
    input: './src/index.ts',
    output: {
      file: 'bundle.js',
      format: 'cjs',
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
      }),
      typescript(),
      postcss({
        plugins: [autoprefixer()],
        sourceMap: true,
        extract: true,
        minimize: true
      }),
      terser()
    ],
  },
];

export default config;