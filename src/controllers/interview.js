'use strict'

const service = require('../services/interview')

const listInterviews = async (req, res) => {
  const interviews = await service.listInterviews(req.query)
  return res.status(200).json(interviews)
}

const listOpenInterviews = async (req, res) => {
  const interviews = await service.listInterviews(req.query)
  return res.status(200).json(interviews)
}

const createInterview = async (req, res, next) => {
  const body = JSON.parse(req.body.data)
  const file = req.files && req.files.file
  try {
    const interview = await service.createInterview(body, file, req.user)
    return res.status(201).json(interview)
  } catch (error) {
    next(error)
  }
}

const updateInterview = async (req, res, next) => {
  const interviewId = req.params.id
  const body = JSON.parse(req.body.data)
  const file = req.files && req.files.file
  try {
    const interview = await service.updateInterview(
      interviewId,
      body,
      file,
      req.user
    )
    return res.status(200).json(interview)
  } catch (error) {
    next(error)
  }
}

const detailInterview = async (req, res, next) => {
  const interviewId = req.params.id
  const params = req.query
  if (params.query) {
    params.query._id = interviewId
  } else {
    params.query = {
      _id: interviewId
    }
  }

  try {
    const interview = await service.detailInterview(params)
    return res.status(200).json(interview)
  } catch (error) {
    next(error)
  }
}

const deleteInterview = async (req, res, next) => {
  const interviewId = req.params.id
  try {
    const interview = await service.deleteInterview(interviewId, req.user)
    return res.status(201).json(interview)
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
  listInterviews,
  listOpenInterviews,
  createInterview,
  updateInterview,
  detailInterview,
  deleteInterview
}
