import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  build: {
    outDir: "dist", // Output directory for built files
    assetsDir: "static", // Subdirectory for assets
  },
});
