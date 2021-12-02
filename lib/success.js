const axios = require('axios').default

module.exports = async (pluginConfig, { nextRelease: { version, notes } }) => {
  const nrToken = pluginConfig['apiKey']
  const nrAppId = pluginConfig['appId']
  const nrApiBody = {
    deployment: {
      revision: version,
      changelog: notes
    }
  }

  const nrApiUrl = `https://api.newrelic.com/v2/applications/${nrAppId}/deployments.json`

  await axios.post(nrApiUrl, nrApiBody, {headers: {'Api-Key': nrToken}})
}
