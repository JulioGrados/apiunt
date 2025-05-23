'use strict'

const { portfolioDB } = require('../db')
const { saveFile } = require('utils/files/save')

const listPortfolios = async params => {
  const sagrements = await portfolioDB.list(params)
  return sagrements
}

const createPortfolio = async (body, file, loggedUser) => {
  if (file) {
    const route = await saveFile(file, '/files/portfolio')
    body.image = route
  }
  const portfolio = await portfolioDB.create(body)
  return portfolio
}

const updatePortfolio = async (portfolioId, body, file, loggedUser) => {
  if (file) {
    const route = await saveFile(file, '/files/portfolio')
    body.image = route
  }
  const portfolio = await portfolioDB.update(portfolioId, body)
  return portfolio
}

const detailPortfolio = async params => {
  const portfolio = await portfolioDB.detail(params)
  return portfolio
}

const deletePortfolio = async (portfolioId, loggedUser) => {
  const portfolio = await portfolioDB.remove(portfolioId)
  return portfolio
}

const countDocuments = async params => {
  const count = await portfolioDB.count(params)
  return count
}

module.exports = {
  countDocuments,
  listPortfolios,
  createPortfolio,
  updatePortfolio,
  detailPortfolio,
  deletePortfolio
}
