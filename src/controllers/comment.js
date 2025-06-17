'use strict'

const service = require('../services/comment')

const listComments = async (req, res) => {
  const comments = await service.listComments(req.query)
  return res.status(200).json(comments)
}

const createComment = async (req, res, next) => {
  const body = JSON.parse(req.body.data)
  try {
    const comment = await service.createComment(body, req.user)
    return res.status(201).json(comment)
  } catch (error) {
    next(error)
  }
}

const updateComment = async (req, res, next) => {
  const commentId = req.params.id
  const body = JSON.parse(req.body.data)
  try {
    const comment = await service.updateComment(
      commentId,
      body,
      req.user
    )
    return res.status(200).json(comment)
  } catch (error) {
    next(error)
  }
}

const detailComment = async (req, res, next) => {
  const commentId = req.params.id
  const params = req.query
  if (params.query) {
    params.query._id = commentId
  } else {
    params.query = {
      _id: commentId
    }
  }

  try {
    const comment = await service.detailComment(params)
    return res.status(200).json(comment)
  } catch (error) {
    next(error)
  }
}

const deleteComment = async (req, res, next) => {
  const commentId = req.params.id
  try {
    const comment = await service.deleteComment(commentId, req.user)
    return res.status(201).json(comment)
  } catch (error) {
    next(error)
  }
}

const countDocuments = async (req, res) => {
  const count = await service.countDocuments(req.query)
  return res.json(count)
}

module.exports = {
  countDocuments,
  listComments,
  createComment,
  updateComment,
  detailComment,
  deleteComment
}
