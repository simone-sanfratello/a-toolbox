const string = {
  /**
   * replace placeholders inside graph brackets {} with obj dictionary
   * ~ES6 template string
   * @param {string} str
   * @param {Object} obj
   * @param {boolean=} remove missing placeholders from obj, default false
   * @return {string}
   *
   * @test.case 'hi {name} how are you?', {name: 'Alice'} > 'hi Alice how are you?'
   * @test.case 'hi {name} how are you?', {}, true > 'hi  how are you?'
   * @test.case '{a} one, 2 {b}', {a: 1, b: 'two', c: 3} > '1 one, 2 two'
   * @test.case `multiline {1}\n multiline`, {1: 'one'} > `multiline one\n multiline`
   * @test.case '<div class="{color}">My name is {name} I was born in {year} and my favourite color is {color}</div>{nothing}', {name: 'Alice',year: 2014,color: 'purple'}
   * > '<div class="purple">My name is Alice I was born in 2014 and my favourite color is purple</div>{nothing}'
   */
  template: function (str, obj, remove = false) {
    if (!str) {
      return ''
    }
    return str.replace(/\{([\w.]+)\}/g, function (str, key) {
      return obj[key] ? obj[key] : (remove ? '' : str)
    })
  },

  /**
   * trim string
   * @see http://google.github.io/closure-library/api/namespace_goog_string.html
   * @param {string} str
   * @param {?string[]} cuts
   * @return {string}
   *
   * @test.case ' regular trim      ' > 'regular trim'
   * @test.case ' trim,no,. : \n    ', [',','.',' ', ':', '\n'] > 'trim,no'
   * @test.case ' trim string naneno', ['na','ne','no', ' '] > 'trim string'
   * @test.case '({cut these silly brackets please)}', ['{', '}', '(', ')'] > 'cut these silly brackets please'
   */
  trim: function (str, cuts) {
    if (!cuts) {
      return str.replace(/^[\s\xa0]+|[\s\xa0]+$/g, '')
    } else {
      var _cuts = cuts.join()
      return str.replace(new RegExp('^[' + _cuts + ']+|[' + _cuts + ']+$', 'gm'), '')
    }
  },

  /**
   * @param {string} str
   * @param {string} from
   * @param {string} to
   * @return {string}
   * @test.case 'abcadaeafaga', 'a', '' > 'bcdefg'
   * @test.case '112233445544', '4', '9' > '112233995599'
   * @test.case 'repeat repeat repeat', 'repeat', 'don\'t repeat' > 'don\'t repeat don\'t repeat don\'t repeat'
   */
  replaceAll: function (str, from, to) {
    return str.split(from).join(to)
  },

  /**
   * @param {string} str
   * @return {string}
   * @test.case 'alice' > 'Alice'
   * @test.case 'alice smith' > 'Alice smith'
   * @test.case 'alice-smith' > 'Alice-smith'
   */
  capitalize: function (str) {
    return str.substr(0, 1).toUpperCase() + str.substr(1).toLowerCase()
  },

  /**
   * @param {string} prefix
   * @param {string} str
   * @return {string}
   * @test.case 'miss ', 'Alice' > 'miss Alice'
   * @test.case 'miss ', 'miss Alice' > 'miss Alice'
   */
  prependMissing: function (prefix, str) {
    if (str.indexOf(prefix) === 0) {
      return str
    }
    return prefix + str
  },

  /**
   * @param {string} str
   * @param {RegExp} regexp
   * @return {string[]}
   */
  matchAll: function (str, regexp) {
    const _matches = []
    let _match = regexp.exec(str)
    while (_match) {
      _matches.push(_match)
      _match = regexp.exec(str)
    }
    return _matches
  }
}

module.exports = string
