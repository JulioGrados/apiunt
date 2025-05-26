'use strict'

const routesAuth = require('./auth')
const routesUsers = require('./user')
const routesAllys = require('./ally')
const routesGoals = require('./goals')
const routesInitiatives = require('./initiatives')
const routesMentor = require('./mentor')
const routesPortfolio = require('./portfolio')
const routesProgram = require('./program')
const routesTeam = require('./team')

module.exports = server => {
  server.use('/api/open', routesAuth)
  server.use('/api/open', routesUsers)
  server.use('/api/open', routesAllys)
  server.use('/api/open', routesGoals)
  server.use('/api/open', routesInitiatives)
  server.use('/api/open', routesMentor)
  server.use('/api/open', routesPortfolio)
  server.use('/api/open', routesProgram)
  server.use('/api/open', routesTeam)
}