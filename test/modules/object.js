const tester = require('tollo')
const instance = require('../../src/object.js')

module.exports = {
  'object.flat': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.flat,
    cases: [
      {
        input: [{ a: { a1: 1, a2: 2 }, b: 3 }],
        output: { \'a.a1\': 1, \'a.a2\': 2, \'b\': 3 }
      }
    ],
    assert: tester.assert.equal
  },
  'object._rflat': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance._rflat,
    cases: [
    ]
  },
  'object.merge': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.merge,
    cases: [
      {
        input: [{a: 1, b: \'ciao\'}, {a: 4, c: { d: 8, e: 9}}],
        output: { a: 4, b: \'ciao\', c: { d: 8, e: 9 } }
      }
    ],
    assert: tester.assert.mutation
  },
  'object.clone': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.clone,
    cases: [
      {
        input: [{a: 1, b: \'ciao\'}],
        output: {a: 1, b: \'ciao\'}
      },
      {
        input: [{a: 4, c: { d: 8, e: 9}}],
        output: {a: 4, c: { d: 8, e: 9}}
      },
      {
        input: [{a: 4, b: \'ciao\', c: { d: 8, e: 9 }}],
        output: {a: 4, b: \'ciao\', c: { d: 8, e: 9 }}
      },
      {
        input: [{a: [4, function() { console.log(\'hi\') }, {a1: 0, a2: null}], b: \'ciao\', c: { d: 8, e: 9 }}],
        could: '{a: [4, function() { console.log(\'hi\') }, {a1: 0, a2: null}], b: \'ciao\', c: { d: 8, e: 9 }}'
      }
    ],
    assert: tester.assert.equal
  },
  'object.getKeys': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.getKeys,
    cases: [
      {
        input: [{a: () => { }, b: 1, c: \'ciao\'}],
        output: [\'a\',\'b\',\'c\']
      }
    ],
    assert: tester.assert.equal
  },
  'object.inherits': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.inherits,
    cases: [
      {
        input: [{}, {f0: () => { }, p1: 1, p2: \'ciao\'}],
        output: {f0: () => { }, p1: 1, p2: \'ciao\'}
      }
    ],
    assert: tester.assert.mutation
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
  'object.raise': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.raise,
    cases: [
      {
        input: [{ \'a.a1\': 1, \'a.a2\': 2, \'b\': 3 }],
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
        input: [{ a: { b: {c: 1} } }, \'a.b.c\'],
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
        input: [{}, \'a.b.c\', 1],
        output: { a: { b: {c: 1} } }
      }
    ],
    assert: tester.assert.mutation
  }
}
