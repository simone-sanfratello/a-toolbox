const tollo = require('tollo')
const instance = require('../../src/string.js')

module.exports = {
  'string.template': {
    describe: '',
    mode: tollo.mode.SYNC,
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
        input: [`multiline {1}\n multiline`, {1: 'one'}],
        output: `multiline one\n multiline`
      },
      {
        input: [`multilevel {a.b.c}`, {a: {b: {c: 'works'}}}],
        output: `multilevel works`
      },
      {
        input: ['<div class="{color}">My name is {name} I was born in {year} and my favourite color is {color}</div>{nothing}', {name: 'Alice',year: 2014,color: 'purple'}],
        output: '<div class="purple">My name is Alice I was born in 2014 and my favourite color is purple</div>{nothing}'
      }
    ]
  },
  'string.trim': {
    describe: '',
    mode: tollo.mode.SYNC,
    act: instance.trim,
    cases: [
      {
        input: [' regular trim      '],
        output: 'regular trim'
      },
      {
        input: [' trim,no,. : \n    ', [',','.',' ', ':', '\n']],
        output: 'trim,no'
      },
      {
        input: [' trim string naneno', ['na','ne','no', ' ']],
        output: 'trim string'
      },
      {
        input: ['({cut these silly brackets please)}', ['{', '}', '(', ')']],
        output: 'cut these silly brackets please'
      },
      {
        input: ['multiple words <li>Aliquam</li> to trim', ['multiple', 'words', 'to', 'trim', ' ']],
        output: '<li>Aliquam</li>'
      },
      {
        input: ['<p><ul><li>Aliquam.</li></ul></p>', ['<p>', '</p>']],
        output: '<ul><li>Aliquam.</li></ul>'
      }
    ]
  },
  'string.replaceAll': {
    describe: '',
    mode: tollo.mode.SYNC,
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
        input: ['repeat repeat repeat', 'repeat', 'don\'t repeat'],
        output: 'don\'t repeat don\'t repeat don\'t repeat'
      },
      {
        input: ['no replace all in js native code that replace all the replace', ' ', '_'],
        output: 'no_replace_all_in_js_native_code_that_replace_all_the_replace'
      }
    ]
  },
  'string.capitalize': {
    describe: '',
    mode: tollo.mode.SYNC,
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
    ]
  },
  'string.prependMissing': {
    describe: '',
    mode: tollo.mode.SYNC,
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
    ]
  },
  'string.matchAll': {
    describe: '',
    mode: tollo.mode.SYNC,
    act: instance.matchAll,
    cases: [
      {
        input: ['one two three', /[\w]+/g],
        output: [["one"],["two"],["three"]]
      }
    ]
  }
}
