'use strict'

const { teamDB } = require('../db')
const { saveFile } = require('utils/files/save')

const listTeams = async params => {
  const teams = await teamDB.list(params)
  return teams
}

const createTeam = async (body, file, loggedUser) => {
  if (file) {
    const route = await saveFile(file, '/files/team')
    body.photo = route
  }
  const team = await teamDB.create(body)
  return team
}

const updateTeam = async (teamId, body, file, loggedUser) => {
  if (file) {
    const route = await saveFile(file, '/files/team')
    body.photo = route
  }
  const team = await teamDB.update(teamId, body)
  return team
}

const detailTeam = async params => {
  const team = await teamDB.detail(params)
  return team
}

const deleteTeam = async (teamId, loggedUser) => {
  const team = await teamDB.remove(teamId)
  return team
}

const countDocuments = async params => {
  const count = await teamDB.count(params)
  return count
}

module.exports = {
  countDocuments,
  listTeams,
  createTeam,
  updateTeam,
  detailTeam,
  deleteTeam
}
