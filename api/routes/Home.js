'use strict'

import Express from 'express'
import { expressUtils } from '../helpers'
import { HomeController } from '../controllers'

const HomeRouter = new Express.Router()
const { healthCheck, getVersion } = HomeController

const { reqHandler, resHandler } = expressUtils
const { extractHeaders, routeSanity, asyncWrapper } = reqHandler
const { setHeaders } = resHandler

HomeRouter.use(extractHeaders)

HomeRouter.get('/health-check', routeSanity, asyncWrapper(healthCheck))
HomeRouter.get('/version', routeSanity, asyncWrapper(getVersion))

HomeRouter.use(setHeaders)

export default HomeRouter
