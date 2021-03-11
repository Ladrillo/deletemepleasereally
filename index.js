require('dotenv').config()
const express = require('express')
const path = require('path')
const server = require('./api/server')

const PORT = process.env.PORT || 4000

server.use(express.static(path.join(__dirname, 'client/build')))
server.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

server.listen(PORT, () => {
  console.log('success listening on', PORT)
})
