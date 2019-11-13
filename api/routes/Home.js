'use strict'

import Express from 'express'
import { routerUtils } from '../helpers'
import { HomeController } from '../controllers'

const HomeRouter = new Express.Router()
const { healthCheck, getVersion } = HomeController
const { sendResponse } = routerUtils

HomeRouter.get('/health-check', healthCheck)
HomeRouter.get('/version', getVersion)

HomeRouter.use(sendResponse)

export { HomeRouter }
