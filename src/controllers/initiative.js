'use strict'

const service = require('../services/initiative')

const listInitiatives = async (req, res) => {
  const initiatives = await service.listInitiatives(req.query)
  console.log('initiatives', initiatives)
  return res.status(200).json(initiatives)
}

const listOpenInitiatives = async (req, res) => {
  const initiatives = await service.listInitiatives(req.query)
  console.log('initiatives', initiatives)
  return res.status(200).json(initiatives)
}

const createInitiative = async (req, res, next) => {
  const body = JSON.parse(req.body.data)
  const file = req.files && req.files.image
  try {
    const initiative = await service.createInitiative(body, file, req.user)
    return res.status(201).json(initiative)
  } catch (error) {
    next(error)
  }
}

const updateInitiative = async (req, res, next) => {
  const initiativeId = req.params.id
  const body = JSON.parse(req.body.data)
  const file = req.files && req.files.image
  try {
    const initiative = await service.updateInitiative(
      initiativeId,
      body,
      file,
      req.user
    )
    return res.status(200).json(initiative)
  } catch (error) {
    next(error)
  }
}

const detailInitiative = async (req, res, next) => {
  const initiativeId = req.params.id
  const params = req.query
  if (params.query) {
    params.query._id = initiativeId
  } else {
    params.query = {
      _id: initiativeId
    }
  }

  try {
    const initiative = await service.detailInitiative(params)
    return res.status(200).json(initiative)
  } catch (error) {
    next(error)
  }
}

const deleteInitiative = async (req, res, next) => {
  const initiativeId = req.params.id
  try {
    const initiative = await service.deleteInitiative(initiativeId, req.user)
    return res.status(201).json(initiative)
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
  listInitiatives,
  listOpenInitiatives,
  createInitiative,
  updateInitiative,
  detailInitiative,
  deleteInitiative
}
