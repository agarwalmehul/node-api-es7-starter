'use strict'

import http from 'http'

export default class ResponseBody {
  constructor (statusCode, message, data, error) {
    this.statusCode = statusCode
    this.status = http.STATUS_CODES[statusCode]
    this.message = message
    this.data = data
    this.error = error
  }
}
