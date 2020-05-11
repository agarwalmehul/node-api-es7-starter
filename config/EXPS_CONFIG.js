'use strict'
const {
  SERVICE_NAME = '',
  LOGGER_REQ_RES_LOG_ENABLED = 'true',
  HTTP_CLIENT_BODY_LOG_ENABLED = 'false',
  LOGGER_MODE = 'CONSOLE_VERBOSE',
} = process.env

const REQUIRED_CONFIG = [
  // 'SERVICE_NAME',
  // 'AUTHENTICATION_ENDPOINT',
  // 'AUTHENTICATION_AUTHORIZATION_ENDPOINT'
]

REQUIRED_CONFIG.forEach(function (key) {
  if (!process.env[key]) {
    console.error('[Error] Express Utils Config Missing:', key)
    return process.exit(1)
  }
})

const EXPS_CONFIG = {
  SERVICE_NAME,
  LOGGER_REQ_RES_LOG_ENABLED: LOGGER_REQ_RES_LOG_ENABLED.toLowerCase().trim() === 'true',
  HTTP_CLIENT_BODY_LOG_ENABLED: HTTP_CLIENT_BODY_LOG_ENABLED.toLowerCase().trim() === 'true',
  LOGGER_MODE
}

export default EXPS_CONFIG
