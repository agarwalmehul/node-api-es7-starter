'use strict'

import packageJson from '../../package.json'

const VersionModel = {
  get
}

export default VersionModel

async function get () {
  const { name, description, version } = packageJson
  return { name, description, version }
}
