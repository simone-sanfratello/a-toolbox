
  /**
   * array utils, inspired to goog.array
   */
  const array = {
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
     * @test.case [1,2,3] > 3
     * @test.case [null, 0, -1] > -1
     * @test.case [0] > 0
     * @test.case [] > null
     * @test.case [1, undefined] > undefined
     */
    last: function (array) {
      if (array.length < 1) {
        return null
      }
      return array[array.length - 1]
    },
    /**
     * get nth element of array
     * @param {Array} array
     * @return {*} nth element of array; if negative, start from end: -1 = last element; null if missing
     * @test.case [1,2,3], 0 > 1
     * @test.case [0,1,null,3], 0 > 0
     * @test.case [0,1,null,false], -1 > false
     * @test.case [0,1,null,false], -2 > null
     * @test.case [0,1,'0',false], -2 > '0'
     * @test.case [undefined,'0',false], 0 > undefined
     * @test.case [], 2 > null
     */
    at: function (array, p) {
      if (p < 0) {
        p = array.length + p
      }
      return array[p]
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
     * concat arrays
     * @param {...Array} arrays to chain
     * @return {Array} chained arrays
     * @example array.concat([0,1,2],[3,4,5]) > [0,1,2,3,4,5]
     */
    concat: function (args) {
      return Array.prototype.concat.apply(Array.prototype, arguments)
    },
    /**
     * empty - need to keep references
     */
    empty: function (array) {
      while (array[0]) {
        array.pop()
      }
    },
    add: function (array, item, unique) {
      if (unique && array.contains(array, item)) {
        return
      }
      array.push(item)
    }

  }

  module.exports = array
