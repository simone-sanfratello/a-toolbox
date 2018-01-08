const tester = require('../../../tollo-full/index.js').tester
const instance = require('../../src/time.js')

module.exports = {
  'time.set': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.set,
    cases: [
    ],
    assert: tester.assert.equal
  },
  'time.reset': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.reset,
    cases: [
    ],
    assert: tester.assert.equal
  },
  'time.clear': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.clear,
    cases: [
    ],
    assert: tester.assert.equal
  },
  'time.get': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.get,
    cases: [
    ],
    assert: tester.assert.equal
  },
  'time.gc': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.gc,
    cases: [
    ],
    assert: tester.assert.equal
  }
}
