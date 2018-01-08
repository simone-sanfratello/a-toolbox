const tester = require('../../../tollo-full/index.js').tester
const instance = require('../../src/string.js')

module.exports = {
  'string.template': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.template,
    cases: [
      {
        input: ['hi {name} how are you?', {name: 'Alice'}],
        output: 'hi Alice how are you?'
      },
      {
        input: ['hi {name} how are you?', {}, true],
        output: 'hi  how are you?'
      },
      {
        input: ['{a} one, 2 {b}', {a: 1, b: 'two', c: 3}],
        output: '1 one, 2 two'
      },
      {
        input: [`multiline {1}
 multiline`, {1: 'one'}],
        output: `multiline one
 multiline`
      },
      {
        input: ['<div class="{color}">My name is {name} I was born in {year} and my favourite color is {color}</div>{nothing}', {name: 'Alice',year: 2014,color: 'purple'}],
        output: '<div class="purple">My name is Alice I was born in 2014 and my favourite color is purple</div>{nothing}'
      }
    ],
    assert: tester.assert.equal
  },
  'string.trim': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.trim,
    cases: [
      {
        input: [' regular trim      '],
        output: 'regular trim'
      },
      {
        input: [' trim,no,. : 
    ', [',','.',' ', ':', '
']],
        output: 'trim,no'
      },
      {
        input: [' trim string naneno', ['na','ne','no', ' ']],
        output: 'trim string'
      },
      {
        input: ['({cut these silly brackets please)}', ['{', '}', '(', ')']],
        output: 'cut these silly brackets please'
      }
    ],
    assert: tester.assert.equal
  },
  'string.replaceAll': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.replaceAll,
    cases: [
      {
        input: ['abcadaeafaga', 'a', ''],
        output: 'bcdefg'
      },
      {
        input: ['112233445544', '4', '9'],
        output: '112233995599'
      },
      {
        input: ['repeat repeat repeat', 'repeat', 'don't repeat' > 'don't repeat don't repeat don't repeat']
      },
      {
        input: ['no replace all in js native code that replace all the replace', ' ', '_'],
        output: 'no_replace_all_in_js_native_code_that_replace_all_the_replace'
      }
    ],
    assert: tester.assert.equal
  },
  'string.capitalize': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.capitalize,
    cases: [
      {
        input: ['alice'],
        output: 'Alice'
      },
      {
        input: ['alice smith'],
        output: 'Alice smith'
      },
      {
        input: ['alice-smith'],
        output: 'Alice-smith'
      }
    ],
    assert: tester.assert.equal
  },
  'string.prependMissing': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.prependMissing,
    cases: [
      {
        input: ['miss ', 'Alice'],
        output: 'miss Alice'
      },
      {
        input: ['miss ', 'miss Alice'],
        output: 'miss Alice'
      }
    ],
    assert: tester.assert.equal
  },
  'string.matchAll': {
    describe: '',
    mode: tester.mode.SYNC,
    act: instance.matchAll,
    cases: [
    ],
    assert: tester.assert.equal
  }
}
