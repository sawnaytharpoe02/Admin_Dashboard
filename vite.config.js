// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";
import fs from "fs";

// Function to get entry points from the pages directory
function getEntryPoints(dir) {
  const pagesDir = resolve(__dirname, dir);
  return fs.readdirSync(pagesDir).reduce((entries, file) => {
    const filePath = resolve(pagesDir, file);
    const entryName = file.replace(/\.[^/.]+$/, "");
    entries[entryName] = filePath;
    return entries;
  }, {});
}

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        project: resolve(__dirname, "./pages/project.html"),
      },
      output: {
        dir: "dist",
      },
    },
  },
});
