'use strict'

const { allyDB } = require('../db')

const listAllys = async params => {
  const allys = await allyDB.list(params)
  return allys
}

const createAlly = async (body, loggedUser) => {
  const ally = await allyDB.create(body)
  return ally
}

const updateAlly = async (allyId, body, loggedUser) => {
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
