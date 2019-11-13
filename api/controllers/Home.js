'use strict'

import { asyncWrapper, ResponseBody } from '../helpers'
import { HomeModel } from '../models'

export const HomeController = {
  healthCheck: asyncWrapper(healthCheck),
  getVersion: asyncWrapper(getVersion),
}

async function healthCheck (request, response, next) {
  if (response.body) { return process.nextTick(next) }

  const responseBody = new ResponseBody(200)
  response.body = responseBody
  return process.nextTick(next)
}

async function getVersion (request, response, next) {
  if (response.body) { return process.nextTick(next) }

  const data = await HomeModel.getVersion()
  const responseBody = new ResponseBody(200, 'OK', data)
  response.body = responseBody
  next()
}
