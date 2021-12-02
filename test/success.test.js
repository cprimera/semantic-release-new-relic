const axios = require('axios').default
const success = require('../lib/success')

jest.mock('axios')

describe('success', () => {
  it('should call the New Relic API with the version and changelog', async () => {
    const version = '1.2.3'
    const notes = `1.2.3
    - a change
    - another change
    `
    const appId = '123'
    const apiKey = 'a'

    axios.post.mockResolvedValue({})

    expect(success({appId, apiKey}, {nextRelease: {version, notes}})).resolves
    expect(axios.post).toHaveBeenCalledWith(
      `https://api.newrelic.com/v2/applications/${appId}/deployments.json`,
      { deployment: { revision: version, changelog: notes } },
      { headers: { 'Api-Key': apiKey } }
    )
  })
})
