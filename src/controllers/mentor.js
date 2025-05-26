'use strict'

const service = require('../services/mentor')

const listMentors = async (req, res) => {
  const mentors = await service.listMentors(req.query)
  return res.status(200).json(mentors)
}

const listOpenMentors = async (req, res) => {
  const mentors = await service.listMentors(req.query)
  return res.status(200).json(mentors)
}

const createMentor = async (req, res, next) => {
  const body = JSON.parse(req.body.data)
  const file = req.files && req.files.image
  try {
    const mentor = await service.createMentor(body, file, req.user)
    return res.status(201).json(mentor)
  } catch (error) {
    next(error)
  }
}

const updateMentor = async (req, res, next) => {
  const mentorId = req.params.id
  const body = JSON.parse(req.body.data)
  const file = req.files && req.files.image
  try {
    const mentor = await service.updateMentor(
      mentorId,
      body,
      file,
      req.user
    )
    return res.status(200).json(mentor)
  } catch (error) {
    next(error)
  }
}

const detailMentor = async (req, res, next) => {
  const mentorId = req.params.id
  const params = req.query
  if (params.query) {
    params.query._id = mentorId
  } else {
    params.query = {
      _id: mentorId
    }
  }

  try {
    const mentor = await service.detailMentor(params)
    return res.status(200).json(mentor)
  } catch (error) {
    next(error)
  }
}

const deleteMentor = async (req, res, next) => {
  const mentorId = req.params.id
  try {
    const mentor = await service.deleteMentor(mentorId, req.user)
    return res.status(201).json(mentor)
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
  listMentors,
  listOpenMentors,
  createMentor,
  updateMentor,
  detailMentor,
  deleteMentor
}
