'use strict'

const service = require('../services/program')

const listPrograms = async (req, res) => {
  const programs = await service.listPrograms(req.query)
  return res.status(200).json(programs)
}

const createProgram = async (req, res, next) => {
  const body = JSON.parse(req.body.data)
  const file = req.files && req.files.image
  try {
    const program = await service.createProgram(body, file, req.user)
    return res.status(201).json(program)
  } catch (error) {
    next(error)
  }
}

const updateProgram = async (req, res, next) => {
  const programId = req.params.id
  const body = JSON.parse(req.body.data)
  const file = req.files && req.files.image
  try {
    const program = await service.updateProgram(
      programId,
      body,
      file,
      req.user
    )
    return res.status(200).json(program)
  } catch (error) {
    next(error)
  }
}

const detailProgram = async (req, res, next) => {
  const programId = req.params.id
  const params = req.query
  if (params.query) {
    params.query._id = programId
  } else {
    params.query = {
      _id: programId
    }
  }

  try {
    const program = await service.detailProgram(params)
    return res.status(200).json(program)
  } catch (error) {
    next(error)
  }
}

const deleteProgram = async (req, res, next) => {
  const programId = req.params.id
  try {
    const program = await service.deleteProgram(programId, req.user)
    return res.status(201).json(program)
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
  listPrograms,
  createProgram,
  updateProgram,
  detailProgram,
  deleteProgram
}
