'use strict'

import Express from 'express'
import { expressUtils } from '../helpers'
import { VersionController } from '../controllers'

const VersionRouter = new Express.Router()
const { get } = VersionController

const { reqHandler, resHandler } = expressUtils
const { extractHeaders, routeSanity, asyncWrapper } = reqHandler
const { setHeaders } = resHandler

VersionRouter.use(extractHeaders)

VersionRouter.get('/', routeSanity, asyncWrapper(get))

VersionRouter.use(setHeaders)

export default VersionRouter
