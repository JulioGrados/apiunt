'use strict'

const service = require('../services/team')

const listTeams = async (req, res) => {
  const teams = await service.listTeams(req.query)
  return res.status(200).json(teams)
}

const listOpenTeams = async (req, res) => {
  const teams = await service.listTeams(req.query)
  return res.status(200).json(teams)
}

const createTeam = async (req, res, next) => {
  const body = JSON.parse(req.body.data)
  const file = req.files && req.files.image
  console.log('body', body)
  try {
    const team = await service.createTeam(body, file, req.user)
    return res.status(201).json(team)
  } catch (error) {
    next(error)
  }
}

const updateTeam = async (req, res, next) => {
  const teamId = req.params.id
  const body = JSON.parse(req.body.data)
  const file = req.files && req.files.image
  try {
    const team = await service.updateTeam(
      teamId,
      body,
      file,
      req.user
    )
    return res.status(200).json(team)
  } catch (error) {
    next(error)
  }
}

const detailTeam = async (req, res, next) => {
  const teamId = req.params.id
  const params = req.query
  if (params.query) {
    params.query._id = teamId
  } else {
    params.query = {
      _id: teamId
    }
  }

  try {
    const team = await service.detailTeam(params)
    return res.status(200).json(team)
  } catch (error) {
    next(error)
  }
}

const deleteTeam = async (req, res, next) => {
  const teamId = req.params.id
  try {
    const team = await service.deleteTeam(teamId, req.user)
    return res.status(201).json(team)
  } catch (error) {
    next(error)
  }
}

const countDocuments = async (req, res) => {
  const count = await service.countDocuments(req.query)
  return res.json(count)
}

module.exports = {
  countDocuments,
  listTeams,
  listOpenTeams,
  createTeam,
  updateTeam,
  detailTeam,
  deleteTeam
}
