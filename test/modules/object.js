const tester = require('../../../tollo-full/index.js').tester
const instance = require('../../src/object.js')

module.exports = {
  'object.merge': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.merge,
    cases: [
      {
        input: [{a: 1, b: 'ciao'}, {a: 4, c: { d: 8, e: 9}}],
        output: { a: 4, b: 'ciao', c: { d: 8, e: 9 } }
      }
    ],
    assert: tester.assert.mutation
  },
  'object.clone': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.clone,
    cases: [
    ],
    assert: tester.assert.equal
  },
  'object.getKeys': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.getKeys,
    cases: [
    ],
    assert: tester.assert.equal
  },
  'object.inherits': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.inherits,
    cases: [
    ],
    assert: tester.assert.equal
  },
  'object.empty': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.empty,
    cases: [
      {
        input: [{a:0,b:1,c:2,d:[],e:{f:-1}}],
        output: {}
      },
      {
        input: [{}],
        output: {}
      }
    ],
    assert: tester.assert.mutation
  },
  '_f.flat': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.flat,
    cases: [
      {
        input: [{ a: { a1: 1, a2: 2 }, b: 3 }],
        output: { 'a.a1': 1, 'a.a2': 2, 'b': 3 }
      }
    ],
    assert: tester.assert.equal
  },
  'object.flat': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.flat,
    cases: [
      {
        input: [{ a: { a1: 1, a2: 2 }, b: 3 }],
        output: { 'a.a1': 1, 'a.a2': 2, 'b': 3 }
      }
    ],
    assert: tester.assert.equal
  },
  '_f.raise': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.raise,
    cases: [
      {
        input: [{ 'a.a1': 1, 'a.a2': 2, 'b': 3 }],
        output: { a: { a1: 1, a2: 2 }, b: 3 }
      }
    ],
    assert: tester.assert.equal
  },
  'object.raise': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.raise,
    cases: [
      {
        input: [{ 'a.a1': 1, 'a.a2': 2, 'b': 3 }],
        output: { a: { a1: 1, a2: 2 }, b: 3 }
      }
    ],
    assert: tester.assert.equal
  },
  'object.getByFlatKey': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.getByFlatKey,
    cases: [
      {
        input: [{ a: { b: {c: 1} } }, 'a.b.c'],
        output: 1
      }
    ],
    assert: tester.assert.equal
  },
  'object.setByFlatKey': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.setByFlatKey,
    cases: [
      {
        input: [@test.case {}, 'a.b.c', 1],
        output: { a: { b: {c: 1} } }
      }
    ],
    assert: tester.assert.mutation
  }
}
