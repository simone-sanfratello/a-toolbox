const tollo = require('tollo')
const instance = require('../../src/fs.js')

module.exports = {
  'fs.exists': {
    describe: '',
    mode: tollo.mode.PROMISE,
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
    arrange:   async function(input, sandbox) {
const fs = require('../../src/fs')
return fs.touch('/tmp/file')
},
    mocks: {
      path: 'filePath'
    }
  },
  'fs.touch': {
    describe: '',
    mode: tollo.mode.PROMISE,
    act: instance.touch,
    cases: [
      {
        input: [  '/tmp/touch-me']
      },
      {
        input: ['/none'],
        throw: new tollo.Error({code: 'EACCES'})
      }
    ],
    assert:   async (result, input, output, sandbox) => {
if(result) {
return result.code === output.code
}
const fs = require('../../src/fs')
return fs.exists(input[0])
},
    mocks: {
      path: 'filePath'
    }
  },
  'fs.unlink': {
    describe: '',
    mode: tollo.mode.PROMISE,
    act: instance.unlink,
    cases: [
      {
        input: [  '/tmp/file']
      },
      {
        input: ['/tmp/none', false],
        throw: new tollo.Error({code: 'ENOENT'})
      },
      {
        input: [  '/tmp/none', true]
      }
    ],
    arrange:   async function(input, sandbox) {
const fs = require('../../src/fs')
return fs.touch('/tmp/file')
},
    mocks: {
      path: 'filePath'
    }
  }
}
