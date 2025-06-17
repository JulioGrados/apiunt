'use strict'

const { Router } = require('express')
const Api = require('../controllers/evaluation')

const router = new Router()

router.route('/evaluations/count').get(Api.countDocuments)

router
  .route('/evaluations')
  .get(Api.listEvaluations)
  .post(Api.createEvaluation)

router
  .route('/evaluations/:id')
  .get(Api.detailEvaluation)
  .put(Api.updateEvaluation)
  .delete(Api.deleteEvaluation)

module.exports = router
