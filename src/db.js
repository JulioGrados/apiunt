'use strict'

const dbModule = require('db')
const config = require('config')

const { models, db } = dbModule(config.db)

db.connect(process.env.NODE_ENV = 'test')

module.exports = models
