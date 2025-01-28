import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from '@tailwindcss/vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],

  build: {
    outDir: "dist", // Output directory for built files
    assetsDir: "static", // Subdirectory for assets
  },
});
