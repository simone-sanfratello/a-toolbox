
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
     */
    last: function (array) {
      return array[array.length - 1]
    },
    /**
     * get nth element of array
     * @param {Array} array
     * @return {*} nth element of array; if negative, start from end: -1 = last element; null if missing
     * @test [1,2,3], 0 > 1
     * @test [0,1,null,3], 0 > 0
     * @test [0,1,null,false], -1 > false
     * @test [0,1,null,false], -2 > null
     * @test [0,1,'0',false], -2 > '0'
     */
    at: function (array, p) {
      let k
      if (p > -1) {
        k = array[p]
      } else {
        k = array[array.length + p]
      }
      return k !== undefined ? k : null
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
