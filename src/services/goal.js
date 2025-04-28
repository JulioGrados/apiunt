'use strict'

const { goalDB } = require('../db')

const listGoals = async params => {
  const goals = await goalDB.list(params)
  return goals
}

const createGoal = async (body, loggedUser) => {
  const goal = await goalDB.create(body)
  return goal
}

const updateGoal = async (goalId, body, loggedUser) => {
  const goal = await goalDB.update(goalId, body)
  return goal
}

const detailGoal = async params => {
  const goal = await goalDB.detail(params)
  return goal
}

const deleteGoal = async (goalId, loggedUser) => {
  const goal = await goalDB.remove(goalId)
  return goal
}

const countDocuments = async params => {
  const count = await goalDB.count(params)
  return count
}

module.exports = {
  countDocuments,
  listGoals,
  createGoal,
  updateGoal,
  detailGoal,
  deleteGoal
}
