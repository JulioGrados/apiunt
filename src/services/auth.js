'use strict'

const jwt = require('jsonwebtoken')
const config = require('config')
const { comparePass, generateHash } = require('utils').auth

const { userDB } = require('../db')

const loginUser = async (email, password) => {
  if (!email || !password) {
    const error = {
      status: 400,
      message: 'Necesitas un email y una contraseña.'
    }
    throw error
  }

  const select =
    'email names email mobile firstName lastName roles password zadarma photo stage'

  let user = null

  user = await userDB.detail({
    query: {
      email
    }
  })
  console.log('user', user)
  if (!user) {
    const error = {
      status: 401,
      message: 'El usuario no existe.'
    }

    throw error
  }

  const passCorrect = comparePass(password, user.password)
  if (!passCorrect) {
    const error = {
      status: 401,
      message: 'Los datos de acceso son incorrectos.'
    }
    throw error
  }

  delete user.password

  const token = jwt.sign(user.toJSON(), config.auth.secret, {
    expiresIn: '1y'
  })

  const respuesta = {
    token,
    user,
    success: true
  }

  return respuesta
}

const singupUser = async (data) => {
  data.password = data.password ? generateHash(data.password) : undefined
  const createUser = await userDB.create({
    ...data,
    names: data.firstName + ' ' + data.lastName,
    password: data.password,
    rol: 'emprendedor'
  })
  console.log('createUser', createUser)
  const token = jwt.sign(createUser.toJSON(), 'multiagent', {
    expiresIn: '1y'
  })
  
  return {
    token,
    user: createUser,
    success: true
  }
}

module.exports = {
  loginUser,
  singupUser
}
