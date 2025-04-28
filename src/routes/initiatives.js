'use strict'

const { Router } = require('express')
const Api = require('../controllers/initiative')

const router = new Router()

router.route('/initiatives/count').get(Api.countDocuments)

router
  .route('/initiatives')
  .get(Api.listInitiatives)
  .post(Api.createInitiative)

router
  .route('/initiatives/:id')
  .get(Api.detailInitiative)
  .put(Api.updateInitiative)
  .delete(Api.deleteInitiative)

module.exports = router
