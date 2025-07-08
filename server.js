const express = require('express')
const next = require('next')
const https = require('https')
const fs = require('fs')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const PORT = 3000
const HOST = '0.0.0.0'

// Carregar certificados (crie com mkcert primeiro)
const httpsOptions = {
  key: fs.readFileSync('localhost-key.pem'),
  cert: fs.readFileSync('localhost.pem')
}

app.prepare().then(() => {
  const server = express()
  
  // Configurar todas as rotas para serem manipuladas pelo Next.js
  server.all('*', (req, res) => {
    return handle(req, res)
  })

  // Criar servidor HTTPS
  https.createServer(httpsOptions, server).listen(PORT, HOST, err => {
    if (err) throw err
    console.log(`
      > Ready on https://${HOST}:${PORT}
      > Network: https://${getLocalIP()}:${PORT}
    `)
  })
})

// Função para obter o IP local
function getLocalIP() {
  const interfaces = require('os').networkInterfaces()
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === 'IPv4' && !iface.internal) {
        return iface.address
      }
    }
  }
  return 'localhost'
}