'use strict'

const { saveFile } = require('utils/files/save')
const { allyDB } = require('../db')

const listAllys = async params => {
  const allys = await allyDB.list(params)
  return allys
}

const createAlly = async (body, file, loggedUser) => {
  if (file) {
    const route = await saveFile(file, '/media/allys')
    body.image = route
  }
  const ally = await allyDB.create(body)
  return ally
}

const updateAlly = async (allyId, body, file, loggedUser) => {
  if (file) {
    const route = await saveFile(file, '/media/allys')
    body.image = route
  }
  const ally = await allyDB.update(allyId, body)
  return ally
}

const detailAlly = async params => {
  const ally = await allyDB.detail(params)
  return ally
}

const deleteAlly = async (allyId, loggedUser) => {
  const ally = await allyDB.remove(allyId)
  return ally
}

const countDocuments = async params => {
  const count = await allyDB.count(params)
  return count
}

module.exports = {
  countDocuments,
  listAllys,
  createAlly,
  updateAlly,
  detailAlly,
  deleteAlly
}
