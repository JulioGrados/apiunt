'use strict'

const { goalDB } = require('../db')
const { saveFile } = require('utils/files/save')

const listGoals = async params => {
  const goals = await goalDB.list(params)
  return goals
}

const createGoal = async (body, file, loggedUser) => {
  if (file) {
    const route = await saveFile(file, '/media/goals')
    body.image = route
  }
  const goal = await goalDB.create(body)
  return goal
}

const updateGoal = async (goalId, body, file, loggedUser) => {
  if (file) {
    const route = await saveFile(file, '/media/goals')
    body.image = route
  }
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
