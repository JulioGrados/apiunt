'use strict'

const routesPage = require('./page')
const routesUser = require('./users')
const routesAlly = require('./ally')
const routesGoal = require('./goals')
const routesInitiative = require('./initiatives')
const routesPortfolio = require('./portfolio')
const routesProgram = require('./program')
const routesWelcome = require('./welcome')
const routesQuestion = require('./question')
const routesUpload = require('./upload')

module.exports = server => {
  server.use('/api', routesPage)
  server.use('/api', routesUser)
  server.use('/api', routesAlly)
  server.use('/api', routesGoal)
  server.use('/api', routesInitiative)
  server.use('/api', routesPortfolio)
  server.use('/api', routesProgram)
  server.use('/api', routesWelcome)
  server.use('/api', routesQuestion)
  server.use('/api', routesUpload)
}
