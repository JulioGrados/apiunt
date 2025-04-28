'use strict'

const { welcomeDB, userDB } = require('../db')

const listWelcomes = async params => {
  const welcomes = await welcomeDB.list(params)
  return welcomes
}

const createWelcome = async (body, loggedUser) => {
  await userDB.update(body.user, {
    welcome: true
  })
  const welcome = await welcomeDB.create(body)
  return welcome
}

const updateWelcome = async (welcomeId, body, loggedUser) => {
  const welcome = await welcomeDB.update(welcomeId, body)
  return welcome
}

const detailWelcome = async params => {
  const welcome = await welcomeDB.detail(params)
  return welcome
}

const deleteWelcome = async (welcomeId, loggedUser) => {
  const welcome = await welcomeDB.remove(welcomeId)
  return welcome
}

const countDocuments = async params => {
  const count = await welcomeDB.count(params)
  return count
}

module.exports = {
  countDocuments,
  listWelcomes,
  createWelcome,
  updateWelcome,
  detailWelcome,
  deleteWelcome
}
