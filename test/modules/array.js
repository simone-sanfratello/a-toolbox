const tester = require('tollo')
const instance = require('../../src/array.js')

module.exports = {
  'array.remove': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.remove,
    cases: [
      {
        input: [[\'js\',\'ruby\',\'python\'], \'ruby\'],
        output: [\'js\',\'python\']
      },
      {
        input: [[1,2,3], 2],
        output: [1,3]
      },
      {
        input: [[1,2,3], 3],
        output: [1,2]
      }
    ],
    assert: tester.assert.mutation
  },
  'array.removeAt': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.removeAt,
    cases: [
      {
        input: [[1,2,3], 0],
        output: [2,3]
      },
      {
        input: [[1,2,3], 1],
        output: [1,3]
      },
      {
        input: [[1,2,3], -1],
        output: [1,2]
      },
      {
        input: [[1,2,3], 4],
        output: [1,2,3]
      }
    ],
    assert: tester.assert.mutation
  },
  'array.last': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.last,
    cases: [
      {
        input: [[1,2,3]],
        output: 3
      },
      {
        input: [[null, 0, -1]],
        output: -1
      },
      {
        input: [[null]],
        output: null
      },
      {
        input: [[0]],
        output: 0
      },
      {
        input: [[]],
        output: undefined
      },
      {
        input: [[1, undefined]],
        output: undefined
      }
    ],
    assert: tester.assert.equal
  },
  'array.at': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.at,
    cases: [
      {
        input: [[1,2,3], 0],
        output: 1
      },
      {
        input: [[0,1,null,3], 0],
        output: 0
      },
      {
        input: [[0,1,null,false], -1],
        output: false
      },
      {
        input: [[0,1,null,false], -2],
        output: null
      },
      {
        input: [[0,1,\'0\',false], -2],
        output: \'0\'
      },
      {
        input: [[undefined,\'0\',false], 0],
        output: undefined
      },
      {
        input: [[], 2],
        output: undefined
      }
    ],
    assert: tester.assert.equal
  },
  'array.first': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.first,
    cases: [
      {
        input: [[1,2,3]],
        output: 1
      },
      {
        input: [[0,1,null,3]],
        output: 0
      },
      {
        input: [[1,null,false]],
        output: 1
      },
      {
        input: [[null,false]],
        output: null
      },
      {
        input: [[undefined,\'0\',false]],
        output: undefined
      },
      {
        input: [[]],
        output: undefined
      }
    ],
    assert: tester.assert.equal
  },
  'array.contains': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.contains,
    cases: [
      {
        input: [[1,2,3], 1],
        output: true
      },
      {
        input: [[1,2,3], 4],
        output: false
      }
    ],
    assert: tester.assert.equal
  },
  'array.insert': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.insert,
    cases: [
      {
        input: [[\'john\', \'alice\', \'bob\'], 0, \'mary\'],
        output: [\'mary\', \'john\', \'alice\', \'bob\']
      },
      {
        input: [[\'john\', \'alice\', \'bob\'], 1, \'mary\'],
        output: [\'john\', \'mary\', \'alice\', \'bob\']
      },
      {
        input: [[\'john\', \'alice\', \'bob\'], -1, \'mary\'],
        output: [\'john\', \'alice\', \'bob\', \'mary\']
      },
      {
        input: [[\'john\', \'alice\', \'bob\'], -2, \'mary\'],
        output: [\'john\', \'alice\', \'mary\', \'bob\']
      }
    ],
    assert: tester.assert.mutation
  },
  'array.concat': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.concat,
    cases: [
      {
        input: [[0,1,2],[3,4,5]],
        output: [0,1,2,3,4,5]
      },
      {
        input: [[0, 1, 2, 3], [\'a\', \'b\', \'c\'], [{a: 2}]],
        output: [0, 1, 2, 3, \'a\', \'b\', \'c\', {a: 2}]
      }
    ],
    assert: tester.assert.equal
  },
  'array.empty': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.empty,
    cases: [
      {
        input: [[0,1,2]],
        output: []
      },
      {
        input: [[]],
        output: []
      }
    ],
    assert: tester.assert.mutation
  },
  'array.add': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.add,
    cases: [
      {
        input: [[0,1,2,3], 3, true],
        output: [0,1,2,3]
      }
    ],
    assert: tester.assert.mutation
  }
}
