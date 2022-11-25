'use strict'

import { Router } from 'express'
import { expressUtils } from '../helpers'
import { handshake } from '@m92/api-crypto'

const ApiCryptoRouter = new Router()

const { reqHandler, resHandler } = expressUtils
const { extractHeaders, routeSanity, asyncWrapper } = reqHandler
const { setHeaders } = resHandler

ApiCryptoRouter.use(extractHeaders)

ApiCryptoRouter.get('/', routeSanity, asyncWrapper(handshake))

ApiCryptoRouter.use(setHeaders)

export default ApiCryptoRouter
