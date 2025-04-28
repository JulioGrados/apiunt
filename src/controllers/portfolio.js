'use strict'

const service = require('../services/portfolio')

const listPortfolios = async (req, res) => {
  const portfolios = await service.listPortfolios(req.query)
  return res.status(200).json(portfolios)
}

const createPortfolio = async (req, res, next) => {
  const body = JSON.parse(req.body.data)
  const file = req.files && req.files.image
  try {
    const portfolio = await service.createPortfolio(body, file, req.user)
    return res.status(201).json(portfolio)
  } catch (error) {
    next(error)
  }
}

const updatePortfolio = async (req, res, next) => {
  const portfolioId = req.params.id
  const body = JSON.parse(req.body.data)
  const file = req.files && req.files.image
  try {
    const portfolio = await service.updatePortfolio(
      portfolioId,
      body,
      file,
      req.user
    )
    return res.status(200).json(portfolio)
  } catch (error) {
    next(error)
  }
}

const detailPortfolio = async (req, res, next) => {
  const portfolioId = req.params.id
  const params = req.query
  if (params.query) {
    params.query._id = portfolioId
  } else {
    params.query = {
      _id: portfolioId
    }
  }

  try {
    const portfolio = await service.detailPortfolio(params)
    return res.status(200).json(portfolio)
  } catch (error) {
    next(error)
  }
}

const deletePortfolio = async (req, res, next) => {
  const portfolioId = req.params.id
  try {
    const portfolio = await service.deletePortfolio(portfolioId, req.user)
    return res.status(201).json(portfolio)
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
  listPortfolios,
  createPortfolio,
  updatePortfolio,
  detailPortfolio,
  deletePortfolio
}
