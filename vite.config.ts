import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
// @ts-expect-error local JS plugin used only for npm run dev
import discoveryCallApi from './vite.plugin.discoveryCall.js'

export default defineConfig({
  plugins: [
    react(),
    imagetools(),
    ViteImageOptimizer({
      exclude: /\.svg$/,
      png: { quality: 80 },
      jpg: { quality: 80 },
      jpeg: { quality: 80 },
      webp: { quality: 80 },
    }),
    discoveryCallApi(),
  ],
  server: {
    port: 4011,
    strictPort: true,
  },
  preview: {
    port: 4011,
    strictPort: true,
  },
  build: {
    // Keep large photos as separate files, not inlined base64.
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
})
