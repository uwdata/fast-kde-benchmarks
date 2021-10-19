import bundleSize from 'rollup-plugin-bundle-size';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/index.js',
    plugins: [ bundleSize() ],
    output: [
      {
        file: 'dist/fast-kde-benchmarks.mjs',
        format: 'es',
        name: 'kde'
      },
      {
        file: 'dist/fast-kde-benchmarks.min.js',
        format: 'umd',
        sourcemap: true,
        plugins: [ terser({ ecma: 2018 }) ],
        name: 'kde'
      }
    ]
  }
];
