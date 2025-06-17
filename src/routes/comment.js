'use strict'

const { Router } = require('express')
const Api = require('../controllers/comment')

const router = new Router()

router.route('/comments/count').get(Api.countDocuments)

router
  .route('/comments')
  .get(Api.listComments)
  .post(Api.createComment)

router
  .route('/comments/:id')
  .get(Api.detailComment)
  .put(Api.updateComment)
  .delete(Api.deleteComment)

module.exports = router
