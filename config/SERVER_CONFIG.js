'use strict'

const {
  PORT = 8080,
  BODY_LIMIT = '5mb',
  ALLOW_CORS_ORIGIN = '*',
  ALLOW_CORS_METHODS = ''
} = process.env

const SERVER_CONFIG = {
  PORT,
  BODY_LIMIT,
  ALLOW_CORS_ORIGIN,
  ALLOW_CORS_METHODS
}

export default SERVER_CONFIG
