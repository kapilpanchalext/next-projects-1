import babel from "@rollup/plugin-babel";
import autoprefixer from "autoprefixer";
import typescript from "rollup-plugin-typescript2";
import terser from "@rollup/plugin-terser";
import pkg from './package.json';
import postcss from 'rollup-plugin-postcss';

const config = [
  {
    preserveModules: true,
    input: './src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true,
      }
    ],
    external: [
      ...Object.keys(pkg.dependencies || {})
    ],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
      }),
      typescript({
        typescript: require('typescript')
      }),
      postcss({
        plugins: [autoprefixer()],
        sourceMap: true,
        extract: true,
        minimize: true
      }),
      terser()
    ]
  }
];

export default config;