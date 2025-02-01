import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteStaticCopy } from "vite-plugin-static-copy";  // Correct import

export default defineConfig({
  plugins: [
    vue(),
    viteStaticCopy({
      targets: [
        {
          src: "values.html",  // Ensure values.html is copied
          dest: ""  // Copy to the root of dist/
        },

        { 
          src: "src/values.js", 
          dest: "" 
        },
      ]
    })
  ],

  build: {
    outDir: "dist", // Output directory for built files
    assetsDir: "static", // Subdirectory for assets
  },
});
