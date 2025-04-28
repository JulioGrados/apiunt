'use strict'

const service = require('../services/page')

const listPages = async (req, res) => {
  const pages = await service.listPages(req.query)
  return res.status(200).json(pages)
}

const createPage = async (req, res, next) => {
  const body = JSON.parse(req.body.data)
  const file = req.files && req.files.image
  try {
    const page = await service.createPage(body, file, req.user)
    return res.status(201).json(page)
  } catch (error) {
    next(error)
  }
}

const updatePage = async (req, res, next) => {
  const pageId = req.params.id
  const body = JSON.parse(req.body.data)
  const file = req.files && req.files.image
  try {
    const page = await service.updatePage(
      pageId,
      body,
      file,
      req.user
    )
    return res.status(200).json(page)
  } catch (error) {
    next(error)
  }
}

const detailPage = async (req, res, next) => {
  const pageId = req.params.id
  const params = req.query
  if (params.query) {
    params.query._id = pageId
  } else {
    params.query = {
      _id: pageId
    }
  }

  try {
    const page = await service.detailPage(params)
    return res.status(200).json(page)
  } catch (error) {
    next(error)
  }
}

const deletePage = async (req, res, next) => {
  const pageId = req.params.id
  try {
    const page = await service.deletePage(pageId, req.user)
    return res.status(201).json(page)
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
  listPages,
  createPage,
  updatePage,
  detailPage,
  deletePage
}
