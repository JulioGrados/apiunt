'use strict'

const { Router } = require('express')
const Api = require('../controllers/question')

const router = new Router()

router.route('/question/count').get(Api.countDocuments)

router
  .route('/question')
  .get(Api.listQuestions)
  .post(Api.createQuestion)

router
  .route('/question/:id')
  .get(Api.detailQuestion)
  .put(Api.updateQuestion)
  .delete(Api.deleteQuestion)

module.exports = router
