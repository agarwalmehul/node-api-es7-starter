'use strict'

import { asyncWrapper, ResponseBody } from '../helpers'
import { HomeModel } from '../models'

const HomeController = {
  healthCheck: asyncWrapper(healthCheck),
  getVersion: asyncWrapper(getVersion)
}

export default HomeController

async function healthCheck (request, response, next) {
  if (response.body) { return process.nextTick(next) }

  const responseBody = new ResponseBody(200, 'Health Check Successful')
  response.body = responseBody
  process.nextTick(next)
}

async function getVersion (request, response, next) {
  if (response.body) { return process.nextTick(next) }

  const data = await HomeModel.getVersion()
  const responseBody = new ResponseBody(200, 'Version Check Successful', data)
  response.body = responseBody
  process.nextTick(next)
}
