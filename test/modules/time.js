const tester = require('tollo')
const instance = require('../../src/time.js')

module.exports = {
  'chrono.set': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.set,
    cases: [
      {
        input: [  'query']
      }
    ]
  },
  'chrono.reset': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.reset,
    cases: [
      {
        input: [  'query']
      }
    ]
  },
  'chrono.clear': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.clear,
    cases: [
      {
        input: [  'query']
      }
    ]
  },
  'chrono.get': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.get,
    cases: [
      {
        input: ['query'],
        could: '11'
      }
    ]
  },
  'time.gc': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.gc,
    cases: [
    ]
  }
}
