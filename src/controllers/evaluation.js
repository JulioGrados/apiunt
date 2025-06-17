'use strict'

const service = require('../services/evaluation')

const listEvaluations = async (req, res) => {
  const allys = await service.listEvaluations(req.query)
  return res.status(200).json(allys)
}

const listOpenEvaluations = async (req, res) => {
  const allys = await service.listEvaluations(req.query)
  return res.status(200).json(allys)
}

const createEvaluation = async (req, res, next) => {
  const body = JSON.parse(req.body.data)
  const file = req.files && req.files.file
  try {
    const ally = await service.createEvaluation(body, file, req.user)
    return res.status(201).json(ally)
  } catch (error) {
    next(error)
  }
}

const updateEvaluation = async (req, res, next) => {
  const allyId = req.params.id
  const body = JSON.parse(req.body.data)
  const file = req.files && req.files.file
  try {
    const ally = await service.updateEvaluation(
      allyId,
      body,
      file,
      req.user
    )
    return res.status(200).json(ally)
  } catch (error) {
    next(error)
  }
}

const detailEvaluation = async (req, res, next) => {
  const allyId = req.params.id
  const params = req.query
  if (params.query) {
    params.query._id = allyId
  } else {
    params.query = {
      _id: allyId
    }
  }

  try {
    const ally = await service.detailEvaluation(params)
    return res.status(200).json(ally)
  } catch (error) {
    next(error)
  }
}

const deleteEvaluation = async (req, res, next) => {
  const allyId = req.params.id
  try {
    const ally = await service.deleteEvaluation(allyId, req.user)
    return res.status(201).json(ally)
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
  listEvaluations,
  listOpenEvaluations,
  createEvaluation,
  updateEvaluation,
  detailEvaluation,
  deleteEvaluation
}
