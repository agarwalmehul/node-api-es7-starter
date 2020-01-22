'use strict'

function asyncWrapper (fn) {
  return (request, response, next) => {
    return Promise.resolve(fn(request, response, next)).catch(next)
  }
}

export default asyncWrapper
