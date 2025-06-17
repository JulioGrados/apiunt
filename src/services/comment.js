'use strict'

const { commentDB } = require('../db')

const listComments = async params => {
  const comments = await commentDB.list(params)
  return comments
}

const createComment = async (body, loggedUser) => {
  const comment = await commentDB.create(body)
  return comment
}

const updateComment = async (commentId, body, loggedUser) => {
  const comment = await commentDB.update(commentId, body)
  return comment
}

const detailComment = async params => {
  const comment = await commentDB.detail(params)
  return comment
}

const deleteComment = async (commentId, loggedUser) => {
  const comment = await commentDB.remove(commentId)
  return comment
}

const countDocuments = async params => {
  const count = await commentDB.count(params)
  return count
}

module.exports = {
  countDocuments,
  listComments,
  createComment,
  updateComment,
  detailComment,
  deleteComment
}
