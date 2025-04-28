'use strict'

const { Router } = require('express')
const Api = require('../controllers/ally')

const router = new Router()

router.route('/allys/count').get(Api.countDocuments)

router
  .route('/allys')
  .get(Api.listAllys)
  .post(Api.createAlly)

router
  .route('/allys/:id')
  .get(Api.detailAlly)
  .put(Api.updateAlly)
  .delete(Api.deleteAlly)

module.exports = router
