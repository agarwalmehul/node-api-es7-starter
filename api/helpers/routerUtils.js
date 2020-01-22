'use strict'

import ResponseBody from './ResponseBody'

const routerUtils = {
  sendResponse,
  routeSanity
}

export default routerUtils

function sendResponse (request, response, next) {
  let { body } = response
  const { statusCode } = body || {}

  if (!body || !statusCode) {
    body = new ResponseBody(500, 'Response Data Not Found!')
  }

  response.status(body.statusCode).json(body)
}

function routeSanity (request, response, next) {
  request.isMatched = true
  process.nextTick(next)
}
