if (process.env.NODE_ENV !== 'production') {
  const dotEnvResult = require('dotenv').config()
  if (dotEnvResult.error) {
    throw dotEnvResult.error
  }
}

module.exports = {
  target: 'serverless',
  env: {},
}
