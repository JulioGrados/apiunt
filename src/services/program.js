'use strict'

const { programDB } = require('../db')

const listPrograms = async params => {
  const programs = await programDB.list(params)
  return programs
}

const createProgram = async (body, loggedUser) => {
  const program = await programDB.create(body)
  return program
}

const updateProgram = async (programId, body, loggedUser) => {
  const program = await programDB.update(programId, body)
  return program
}

const detailProgram = async params => {
  const program = await programDB.detail(params)
  return program
}

const deleteProgram = async (programId, loggedUser) => {
  const program = await programDB.remove(programId)
  return program
}

const countDocuments = async params => {
  const count = await programDB.count(params)
  return count
}

module.exports = {
  countDocuments,
  listPrograms,
  createProgram,
  updateProgram,
  detailProgram,
  deleteProgram
}
