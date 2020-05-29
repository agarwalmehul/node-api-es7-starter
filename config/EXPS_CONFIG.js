'use strict'

const {
  SERVICE_NAME = '',
  ERROR_NAME = 'CustomError',

  OAUTH_POOL_ID = '',
  OAUTH_ENDPOINT = '',

  AAUTH_ENDPOINT = '',
  AAUTH_API_KEY = '',

  LOGGER_MODE = 'CONSOLE_VERBOSE',
  LOGGER_REQ_RES_LOG_ENABLED = 'true',
  LOGGER_REQ_RES_LOG_BODY_ENABLED = 'false',

  DISABLE_CREDENTIAL_CRYPTOGRAPHY = 'false',
  DISABLE_PAYLOAD_CRYPTOGRAPHY = 'false',
  DISABLE_OAUTH = 'false',
  DISABLE_AAUTH = 'false',

  HTTP_CLIENT_BODY_LOG_ENABLED = 'false',

  TIMEZONE = 'Asia/Kolkata'
} = process.env

const REQUIRED_CONFIG = [
  'SERVICE_NAME',
  // 'OAUTH_ENDPOINT',
  // 'AAUTH_ENDPOINT',
  // 'AAUTH_API_KEY'
]

REQUIRED_CONFIG.forEach(function (key) {
  if (!process.env[key]) {
    console.error('[Error] Express Utils Config Missing:', key)
    return process.exit(1)
  }
})

const EXPS_CONFIG = {
  SERVICE_NAME,
  ERROR_NAME,

  OAUTH_POOL_ID,
  OAUTH_ENDPOINT,

  AAUTH_ENDPOINT,
  AAUTH_API_KEY,

  LOGGER_MODE,
  LOGGER_REQ_RES_LOG_ENABLED: LOGGER_REQ_RES_LOG_ENABLED.toLowerCase().trim() === 'true',
  LOGGER_REQ_RES_LOG_BODY_ENABLED: LOGGER_REQ_RES_LOG_BODY_ENABLED.toLowerCase().trim() === 'true',

  DISABLE_CREDENTIAL_CRYPTOGRAPHY: DISABLE_CREDENTIAL_CRYPTOGRAPHY.toLowerCase().trim() === 'true',
  DISABLE_PAYLOAD_CRYPTOGRAPHY: DISABLE_PAYLOAD_CRYPTOGRAPHY.toLowerCase().trim() === 'true',
  DISABLE_OAUTH: DISABLE_OAUTH.toLowerCase().trim() === 'true',
  DISABLE_AAUTH: DISABLE_AAUTH.toLowerCase().trim() === 'true',

  HTTP_CLIENT_BODY_LOG_ENABLED: HTTP_CLIENT_BODY_LOG_ENABLED.toLowerCase().trim() === 'true',

  TIMEZONE
}

export default EXPS_CONFIG
