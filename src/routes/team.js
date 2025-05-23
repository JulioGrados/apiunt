'use strict'

const { Router } = require('express')
const Api = require('../controllers/team')

const router = new Router()

router.route('/equipos/count').get(Api.countDocuments)

router
  .route('/equipos')
  .get(Api.listTeams)
  .post(Api.createTeam)

router
  .route('/equipos/:id')
  .get(Api.detailTeam)
  .put(Api.updateTeam)
  .delete(Api.deleteTeam)

module.exports = router
