'use strict'

const service = require('../services/ally')

const listAllys = async (req, res) => {
  const allys = await service.listAllys(req.query)
  return res.status(200).json(allys)
}

const createAlly = async (req, res, next) => {
  const body = JSON.parse(req.body.data)
  const file = req.files && req.files.image
  try {
    const ally = await service.createAlly(body, file, req.user)
    return res.status(201).json(ally)
  } catch (error) {
    next(error)
  }
}

const updateAlly = async (req, res, next) => {
  const allyId = req.params.id
  const body = JSON.parse(req.body.data)
  const file = req.files && req.files.image
  try {
    const ally = await service.updateAlly(
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

const detailAlly = async (req, res, next) => {
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
    const ally = await service.detailAlly(params)
    return res.status(200).json(ally)
  } catch (error) {
    next(error)
  }
}

const deleteAlly = async (req, res, next) => {
  const allyId = req.params.id
  try {
    const ally = await service.deleteAlly(allyId, req.user)
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
  listAllys,
  createAlly,
  updateAlly,
  detailAlly,
  deleteAlly
}
