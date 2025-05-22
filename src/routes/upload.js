'use strict'

const { Router } = require('express')
const Api = require('../controllers/upload')

const router = new Router()

router.route('/upload/count').get(Api.countDocuments)

router
  .route('/upload')
  .get(Api.listUploads)
  .post(Api.createUpload)

router
  .route('/upload/:id')
  .get(Api.detailUpload)
  .put(Api.updateUpload)
  .delete(Api.deleteUpload)

module.exports = router