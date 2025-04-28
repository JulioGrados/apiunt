'use strict'

const routesAuth = require('./auth')
const routesUsers = require('./user')

module.exports = server => {
  server.use('/api/open', routesAuth)
  server.use('/api/open', routesUsers)
}