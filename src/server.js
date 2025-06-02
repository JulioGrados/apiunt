'use strict'

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const morgan = require('morgan')

const routes = require('./routes')
const routesOpen = require('./routes/open')

const { authHandler } = require('./auth')

const server = express()

// ✅ Sirve archivos estáticos desde /files
server.use('/media', express.static(path.join(__dirname, '..', 'media')));
server.use('/files', express.static(path.join(__dirname, '..', 'files')));

server.use(
  fileUpload({
    defParamCharset: 'utf-8',
    createParentPath: true
  })
)

server.use(
  bodyParser.json({
    limit: '100mb',
    extended: true
  })
)

server.use(
  bodyParser.urlencoded({
    limit: '100mb',
    extended: true,
    parameterLimit: 500000
  })
)

const corsOpts = {
  origin: '*',

  methods: ['GET', 'POST'],

  allowedHeaders: ['Content-Type']
}

server.use(morgan('dev'))
server.use(cors())

routesOpen(server)
server.use(authHandler)
routes(server)

module.exports = server
