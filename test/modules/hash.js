const tester = require('../../../tollo-full/index.js').tester
const instance = require('../../src/hash.js')

module.exports = {
  'hash.sha256': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.sha256,
    cases: [
    ],
    assert: tester.assert.equal
  }
}
