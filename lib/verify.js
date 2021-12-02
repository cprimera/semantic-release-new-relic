const AggregateError = require('aggregate-error')

module.exports = async (pluginConfig) => {
  const errors = []

  if (!Object.prototype.hasOwnProperty.call(pluginConfig, 'apiKey')) {
    errors.push(new Error('apiKey is not set'))
  }
  if (!Object.prototype.hasOwnProperty.call(pluginConfig, 'appId')) {
    errors.push(new Error('appId is not set'))
  }

  if (errors.length > 0) {
    throw new AggregateError(errors)
  }
}
