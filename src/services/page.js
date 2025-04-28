'use strict'

const { pageDB } = require('../db')

const listPages = async params => {
  const pages = await pageDB.list(params)
  return pages
}

const createPage = async (body, loggedUser) => {
  const page = await pageDB.create(body)
  return page
}

const updatePage = async (pageId, body, loggedUser) => {
  const page = await pageDB.update(pageId, body)
  return page
}

const detailPage = async params => {
  const page = await pageDB.detail(params)
  return page
}

const deletePage = async (pageId, loggedUser) => {
  const page = await pageDB.remove(pageId)
  return page
}

const countDocuments = async params => {
  const count = await pageDB.count(params)
  return count
}

module.exports = {
  countDocuments,
  listPages,
  createPage,
  updatePage,
  detailPage,
  deletePage
}
