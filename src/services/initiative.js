'use strict'

const { initiativeDB } = require('../db')
const { saveFile } = require('utils/files/save')

const listInitiatives = async params => {
  const initiatives = await initiativeDB.list(params)
  return initiatives
}

const createInitiative = async (body, file, loggedUser) => {
  if (file) {
    const route = await saveFile(file, '/media/initiatives')
    body.backImage = route
  }
  const initiative = await initiativeDB.create(body)
  return initiative
}

const updateInitiative = async (initiativeId, body, file, loggedUser) => {
  if (file) {
    const route = await saveFile(file, '/media/initiatives')
    body.backImage = route
  }
  const initiative = await initiativeDB.update(initiativeId, body)
  return initiative
}

const detailInitiative = async params => {
  const initiative = await initiativeDB.detail(params)
  return initiative
}

const deleteInitiative = async (initiativeId, loggedUser) => {
  const initiative = await initiativeDB.remove(initiativeId)
  return initiative
}

const countDocuments = async params => {
  const count = await initiativeDB.count(params)
  return count
}

module.exports = {
  countDocuments,
  listInitiatives,
  createInitiative,
  updateInitiative,
  detailInitiative,
  deleteInitiative
}
