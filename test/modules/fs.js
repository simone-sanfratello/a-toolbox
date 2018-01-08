const tester = require('../../../tollo-full/index.js').tester
const instance = require('../../src/fs.js')

module.exports = {
  'fs.exists': {
    describe: '',
    mode: tester.mode.PROMISE,
    act: instance.exists,
    cases: [
      {
        input: ['/tmp/file'],
        output: true
      },
      {
        input: ['/tmp/none'],
        output: false
      },
      {
        input: ['/tmp'],
        output: false
      }
    ],
    arrange: async function(input, sandbox) {
const fs = require('a-toolbox').fs
return fs.touch('/tmp/file')
},
    assert: tester.assert.equal,
    mocks: {
      path: 'filePath'
    }
  },
  'fs.touch': {
    describe: '',
    mode: tester.mode.PROMISE,
    act: instance.touch,
    cases: [
      {
        input: ['/none'],
        throw: new Error('EACCES')
      },
      {
        input: ['/tmp/touch-me']
      }
    ],
    assert: async (result, input, output, sandbox) => {
if(!await tester.assert.equal(result, input, output, sandbox)) {
return false
}
const fs = require('a-toolbox').fs
return fs.exists(input[0])
},
    mocks: {
      path: 'filePath'
    }
  },
  'fs.unlink': {
    describe: '',
    mode: tester.mode.PROMISE,
    act: instance.unlink,
    cases: [
      {
        input: ['/tmp/file']
      },
      {
        input: ['/tmp/none', false],
        throw: new Error('EACCES')
      },
      {
        input: ['/tmp/none', true]
      }
    ],
    arrange: async function(input, sandbox) {
const fs = require('a-toolbox').fs
return fs.touch('/tmp/file')
},
    assert: tester.assert.equal,
    mocks: {
      path: 'filePath'
    }
  }
}
