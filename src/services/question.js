'use strict'

const { questionDB, userDB } = require('../db')

const listQuestions = async params => {
  const questions = await questionDB.list(params)
  return questions
}

const createQuestion = async (body, loggedUser) => {
  await userDB.update(body.user, {
    question: true
  })
  const question = await questionDB.create(body)
  return question
}

const updateQuestion = async (questionId, body, loggedUser) => {
  const question = await questionDB.update(questionId, body)
  return question
}

const detailQuestion = async params => {
  const question = await questionDB.detail(params)
  return question
}

const deleteQuestion = async (questionId, loggedUser) => {
  const question = await questionDB.remove(questionId)
  return question
}

const countDocuments = async params => {
  const count = await questionDB.count(params)
  return count
}

module.exports = {
  countDocuments,
  listQuestions,
  createQuestion,
  updateQuestion,
  detailQuestion,
  deleteQuestion
}
