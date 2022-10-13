'use strict'

import { API_CRYPTO_CONFIG } from '../../config'

const {
  CLIENT_ENCRYPTED_PRIVATE_KEY,
  CLIENT_PUBLIC_KEY,
  CLIENT_UNIQUE_ID
} = API_CRYPTO_CONFIG

const KEY_OBJECTS = {
  [CLIENT_UNIQUE_ID]: {
    uniqueId: CLIENT_UNIQUE_ID,
    encrytedPrivateKey: CLIENT_ENCRYPTED_PRIVATE_KEY,
    publicKey: CLIENT_PUBLIC_KEY
  }
}

const ClientModel = {
  getKeyPairByClientId
}

export default ClientModel

async function getKeyPairByClientId (uniqueId) {
  return KEY_OBJECTS[uniqueId]
}
