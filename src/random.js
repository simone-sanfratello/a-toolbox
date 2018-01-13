const hash = require('./hash')

/**
 * @namespace tools.random
 */
const random = {
  /**
   * get random int from 0 to max
   * @method tools.random.rnd
   * @param {number} max
   * @return {number}
   * @test.case 10 > (5)
   * @test.case 100 > (42)
   * @test.case 2 > (1)
   * @test.case 99 > (44)
   * @test.assert async (result, input, output, sandbox) => {
   *   return result >= 0 && result <= input[0]
   * }
   */
  rnd: function (max) {
    if (!max) {
      return 0
    }
    return Math.floor(max * Math.random())
  },
  /**
   * get random int from min to max
   * @method tools.random.number
   * @param {number} min
   * @param {number} max
   * @return {number}
   * @test.case 10, 20 > (11)
   * @test.case 1, 100 > (14)
   * @test.case 0, 10 > (8)
   * @test.assert async (result, input, output, sandbox) => {
   *   return result >= input[0] && result <= input[1]
   * }
   */
  number: function (min, max) {
    if (!max) {
      return random.rnd(min)
    }
    min = Math.floor(min)
    max = Math.floor(max)
    return min + random.rnd(1 + max - min)
  },

  /**
   * get random string
   * @method tools.random.number
   * @param {number} [length=8]
   * @param {Array} [set=abcdefghijklmnopqrstuvwxyz]
   * @return {string}
   * @test.case 8 > ('ajdsfchakwt')
   * @test.case 1, '1234567890' > ('9')
   * @test.case 0 > ''
   * @test.case -1 > ''
   * @test.assert async (result, input, output, sandbox) => {
   *   if(!input[0] && input[0] !== 0) {
   *     input[0] = 8
   *   }
   *   if(!input[1]) {
   *     input[1] = 'abcdefghijklmnopqrstuvwxyz'
   *   }
   *
   *   if(result.length !== input[0])
   *
   *   for (let i = 0; i < input[0]; i++) {
   *     if(input[1].indexOf(result[i]) === -1) {
   *       return false
   *     }
   *   }
   *   return true
   * }
   */
  string: function (length = 8, set = 'abcdefghijklmnopqrstuvwxyz') {
    let _str = ''
    for (let i = 0; i < length; i++) {
      _str += random.element(set)
    }
    return _str
  },

  /**
   * get random hex string
   * @method tools.random.hex
   * @param {number} [length=8]
   * @return {string}
   * @test.case 8 > ('1bc956bf')
   * @test.case 16
   * @test.case 0 > ''
   * @test.case -1 > ''
   * @test.assert async (result, input, output, sandbox) => {
   *   if(!input[0] && input[0] !== 0) {
   *     input[0] = 8
   *   }
   *
   *   if(result.length !== input[0]) {
   *     return false
   *   }
   *
   *   for (let i = 0; i < input[0]; i++) {
   *     if('0123456789abcdef'.indexOf(result[i]) === -1) {
   *       return false
   *     }
   *   }
   *   return true
   * }
   */
  hex: function (length = 8) {
    return random.string(length, '0123456789abcdef')
  },

  /**
   * get random hash string
   * @method tools.random.hash
   * @param {?string} salt
   * @return {string}
   * @test.case > ('1f8a690b7366a2323e2d5b045120da7e93896f471f8a690b731f8a690b739ab5')
   * @test.assert async (result, input, output, sandbox) => {
   *   return result.length === 64
   * }
   */
  hash: function (salt = '') {
    return hash.sha256(new Date().toISOString() + salt)
  },

  /**
   * get random element from array
   * @method tools.random.element
   * @param {Array<*>} array
   * @param {Array<*>} not
   * @return {*} element
   * @test.case [1,2,3,4,5] > (1)
   * @test.case [1,2,3,4,5], 5 > (2)
   * @test.case [1,2,3,4,5], 6 > (3)
   * @test.assert async (result, input, output, sandbox) => {
   *   if(input[1]) {
   *     if(result === input[1]) {
   *       return false
   *     }
   *   }
   *   return input[0].indexOf(result)
   * }
   */
  element: function (array, not) {
    if (!not) {
      return array[random.number(0, array.length - 1)]
    } else {
      let _item
      let i = 0
      do {
        _item = random.element(array)
      } while (not.indexOf(_item) !== -1 && ++i < array.length)
      return _item
    }
  }
}

module.exports = random
