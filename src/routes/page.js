'use strict'

const { Router } = require('express')
const Api = require('../controllers/page')

const router = new Router()

router.route('/pages/count').get(Api.countDocuments)

router
  .route('/pages')
  .get(Api.listPages)
  .post(Api.createPage)

router
  .route('/pages/:id')
  .get(Api.detailPage)
  .put(Api.updatePage)
  .delete(Api.deletePage)

module.exports = router
