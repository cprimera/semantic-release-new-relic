const verifyNewRelic = require('./lib/verify')
const successNewRelic = require('./lib/success')

let verified = false

async function verifyConditions(pluginConfig, context) {
  await verifyNewRelic(pluginConfig, context)
  verified = true
}

async function success(pluginConfig, context) {
  if (!verified) {
    await verifyConditions(pluginConfig, context)
  }
  await successNewRelic(pluginConfig, context)
}

module.exports = {
  verifyConditions,
  success,
}
