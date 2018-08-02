const tester = require('tollo')
const instance = require('../../src/event.js')

module.exports = {
  'event.Emitter': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.Emitter,
    cases: [
    ]
  }
}
