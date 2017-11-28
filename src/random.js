  /**
   * random utils
   */
  random: {
    /**
     * get random int from 0 to val
     * @param {number} val max item
     * @return {number}
     */
    rnd: function (val) {
      if (!val) {
        return 0
      }
      return Math.floor(val * (Math.random() % 1))
    },
    /**
     * get random int from min to max
     * @param {number} min
     * @param {number} max
     * @return {number}
     */
    number: function (min, max) {
      if (!max) {
        return tools.random.rnd(min)
      }
      min = Math.floor(min)
      max = Math.floor(max)
      return min + tools.random.rnd(1 + max - min)
    },
    /**
     * get random string
     * @param {number} [length=8]
     * @param {Array} [set=abcdefghijklmnopqrstuvwxyz]
     * @return {string}
     */
    string: function (length, set) {
      if (!length) {
        length = 8
      }
      if (!set) {
        set = 'abcdefghijklmnopqrstuvwxyz'
      }
      var _str = ''
      for (var i = 0; i < length; i++) {
        _str += tools.array.randomElement(set)
      }
      return _str
    },
    /**
     * get random hex string
     * @param {number} [length=8]
     * @return {string}
     */
    hex: function (length) {
      if (!length) {
        length = 8
      }
      return tools.random.string(length, '0123456789abcdef')
    },
    hash: function (salt) {
      return tools.hash.sha256(new Date().toISOString() + (salt || ''))
    },
  /**
     * get random element from array
     * @param {Array} array
     * @param {*} not
     * @return {*} element
     */
    randomElement: function (array, not) {
      if (!not) {
        return array[tools.random.number(0, array.length - 1)]
      } else {
        var _item
        var i = 0
        do {
          _item = array.randomElement(array)
        } while (not.indexOf(_item) !== -1 && ++i < array.length)
        return _item
      }
    }    
  },
