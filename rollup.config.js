import pkg from './package.json'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        exports: 'auto'
      },
      {
        file: pkg.module,
        format: 'esm',
        exports: 'auto'
      }
    ],
    plugins: [
      babel({
        exclude: /node_modules/,
        runtimeHelpers: true
      }),
      terser()
    ]
  }
]
