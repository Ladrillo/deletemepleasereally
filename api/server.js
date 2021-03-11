const express = require('express')

const server = express()

server.use(express.json())

if (!process.env.NODE_ENV === 'production') {
  const cors = require('cors')
  server.use(cors())
}

server.use('*', (req, res) => {
  res.send('<h1>SUCCESS</h1>')
})

module.exports = server
