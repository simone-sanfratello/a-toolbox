const tollo = require('tollo')
const instance = require('../../src/object.js')

module.exports = {
  'object.merge': {
    describe: '',
    mode: tollo.mode.SYNC,
    act: instance.merge,
    cases: [
      {
        input: [{a: 1, b: 'ciao'}, {a: 4, c: { d: 8, e: 9}}],
        output: { a: 4, b: 'ciao', c: { d: 8, e: 9 } }
      }
    ],
    assert: tollo.assert.mutation
  },
  'object.clone': {
    describe: '',
    mode: tollo.mode.SYNC,
    act: instance.clone,
    cases: [
      {
        input: [{a: 1, b: 'ciao'}],
        output: {a: 1, b: 'ciao'}
      },
      {
        input: [{a: 4, c: { d: 8, e: 9}}],
        output: {a: 4, c: { d: 8, e: 9}}
      }
    ]
  },
  'object.getKeys': {
    describe: '',
    mode: tollo.mode.SYNC,
    act: instance.getKeys,
    cases: [
      {
        input: [{a: () => { }, b: 1, c: 'ciao'}],
        output: ['a','b','c']
      }
    ]
  },
  'object.inherits': {
    describe: '',
    mode: tollo.mode.SYNC,
    act: instance.inherits,
    cases: [
      {
        input: [{}, {p1: 1, p2: 'ciao'}],
        output: {p1: 1, p2: 'ciao'}
      }
    ],
    assert: tollo.assert.mutation
  },
  'object.empty': {
    describe: '',
    mode: tollo.mode.SYNC,
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
    assert: tollo.assert.mutation
  },
  'object.raise': {
    describe: '',
    mode: tollo.mode.SYNC,
    act: instance.raise,
    cases: [
      {
        input: [{ 'a.a1': 1, 'a.a2': 2, 'b': 3 }],
        output: { a: { a1: 1, a2: 2 }, b: 3 }
      }
    ]
  },
  'object.flat': {
    describe: '',
    mode: tollo.mode.SYNC,
    act: instance.flat,
    cases: [
      {
        input: [{ a: { a1: 1, a2: 2 }, b: 3 }],
        output: { 'a.a1': 1, 'a.a2': 2, 'b': 3 }
      }
    ]
  },
  'object._rflat': {
    describe: '',
    mode: tollo.mode.SYNC,
    act: instance._rflat,
    cases: [
    ]
  },
  'object.walk': {
    describe: '',
    mode: tollo.mode.SYNC,
    act: instance.walk,
    cases: [
      {
        input: [{ a: { a1: 1, a2: 2 }, b: 3 }, 'a.a1'],
        output: 1
      },
      {
        input: [{ a: { a1: { a2: 2 } }, b: 3 }, 'a.a1.a2'],
        output: 2
      }
    ]
  },
  'object.getByFlatKey': {
    describe: '',
    mode: tollo.mode.SYNC,
    act: instance.getByFlatKey,
    cases: [
      {
        input: [{ a: { b: {c: 1} } }, 'a.b.c'],
        output: 1
      }
    ]
  },
  'object.setByFlatKey': {
    describe: '',
    mode: tollo.mode.SYNC,
    act: instance.setByFlatKey,
    cases: [
      {
        input: [{}, 'a.b.c', 1],
        output: { a: { b: {c: 1} } }
      },
      {
        input: [{}, 'a', 2],
        output: { a: 2 }
      }
    ],
    assert: tollo.assert.mutation
  }
}
