'use strict'

const { Router } = require('express')
const Api = require('../../controllers/portfolio')

const router = new Router()

router.route('/portfolios').get(Api.listOpenPortfolios)

module.exports = router
