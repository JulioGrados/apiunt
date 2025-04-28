'use strict'

const { Router } = require('express')
const Api = require('../controllers/welcome')

const router = new Router()

router.route('/welcome/count').get(Api.countDocuments)

router
  .route('/welcome')
  .get(Api.listWelcomes)
  .post(Api.createWelcome)

router
  .route('/welcome/:id')
  .get(Api.detailWelcome)
  .put(Api.updateWelcome)
  .delete(Api.deleteWelcome)

module.exports = router
