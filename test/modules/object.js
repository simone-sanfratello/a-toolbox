const tester = require('tollo')
const instance = require('../../src/object.js')

module.exports = {
  'object.setByFlatKey': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.setByFlatKey,
    cases: [
      {
        input: [{}, 'a', 2],
        output: { a: 2 }
      },
      {
        input: [{}, 'a.b.c', 1],
        output: { a: { b: {c: 1} } }
      },
      /*
      {
        // deep-equal in checkv fail to compare
        disabled: true,
        input: [{}, 'ann[0].b[1].cic', 1],
        output: { ann: [{ b: [null, {cic: 1}] }] }
      }
      */
    ],
    assert: tester.assert.mutation
  }
}
