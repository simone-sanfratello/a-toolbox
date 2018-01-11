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
   */
  hex: function (length = 8) {
    return random.string(length, '0123456789abcdef')
  },
  /**
   * get random hash string
   * @method tools.random.hash
   * @param {?string} salt
   * @return {string}
   */
  hash: function (salt = '') {
    return hash.sha256(new Date().toISOString() + salt)
  },
  /**
   * get random element from array
   * @method tools.random.hash
   * @param {Array<*>} array
   * @param {Array<*>} not
   * @return {*} element
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
