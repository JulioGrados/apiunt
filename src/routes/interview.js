'use strict'

const { Router } = require('express')
const Api = require('../controllers/interview')

const router = new Router()

router.route('/interviews/count').get(Api.countDocuments)

router
  .route('/interviews')
  .get(Api.listInterviews)
  .post(Api.createInterview)

router
  .route('/interviews/:id')
  .get(Api.detailInterview)
  .put(Api.updateInterview)
  .delete(Api.deleteInterview)

module.exports = router
