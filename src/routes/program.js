'use strict'

const { Router } = require('express')
const Api = require('../controllers/program')

const router = new Router()

router.route('/program/count').get(Api.countDocuments)

router
  .route('/program')
  .get(Api.listPrograms)
  .post(Api.createProgram)

router
  .route('/program/:id')
  .get(Api.detailProgram)
  .put(Api.updateProgram)
  .delete(Api.deleteProgram)

module.exports = router
