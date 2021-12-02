const AggregateError = require('aggregate-error')
const verify = require('../lib/verify')

describe('verify', () => {
  it('should verify that `appId` and `apiKey` are set', async () => {
    await expect(verify({}, {})).rejects.toThrow(AggregateError)
  })
})
