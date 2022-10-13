'use strict'

import { SERVER_CONFIG } from './config'
import { initialize as apiCryptoInitialize, generateRsaKey } from '@m92/api-crypto'
import { getKeyPairByClientId } from './api/models/Client'

const { PORT } = SERVER_CONFIG

const startServer = async (app) => {
  try {
    // Initialise Api Crypto
    await apiCryptoInitialize(getKeyPairByClientId)

    const a = await generateRsaKey()
    console.log(JSON.stringify(a, null, 2))

    // Start Server
    await app.listen(PORT)
    console.log(`[Info] Server Started Successfully! Listening on Port: ${PORT}`)
  } catch (error) {
    console.log(error)
    throw error
  }
}

export default startServer
