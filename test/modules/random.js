const tester = require('../../../tollo-full/index.js').tester
const instance = require('../../src/random.js')

module.exports = {
  'random.rnd': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.rnd,
    cases: [
    ],
    assert: tester.assert.equal
  },
  'random.number': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.number,
    cases: [
    ],
    assert: tester.assert.equal
  },
  'random.string': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.string,
    cases: [
    ],
    assert: tester.assert.equal
  },
  'random.hex': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.hex,
    cases: [
    ],
    assert: tester.assert.equal
  },
  'random.hash': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.hash,
    cases: [
    ],
    assert: tester.assert.equal
  },
  'random.element': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.element,
    cases: [
    ],
    assert: tester.assert.equal
  }
}
