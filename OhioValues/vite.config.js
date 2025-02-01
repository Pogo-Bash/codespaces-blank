import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { viteStaticCopy } from "vite-plugin-static-copy";
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    vue(),tailwindcss(),
  ],
  build: {
    outDir: "dist",
    assetsDir: "assets",  // Changed to 'assets' for clarity
    manifest: true,       // Generate manifest file
  },
  server: {
    port: 3000,
    strictPort: true,
  }

});