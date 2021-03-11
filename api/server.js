const express = require('express')
const path = require('path')
const server = express()

server.use(express.json())

server.use(express.static(path.join(__dirname, 'client/build')))

if (!process.env.NODE_ENV === 'production') {
  const cors = require('cors')
  server.use(cors())
}

server.get('/api', (req, res) => {
  res.json({ message: 'api up' })
})

server.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

module.exports = server
