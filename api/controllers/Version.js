'use strict'

import { ResponseBody } from '../helpers'
import { VersionModel } from '../models'

const VersionController = {
  get
}

export default VersionController

async function get (request, response, next) {
  const data = await VersionModel.get()
  const responseBody = new ResponseBody(200, 'Version Check Successful', data)
  response.body = responseBody
  process.nextTick(next)
}
