const tester = require('tollo')
const instance = require('../../src/task.js')

module.exports = {
  todo: {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.todo,
    cases: [
    ]
  },
  done: {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.done,
    cases: [
      {
        input: [  'task#1']
      }
    ]
  }
}
