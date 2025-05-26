'use strict'

const { Router } = require('express')
const Api = require('../../controllers/mentor')

const router = new Router()

router.route('/mentor').get(Api.listOpenMentors)

module.exports = router
