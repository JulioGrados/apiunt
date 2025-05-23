'use strict'

const { mentorDB } = require('../db')
const { saveFile } = require('utils/files/save')

const listMentors = async params => {
  const mentors = await mentorDB.list(params)
  return mentors
}

const createMentor = async (body, file, loggedUser) => {
  if (file) {
    const route = await saveFile(file, '/files/mentor')
    body.photo = route
  }
  const mentor = await mentorDB.create(body)
  return mentor
}

const updateMentor = async (mentorId, body, file, loggedUser) => {
  if (file) {
    const route = await saveFile(file, '/files/mentor')
    body.photo = route
  }
  const mentor = await mentorDB.update(mentorId, body)
  return mentor
}

const detailMentor = async params => {
  const mentor = await mentorDB.detail(params)
  return mentor
}

const deleteMentor = async (mentorId, loggedUser) => {
  const mentor = await mentorDB.remove(mentorId)
  return mentor
}

const countDocuments = async params => {
  const count = await mentorDB.count(params)
  return count
}

module.exports = {
  countDocuments,
  listMentors,
  createMentor,
  updateMentor,
  detailMentor,
  deleteMentor
}
