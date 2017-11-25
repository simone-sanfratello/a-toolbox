  /**
   * array utils, inspired to goog.array
   */
  array: {
    /**
     * remove an element from array
     * @param {Array} array
     * @param {*} item
     */
    remove: function (array, item) {
      var _index = array.indexOf(item)
      if (_index !== -1) {
        array.splice(_index, 1)
      }
    },
    /**
     * remove an element from array at position
     * @param {Array} array
     * @param {number} index
     */
    removeAt: function (array, index) {
      return Array.prototype.splice.call(array, index, 1).length === 1
    },
    /**
     * get last element of array or null
     * @param {Array} array
     * @return {*} last element of the array or null
     */
    last: function (array) {
      return array[array.length - 1] || null
    },
    /**
     * get first element of array or null
     * @param {Array} array
     * @return {*} last element of the array or null
     */
    first: function (array) {
      return array[0]
    },
    /**
     * check if array contains an element
     * @param {Array} array
     * @param {*} item
     * @return {Boolean}
     */
    contains: function (array, item) {
      return array.indexOf(item) !== -1
    },
    /**
     * insert an item into array at index position
     * @param {Array} array
     * @param {number} index
     * @param {*} item
     */
    insert: function (array, index, item) {
      if (index > array.length) {
        index = array.length
      }

      if (array[index]) {
        array.splice(index, 0, item)
      } else {
        array[index] = item
      }
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
          _item = tools.array.randomElement(array)
        } while (not.indexOf(_item) !== -1 && ++i < array.length)
        return _item
      }
    },
    /**
     * concat arrays
     * @param {...Array} arrays to chain
     * @return {Array} chained arrays
     * @example tools.array.concat([0,1,2],[3,4,5]) > [0,1,2,3,4,5]
     */
    concat: function (args) {
      return Array.prototype.concat.apply(Array.prototype, arguments)
    },
    /**
     * empty - need to not break references
     */
    empty: function (array) {
      while (array[0]) {
        array.pop()
      }
    },
    add: function (array, item, unique) {
      if (unique && tools.array.contains(array, item)) {
        return
      }
      array.push(item)
    }

  },
