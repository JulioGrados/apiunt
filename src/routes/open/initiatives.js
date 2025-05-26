'use strict'

const { Router } = require('express')
const Api = require('../../controllers/initiative')

const router = new Router()

router.route('/initiatives').get(Api.listOpenInitiatives)

module.exports = router
