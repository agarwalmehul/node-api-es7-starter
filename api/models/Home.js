'use strict'

import packageJson from '../../package.json'

const HomeModel = {
  getVersion
}

export default HomeModel

async function getVersion () {
  const { name, description, version } = packageJson
  return { name, description, version }
}
