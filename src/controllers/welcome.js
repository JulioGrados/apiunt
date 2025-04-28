'use strict'

const service = require('../services/welcome')

const listWelcomes = async (req, res) => {
  const welcomes = await service.listWelcomes(req.query)
  return res.status(200).json(welcomes)
}

const createWelcome = async (req, res, next) => {
  const body = req.body
  try {
    const welcome = await service.createWelcome(body, req.user)
    console.log('welcome', welcome)
    return res.status(201).json(welcome)
  } catch (error) {
    next(error)
  }
}

const updateWelcome = async (req, res, next) => {
  const welcomeId = req.params.id
  const body = req.body
  try {
    const welcome = await service.updateWelcome(
      welcomeId,
      body,
      req.user
    )
    return res.status(200).json(welcome)
  } catch (error) {
    next(error)
  }
}

const detailWelcome = async (req, res, next) => {
  const welcomeId = req.params.id
  const params = req.query
  if (params.query) {
    params.query._id = welcomeId
  } else {
    params.query = {
      _id: welcomeId
    }
  }

  try {
    const welcome = await service.detailWelcome(params)
    return res.status(200).json(welcome)
  } catch (error) {
    next(error)
  }
}

const deleteWelcome = async (req, res, next) => {
  const welcomeId = req.params.id
  try {
    const welcome = await service.deleteWelcome(welcomeId, req.user)
    return res.status(201).json(welcome)
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
  listWelcomes,
  createWelcome,
  updateWelcome,
  detailWelcome,
  deleteWelcome
}
