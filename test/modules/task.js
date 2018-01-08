const tester = require('../../../tollo-full/index.js').tester
const instance = require('../../src/task.js')

module.exports = {
  'Tasks.todo': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.todo,
    cases: [
    ],
    assert: tester.assert.equal
  },
  'Tasks.done': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.done,
    cases: [
    ],
    assert: tester.assert.equal
  },
  'Tasks.Tasks': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.Tasks,
    cases: [
    ]
  }
}
