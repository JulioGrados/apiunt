'use strict'

const { saveFile } = require('utils/files/save')
const { interviewDB, evaluationDB } = require('../db')

const listInterviews = async params => {
  const interviews = await interviewDB.list(params)
  return interviews
}

const createInterview = async (body, file, loggedUser) => {
  if (file) {
    const route = await saveFile(file, '/media/interview')
    body.file = route
  }
  if(body.hyphotesis && body.hyphotesis.length) {
    const hyphotesis = body.hyphotesis

    for (const item of hyphotesis) {
      const hy = await evaluationDB.detail({query: {_id: item.hypothesisId}});
      
      if (hy) {
        if(item.rating === 'No Importa') {
          const hyUp = await evaluationDB.update(item.hypothesisId, {
            dont: (hy.dont + 1)
          })
          console.log('hyUp', hyUp)
        } else if(item.rating === 'Bueno Tener') {
          const hyUp = await evaluationDB.update(item.hypothesisId, {
            nice: (hy.nice + 1)
          })
          console.log('hyUp', hyUp)
        } else if(item.rating === 'Debe Tener'){
          const hyUp = await evaluationDB.update(item.hypothesisId, {
            must: (hy.must + 1)
          })
          console.log('hyUp', hyUp)
        }
      }
    }
  }

  body.evaluations = transformSelecciones(body.hyphotesis)
  const interview = await interviewDB.create(body)
  return interview
}

const transformSelecciones = (selecciones) => {
  return selecciones.map(sel => ({
    parent: sel.hypothesisId,
    dont: sel.rating === 'No Importa',
    nice: sel.rating === 'Bueno Tener',
    must: sel.rating === 'Debe Tener',
  }));
};

const updateInterview = async (interviewId, body, file, loggedUser) => {
  if (file) {
    const route = await saveFile(file, '/media/interview')
    body.file = route
  }
  const interview = await interviewDB.update(interviewId, body)
  return interview
}

const detailInterview = async params => {
  const interview = await interviewDB.detail(params)
  return interview
}

const deleteInterview = async (interviewId, loggedUser) => {
  const interview = await interviewDB.remove(interviewId)
  return interview
}

const countDocuments = async params => {
  const count = await interviewDB.count(params)
  return count
}

module.exports = {
  countDocuments,
  listInterviews,
  createInterview,
  updateInterview,
  detailInterview,
  deleteInterview
}
