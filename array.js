/**
 * array utils, inspired to goog.array
 * @namespace tools.array
 */
const array = {
  /**
   * remove an element from array, only once
   * @method tools.array.remove
   * @todo item=object, date, regexp ...
   * @todo remove all item, not only first
   * @param {Array<*>} array
   * @param {*} item
   * @test.case [1,2,3], 2 > &[1,3]
   * @test.case [1,2,3], 3 > &[1,2]
   * @test.case ['js','ruby','python'], 1 > &['js','python']
   */
  remove: function (array, item) {
    const _index = array.indexOf(item)
    if (_index !== -1) {
      array.splice(_index, 1)
    }
  },

  /**
   * remove an element from array at position
   * @method tools.array.removeAt
   * @param {Array<*>} array
   * @param {number} index
   * @test.case [1,2,3], 0 > &[2,3]
   * @test.case [1,2,3], 1 > &[1,3]
   * @test.case [1,2,3], -1 > &[1,2]
   * @test.case [1,2,3], 4 > &[1,2,3]
   */
  removeAt: function (array, index) {
    return Array.prototype.splice.call(array, index, 1).length === 1
  },

  /**
   * get last element of array or undefined
   * @method tools.array.last
   * @param {Array<*>} array
   * @return {*} last element of the array or undefined
   * @test.case [1,2,3] > 3
   * @test.case [null, 0, -1] > -1
   * @test.case [null] > null
   * @test.case [0] > 0
   * @test.case [] > undefined
   * @test.case [1, undefined] > undefined
   */
  last: function (array) {
    return array[array.length - 1]
  },

  /**
   * get nth element of array
   * @method tools.array.at
   * @param {Array<*>} array
   * @return {*} nth element of array; if negative, start from end: -1 = last element; undefined if missing
   * @test.case [1,2,3], 0 > 1
   * @test.case [0,1,null,3], 0 > 0
   * @test.case [0,1,null,false], -1 > false
   * @test.case [0,1,null,false], -2 > null
   * @test.case [0,1,'0',false], -2 > '0'
   * @test.case [undefined,'0',false], 0 > undefined
   * @test.case [], 2 > undefined
   */
  at: function (array, p) {
    if (p < 0) {
      p = array.length + p
    }
    return array[p]
  },

  /**
   * get first element of array or undefined
   * @method tools.array.first
   * @param {Array<*>} array
   * @return {*} first element of the array or undefined
   * @test.case [1,2,3] > 1
   * @test.case [0,1,null,3] > 0
   * @test.case [1,null,false] > 1
   * @test.case [null,false] > null
   * @test.case [undefined,'0',false] > undefined
   * @test.case [] > undefined
   */
  first: function (array) {
    return array[0]
  },

  /**
   * check if array contains an element
   * @method tools.array.contains
   * @param {Array<*>} array
   * @param {*} item
   * @return {boolean}
   */
  contains: function (array, item) {
    return array.indexOf(item) !== -1
  },

  /**
   * insert an item into array at index position
   * @method tools.array.insert
   * @param {Array<*>} array
   * @param {number} index
   * @param {*} item
   * @test.case ['john', 'alice', 'bob'], 0, 'mary' > &['mary', 'john', 'alice', 'bob']
   * @test.case ['john', 'alice', 'bob'], 1, 'mary' > &['john', 'mary', 'alice', 'bob']
   * @test.case ['john', 'alice', 'bob'], -1, 'mary' > &['john', 'alice', 'bob', 'mary']
   * @test.case ['john', 'alice', 'bob'], -2, 'mary' > &['john', 'alice', 'mary', 'bob']
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
   * @method tools.array.concat
   * @param {...Array<*>} arrays to chain
   * @return {Array<*>} chained arrays
   * @test.case [0,1,2],[3,4,5] > [0,1,2,3,4,5]
   * @test.case [0, 1, 2, 3], ['a', 'b', 'c'], [{a: 2}] > [0, 1, 2, 3, 'a', 'b', 'c', {a: 2}]
   */
  concat: function (args) {
    return Array.prototype.concat.apply(Array.prototype, arguments)
  },

  /**
   * empty array - need to keep references
   * @method tools.array.empty
   * @test.case [0,1,2] > &[]
   * @test.case [] > &[]
   */
  empty: function (array) {
    while (array[0]) {
      array.pop()
    }
  },

  /**
   * push item into array, optionally check if already exists
   * @method tools.array.add
   */
  add: function (array, item, unique) {
    if (unique && array.contains(array, item)) {
      return
    }
    array.push(item)
  }

}

module.exports = array
