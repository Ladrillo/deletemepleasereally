const express = require('express')
const server = express()

server.use(express.json())


if (!process.env.NODE_ENV === 'production') {
  const cors = require('cors')
  server.use(cors())
}

server.get('/api', (req, res) => {
  res.json({ message: 'api up' })
})

module.exports = server
