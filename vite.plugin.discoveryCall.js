import { handleDiscoveryCall } from './server/discoveryCall.js'

export default function discoveryCallApi() {
  return {
    name: 'discovery-call-api',
    apply: 'serve',
    configureServer(server) {
      server.middlewares.use('/api/discovery-call', (req, res, next) => {
        if (req.method !== 'POST') {
          if (req.method === 'GET' || req.method === 'HEAD') return next()
          res.statusCode = 405
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: 'Method not allowed' }))
          return
        }

        const chunks = []
        req.on('data', (chunk) => chunks.push(chunk))
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
