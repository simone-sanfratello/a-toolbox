const tollo = require('tollo')
const instance = require('../../src/random.js')

module.exports = {
  'random.rnd': {
    describe: '',
    mode: tollo.mode.SYNC,
    act: instance.rnd,
    cases: [
      {
        input: [10],
        could: '5'
      },
      {
        input: [100],
        could: '42'
      },
      {
        input: [2],
        could: '1'
      },
      {
        input: [99],
        could: '44'
      }
    ],
    assert:   async (result, input, output, sandbox) => {
return result >= 0 && result <= input[0]
}
  },
  'random.number': {
    describe: '',
    mode: tollo.mode.SYNC,
    act: instance.number,
    cases: [
      {
        input: [10, 20],
        could: '11'
      },
      {
        input: [1, 100],
        could: '14'
      },
      {
        input: [0, 10],
        could: '8'
      }
    ],
    assert:   async (result, input, output, sandbox) => {
return result >= input[0] && result <= input[1]
}
  },
  'random.string': {
    describe: '',
    mode: tollo.mode.SYNC,
    act: instance.string,
    cases: [
      {
        input: [8],
        could: '\'ajdsfchakwt\''
      },
      {
        input: [1, '1234567890'],
        could: '\'9\''
      },
      {
        input: [0],
        output: ''
      },
      {
        input: [-1],
        output: ''
      }
    ],
    assert:   async (result, input, output, sandbox) => {
if(!input[0] && input[0] !== 0) {
input[0] = 8
}
if(!input[1]) {
input[1] = 'abcdefghijklmnopqrstuvwxyz'
}
if(result.length !== input[0])
for (let i = 0; i < input[0]; i++) {
if(input[1].indexOf(result[i]) === -1) {
return false
}
}
return true
}
  },
  'random.hex': {
    describe: '',
    mode: tollo.mode.SYNC,
    act: instance.hex,
    cases: [
      {
        input: [8],
        could: '\'1bc956bf\''
      },
      {
        input: [  16]
      },
      {
        input: [0],
        output: ''
      },
      {
        input: [-1],
        output: ''
      }
    ],
    assert:   async (result, input, output, sandbox) => {
if(!input[0] && input[0] !== 0) {
input[0] = 8
}
if(result.length !== input[0]) {
return false
}
for (let i = 0; i < input[0]; i++) {
if('0123456789abcdef'.indexOf(result[i]) === -1) {
return false
}
}
return true
}
  },
  'random.hash': {
    describe: '',
    mode: tollo.mode.SYNC,
    act: instance.hash,
    cases: [
      {
        input: [],
        could: '\'1f8a690b7366a2323e2d5b045120da7e93896f471f8a690b731f8a690b739ab5\''
      }
    ],
    assert:   async (result, input, output, sandbox) => {
return result.length === 64
}
  },
  'random.element': {
    describe: '',
    mode: tollo.mode.SYNC,
    act: instance.element,
    cases: [
      {
        input: [[1,2,3,4,5]],
        could: '1'
      },
      {
        input: [[1,2,3,4,5], 5],
        could: '2'
      },
      {
        input: [[1,2,3,4,5], 6],
        could: '3'
      }
    ],
    assert:   async (result, input, output, sandbox) => {
if(input[1]) {
if(result === input[1]) {
return false
}
}
return input[0].indexOf(result)
}
  }
}
