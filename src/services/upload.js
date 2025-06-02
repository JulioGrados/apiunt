'use strict'

const { uploadDB, botDB } = require('../db')
const { saveFile } = require('utils/files/save')

const listUploads = async params => {
  const Uploads = await uploadDB.list(params)
  return Uploads
}

const createUpload = async (body, file, loggedUser) => {
    console.log('body', body)
    console.log('file', file)
  if (file) {
    const route = await saveFile(file, '/media/upload')
    body.file = route
  }

  const upload = await uploadDB.create(body);
  return upload
}

const updateUpload = async (uploadId, body, loggedUser) => {
  const upload = await uploadDB.update(uploadId, body)
  return upload
}

const detailUpload = async params => {
  const upload = await uploadDB.detail(params)
  return upload
}

const deleteUpload = async (uploadId, loggedUser) => {
  const upload = await uploadDB.remove(uploadId);
  return upload
}

const countDocuments = async params => {
  const count = await uploadDB.count(params)
  return count
}

module.exports = {
  countDocuments,
  listUploads,
  createUpload,
  updateUpload,
  detailUpload,
  deleteUpload
}