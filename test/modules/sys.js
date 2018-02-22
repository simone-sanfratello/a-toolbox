const tester = require('tollo')
const instance = require('../../src/sys.js')

module.exports = {
  'sys.isRoot': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.isRoot,
    cases: [
    ],
    assert: tester.assert.equal
  }
}
