'use strict'

import { ExpressUtils, ResponseBody, expressValidator, moment } from '@m92/express-utils'
import { EXPS_CONFIG } from '../../config'

const expressUtils = new ExpressUtils(EXPS_CONFIG)

export {
  expressUtils,
  ResponseBody,
  expressValidator,
  moment
}
