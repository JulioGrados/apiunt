'use strict'

const { Router } = require('express')
const Api = require('../../controllers/program')

const router = new Router()

router.route('/program').get(Api.listOpenPrograms)

module.exports = router
