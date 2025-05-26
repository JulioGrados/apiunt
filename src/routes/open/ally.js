'use strict'

const { Router } = require('express')
const Api = require('../../controllers/ally')

const router = new Router()

router.route('/allys').get(Api.listOpenAllys)

module.exports = router
