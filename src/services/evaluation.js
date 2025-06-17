'use strict'

const { saveFile } = require('utils/files/save')
const { evaluationDB } = require('../db')

const listEvaluations = async params => {
  // console.log('params', params)
  const evaluations = await evaluationDB.list(params)
  // console.log('evaluations', evaluations)
  return evaluations
}

const createEvaluation = async (body, file, loggedUser) => {
  if (file) {
    const route = await saveFile(file, '/media/evaluation')
    body.file = route
  }
  const evaluation = await evaluationDB.create(body)
  return evaluation
}

const updateEvaluation = async (evaluationId, body, file, loggedUser) => {
  if (file) {
    const route = await saveFile(file, '/media/evaluation')
    body.file = route
  }
  const evaluation = await evaluationDB.update(evaluationId, body)
  return evaluation
}

const detailEvaluation = async params => {
  const evaluation = await evaluationDB.detail(params)
  return evaluation
}

const deleteEvaluation = async (evaluationId, loggedUser) => {
  const evaluation = await evaluationDB.remove(evaluationId)
  return evaluation
}

const countDocuments = async params => {
  const count = await evaluationDB.count(params)
  return count
}

module.exports = {
  countDocuments,
  listEvaluations,
  createEvaluation,
  updateEvaluation,
  detailEvaluation,
  deleteEvaluation
}
