'use strict'

import Express from 'express'
import { routerUtils } from '../helpers'
import { HomeController } from '../controllers'

const HomeRouter = new Express.Router()
const { healthCheck, getVersion } = HomeController
const { routeSanity } = routerUtils

HomeRouter.get('/health-check', routeSanity, healthCheck)
HomeRouter.get('/version', routeSanity, getVersion)

export { HomeRouter }
