'use strict'

const { Router } = require('express')
const Api = require('../controllers/goal')

const router = new Router()

router.route('/goals/count').get(Api.countDocuments)

router
  .route('/goals')
  .get(Api.listGoals)
  .post(Api.createGoal)

router
  .route('/goals/:id')
  .get(Api.detailGoal)
  .put(Api.updateGoal)
  .delete(Api.deleteGoal)

module.exports = router
