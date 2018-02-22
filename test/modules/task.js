const tester = require('tollo')
const instance = require('../../src/task.js')

module.exports = {
  'task.todo': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.todo,
    cases: [
    ],
    assert: tester.assert.equal
  },
  'task.done': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.done,
    cases: [
    ],
    assert: tester.assert.equal
  },
  'task.Worker': {
    describe: '',
    mode: tester.mode.CLASS,
    act: instance.Worker,
    cases: [
    ]
  }
}
