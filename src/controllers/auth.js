'use strict'

const services = require('../services/auth')

const loginUser = async (req, res) => {
  const { username, password } = req.body

  try {
    const user = await services.loginUser(username, password)
    return res.status(200).json(user)
  } catch (error) {
    return res.status(error.status || 500).json(error)
  }
}

const singupUser = async (req, res) => {
  try {
    const user = await services.singupUser(req.body)
    console.log('user', user)
    return res.status(200).json(user)
  } catch (error) {
    return res.status(error.status || 500).json(error)
  }
}

module.exports = {
  loginUser,
  singupUser
}
