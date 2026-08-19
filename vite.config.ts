import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import { handleDiscoveryCall } from './server/discoveryCall.js'

function discoveryCallApi(): Plugin {
  return {
    name: 'discovery-call-api',
    configureServer(server) {
      server.middlewares.use('/api/discovery-call', (req, res, next) => {
        if (req.method !== 'POST') {
          if (req.method === 'GET' || req.method === 'HEAD') return next()
          res.statusCode = 405
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'Method not allowed' }))
          return
        }

        const chunks: Buffer[] = []
        req.on('data', (chunk) => chunks.push(chunk as Buffer))
        req.on('end', async () => {
          let body = {}
          try {
            body = JSON.parse(Buffer.concat(chunks).toString('utf8') || '{}')
          } catch {
            res.statusCode = 400
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({ error: 'Invalid JSON' }))
            return
          }

          const result = await handleDiscoveryCall(body)
          res.statusCode = result.status
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify(result.json))
        })
      })
    },
  }
}

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
