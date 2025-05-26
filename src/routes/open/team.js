'use strict'

const { Router } = require('express')
const Api = require('../../controllers/team')

const router = new Router()

router.route('/equipos').get(Api.listOpenTeams)

module.exports = router
