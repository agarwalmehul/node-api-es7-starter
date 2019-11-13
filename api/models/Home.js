'use strict'

import packageJson from '../../package.json'

export const HomeModel = {
  getVersion
}

async function getVersion () {
  const { version } = packageJson
  return { version }
}
