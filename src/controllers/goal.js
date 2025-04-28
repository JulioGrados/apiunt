'use strict'

const service = require('../services/goal')

const listGoals = async (req, res) => {
  const goals = await service.listGoals(req.query)
  return res.status(200).json(goals)
}

const createGoal = async (req, res, next) => {
  const body = JSON.parse(req.body.data)
  const file = req.files && req.files.image
  try {
    const goal = await service.createGoal(body, file, req.user)
    return res.status(201).json(goal)
  } catch (error) {
    next(error)
  }
}

const updateGoal = async (req, res, next) => {
  const goalId = req.params.id
  const body = JSON.parse(req.body.data)
  const file = req.files && req.files.image
  try {
    const goal = await service.updateGoal(
      goalId,
      body,
      file,
      req.user
    )
    return res.status(200).json(goal)
  } catch (error) {
    next(error)
  }
}

const detailGoal = async (req, res, next) => {
  const goalId = req.params.id
  const params = req.query
  if (params.query) {
    params.query._id = goalId
  } else {
    params.query = {
      _id: goalId
    }
  }

  try {
    const goal = await service.detailGoal(params)
    return res.status(200).json(goal)
  } catch (error) {
    next(error)
  }
}

const deleteGoal = async (req, res, next) => {
  const goalId = req.params.id
  try {
    const goal = await service.deleteGoal(goalId, req.user)
    return res.status(201).json(goal)
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
  listGoals,
  createGoal,
  updateGoal,
  detailGoal,
  deleteGoal
}
