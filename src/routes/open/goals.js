'use strict'

const { Router } = require('express')
const Api = require('../../controllers/goal')

const router = new Router()

router.route('/goals').get(Api.listOpenGoals)

module.exports = router
