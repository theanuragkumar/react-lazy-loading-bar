import babel from "rollup-plugin-babel"; // To transpile
import resolve from "@rollup/plugin-node-resolve";  // To resolve dependencies
import external from "rollup-plugin-peer-deps-external"; // To resolve peer dependencies
import { terser } from "rollup-plugin-terser"; // To minify JS
import postcss from "rollup-plugin-postcss"; // To minimize CSS

export default [
  {
    input: "./src/index.js",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
      {
        file: "dist/index.es.js",
        format: "es",
        exports: "named",
      },
    ],
    plugins: [
      postcss({
        plugins: [],
        minimize: true,
      }),
      babel({
        exclude: "node_modules/**",
        presets: ["@babel/preset-react"],
      }),
      external(),
      resolve(),
      terser(),
    ],
  },
];
