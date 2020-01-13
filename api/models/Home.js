'use strict'

import packageJson from '../../package.json'

export const HomeModel = {
  getVersion
}

async function getVersion () {
  const { name, description, version } = packageJson
  return { name, description, version }
}
