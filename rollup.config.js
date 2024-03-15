import babel from "@rollup/plugin-babel";
import r from "@rollup/plugin-node-resolve";

export default {
   input: "./src/index.js",
   output: {
      file: ".js",
      format: "cjs",
   },
   plugins: [
      babel({ exclude: "node_modules/**" }),
      r()
   ]
}
