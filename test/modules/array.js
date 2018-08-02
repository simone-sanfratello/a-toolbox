const tollo = require('tollo')
const instance = require('../../src/array.js')

module.exports = {
  'array.remove': {
    describe: '',
    mode: tollo.mode.SYNC,
    act: instance.remove,
    cases: [
      {
        input: [['js','ruby','python'], 'ruby'],
        output: ['js','python']
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
    assert: tollo.assert.mutation
  },
  'array.removeAt': {
    describe: '',
    mode: tollo.mode.SYNC,
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
    assert: tollo.assert.mutation
  },
  'array.last': {
    describe: '',
    mode: tollo.mode.SYNC,
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
    ]
  },
  'array.at': {
    describe: '',
    mode: tollo.mode.SYNC,
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
        input: [[0,1,'0',false], -2],
        output: '0'
      },
      {
        input: [[undefined,'0',false], 0],
        output: undefined
      },
      {
        input: [[], 2],
        output: undefined
      }
    ]
  },
  'array.first': {
    describe: '',
    mode: tollo.mode.SYNC,
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
        input: [[undefined,'0',false]],
        output: undefined
      },
      {
        input: [[]],
        output: undefined
      }
    ]
  },
  'array.contains': {
    describe: '',
    mode: tollo.mode.SYNC,
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
    ]
  },
  'array.insert': {
    describe: '',
    mode: tollo.mode.SYNC,
    act: instance.insert,
    cases: [
      {
        input: [['john', 'alice', 'bob'], 0, 'mary'],
        output: ['mary', 'john', 'alice', 'bob']
      },
      {
        input: [['john', 'alice', 'bob'], 1, 'mary'],
        output: ['john', 'mary', 'alice', 'bob']
      },
      {
        input: [['john', 'alice', 'bob'], -1, 'mary'],
        output: ['john', 'alice', 'mary', 'bob']
      },
      {
        input: [['john', 'alice', 'bob'], -2, 'mary'],
        output: ['john', 'mary', 'alice', 'bob']
      }
    ],
    assert: tollo.assert.mutation
  },
  'array.concat': {
    describe: '',
    mode: tollo.mode.SYNC,
    act: instance.concat,
    cases: [
      {
        input: [[0,1,2],[3,4,5]],
        output: [0,1,2,3,4,5]
      },
      {
        input: [[0, 1, 2, 3], ['a', 'b', 'c'], [{a: 2}]],
        output: [0, 1, 2, 3, 'a', 'b', 'c', {a: 2}]
      }
    ]
  },
  'array.empty': {
    describe: '',
    mode: tollo.mode.SYNC,
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
    assert: tollo.assert.mutation
  },
  'array.add': {
    describe: '',
    mode: tollo.mode.SYNC,
    act: instance.add,
    cases: [
      {
        input: [[0,1,2,3], 3, true],
        output: [0,1,2,3]
      }
    ],
    assert: tollo.assert.mutation
  },
  'array.flat': {
    describe: '',
    mode: tollo.mode.SYNC,
    act: instance.flat,
    cases: [
      {
        input: [[0,[1,2],[3]]],
        output: [0,1,2,3]
      }
    ]
  },
  'array.sortingInsert': {
    describe: '',
    mode: tollo.mode.SYNC,
    act: instance.sortingInsert,
    cases: [
      {
        input: [[0,1,2,10,11,20], 15],
        output: [0,1,2,10,11,15,20]
      },
      {
        input: [[0,1,2,10,11,20], 25],
        output: [0,1,2,10,11,20,25]
      },
      {
        input: [[0,1,2,10,11,20], 0],
        output: [0,0,1,2,10,11,20]
      },
      {
        input: [[1,2,10,11,20], 0],
        output: [0,1,2,10,11,20]
      }
    ],
    assert: tollo.assert.mutation
  },
  'array.binaryIndexOf': {
    describe: '',
    mode: tollo.mode.SYNC,
    act: instance.binaryIndexOf,
    cases: [
      {
        input: [[0,1,2,3], 0],
        output: 0
      },
      {
        input: [[0,1,2,3,19,20,100], 19],
        output: 4
      },
      {
        input: [[0,1,2,3,19,20,100,999], 11],
        output: -1
      }
    ]
  }
}
