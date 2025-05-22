'use strict'

const server = require('./server')
const moment = require('moment-timezone')
const config = require('config')
const { handleMessage } = require('utils').log

const filePath = 'api:src:index'

const main = async () => {
  moment.locale('es')
  moment.tz.setDefault('America/Lima')

  const serverApp = await server.listen(8001)
  handleMessage(`[Api Server] running in port ${8001}`, filePath)
}
process.on('uncaughtException', error => console.log(error))
process.on('unhandledRejection', error => console.log(error))

main()
