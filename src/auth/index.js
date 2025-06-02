'use strict'

const jwt = require('jsonwebtoken')
const config = require('config')
const { connectionDB } = require('db/lib')

const authHandler = (req, res, next) => {
  if (req.path.startsWith('/media')) {
    return next(); // ❗️Salta autenticación para archivos públicos
  }

  const token =
    req.headers['x-access-token'] || req.body.token || req.query.token
  if (token) {
    jwt.verify(token, config.auth.secret, (err, decoded) => {
      if (err) {
        res.status(401).json({
          success: false,
          message: 'Failed to authenticate token.'
        })
        return
      }
      req.user = decoded
      return next()
    })
  } else {
    res.status(401).send({
      success: false,
      message: 'No token provided.'
    })
  }
}

const authConnection = async (req, res, next) => {
  try {
    const body = req.body
    const token = req.headers.authorization.split(' ')[1]
    const connection = await connectionDB.detailOnly({ query: { _id: body.connection } })

    if (token) {
      if(token === connection.key) {
        return next()
      } else {
        res.status(401).json({
          success: false,
          message: 'Failed to authenticate token.'
        })
        return
      }
    } else {
      console.log('4')
      res.status(401).send({
        success: false,
        message: 'No token provided.'
      })
      return 
    }
  } catch (error) {
    return res.status(401).send({
      success: false,
      message: 'No token provided.'
    })
  }
}

const socketHandler = (socket, next) => {
  const token = socket.handshake.query.token
  if (token) {
    jwt.verify(token, config.auth.secret, (err, decoded) => {
      if (err) {
        socket.disconnect()
        return next(new Error('authentication error'))
      }
      // console.log('decoded', decoded)
      socket.assessor = decoded
      return next()
    })
  } else {
    socket.disconnect()
    return next(new Error('authentication error'))
  }
}

module.exports = {
  authHandler,
  socketHandler,
  authConnection
}
