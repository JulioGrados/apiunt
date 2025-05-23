'use strict'

const { Router } = require('express')
const Api = require('../controllers/mentor')

const router = new Router()

router.route('/mentor/count').get(Api.countDocuments)

router
  .route('/mentor')
  .get(Api.listMentors)
  .post(Api.createMentor)

router
  .route('/mentor/:id')
  .get(Api.detailMentor)
  .put(Api.updateMentor)
  .delete(Api.deleteMentor)

module.exports = router
