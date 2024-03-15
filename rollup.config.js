import babel from "@rollup/plugin-babel";

export default {
   input: "./src/index.js",
   output: {
      file: ".js",
      format: "cjs",
   },
   plugins: [
      babel({ exclude: "node_modules/**" }),
   ]
}
