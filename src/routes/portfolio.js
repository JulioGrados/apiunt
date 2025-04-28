'use strict'

const { Router } = require('express')
const Api = require('../controllers/portfolio')

const router = new Router()

router.route('/portfolios/count').get(Api.countDocuments)

router
  .route('/portfolios')
  .get(Api.listPortfolios)
  .post(Api.createPortfolio)

router
  .route('/portfolios/:id')
  .get(Api.detailPortfolio)
  .put(Api.updatePortfolio)
  .delete(Api.deletePortfolio)

module.exports = router
