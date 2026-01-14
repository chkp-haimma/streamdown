import { defineConfig } from "tsup";

export default defineConfig({
  dts: true,
  entry: ["index.tsx"],
  format: ["cjs", "esm"],
  minify: true,
  outDir: "dist",
  sourcemap: false,
  external: ["react", "react-dom", "react/jsx-runtime"],
  noExternal: [
    // Bundle these to avoid transitive dependency conflicts for consumers
    // CJK packages that depend on micromark-util-symbol
    "remark-cjk-friendly",
    "remark-cjk-friendly-gfm-strikethrough",
    "micromark-extension-cjk-friendly",
    "micromark-extension-cjk-friendly-gfm-strikethrough",
    "micromark-extension-cjk-friendly-util",
    "micromark-util-symbol",
    // rehype-raw chain that depends on entities
    "rehype-raw",
    "hast-util-raw",
    "parse5",
    "entities",
  ],
  treeshake: true,
  splitting: true,
  platform: "browser",
});
