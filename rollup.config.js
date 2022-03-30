import typescript from 'rollup-plugin-typescript2';
import {terser} from 'rollup-plugin-terser';

export default [
  {
    input: 'index.ts',
    plugins: [
      typescript(),
      terser(),
    ],
    output: [
      {
        file: 'dist/chalk-web.es.js',
        format: 'es',
        name: 'chalk',
      },
      {
        file: 'dist/chalk-web.iife.js',
        format: 'iife',
        name: 'chalk',
      },
      {
        file: 'dist/chalk-web.umd.js',
        format: 'umd',
        name: 'chalk',
      },
    ],
  },
];