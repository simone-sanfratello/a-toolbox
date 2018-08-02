/**
 * array utils, inspired to goog.array
 * @namespace tools.array
 */
const array = {
  /**
   * remove an element from array
   * it removes only the first occurrence
   * @method tools.array.remove
   * @todo item=object, date, regexp ...
   * @todo remove all item, not only the first one
   * @param {Array<*>} array
   * @param {*} item
   * @test.case ['js','ruby','python'], 'ruby' > &['js','python']
   * @test.case [1,2,3], 2 > &[1,3]
   * @test.case [1,2,3], 3 > &[1,2]
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
   * @test.case [1,2,3], 1 > true
   * @test.case [1,2,3], 4 > false
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
   * @test.case ['john', 'alice', 'bob'], -1, 'mary' > &['john', 'alice', 'mary', 'bob']
   * @test.case ['john', 'alice', 'bob'], -2, 'mary' > &['john', 'mary', 'alice', 'bob']
   */
  insert: function (array, index, item) {
    if (index > array.length) {
      index = array.length
    }

    if (array.length > index) {
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
    while (array.length > 0) {
      array.pop()
    }
  },

  /**
   * push item into array, optionally check if already exists
   * @method tools.array.add
   * @param {Array<*>} array
   * @param {*} item
   * @param {boolean} [unique=false]
   * @test.case [0,1,2,3], 3, true > &[0,1,2,3]
   */
  add: function (array, item, unique) {
    if (!!unique && array.indexOf(item) !== -1) {
      return
    }
    array.push(item)
  },

  /**
   * creates a new array with all sub-array elements concatted into it recursively
   * ~ proposal Array.prototype.flatten()
   * @method tools.array.flat
   * @param {Array<*>} array_
   * @test.case [0,[1,2],[3]] > [0,1,2,3]
   */
  flat: function (array_) {
    let _flat = []
    for (let i = 0; i < array_.length; i++) {
      const _e = array_[i]
      if (_e instanceof Array) {
        _flat = _flat.concat(array.flat(_e))
      } else {
        _flat.push(_e)
      }
    }
    return _flat
  },

  /**
   * insert an element in a sorted array, keeping sorted
   * @method tools.array.sortingInsert
   * @param {Array<*>} array_
   * @param {*} item
   * @test.case [0,1,2,10,11,20], 15 > &[0,1,2,10,11,15,20]
   * @test.case [0,1,2,10,11,20], 25 > &[0,1,2,10,11,20,25]
   * @test.case [0,1,2,10,11,20], 0 > &[0,0,1,2,10,11,20]
   * @test.case [1,2,10,11,20], 0 > &[0,1,2,10,11,20]
   */
  sortingInsert: function (array_, item) {
    let _end = array_.length - 1
    let _start = 0
    let i, _element

    while (_start <= _end) {
      i = (_start + _end) / 2 | 0
      _element = array_[i]
      if (_element < item) {
        _start = i + 1
      } else if (_element > item) {
        _end = i - 1
      } else {
        array.insert(array_, i, item)
        return
      }
    }

    if (_end < array_.length - 1) {
      array.insert(array_, _end + 1, item)
    } else if (_start > 0) {
      array.insert(array_, _start, item)
    } else {
      array_.push(item)
    }
  },

  /**
   * like Array.indexOf but perform binary search (array should be sorted)
   * @method tools.array.binaryIndexOf
   * @param {Array<*>} array
   * @param {*} item
   * @return {number} index of element of -1
   * @test.case [0,1,2,3], 0 > 0
   * @test.case [0,1,2,3,19,20,100], 19 > 4
   * @test.case [0,1,2,3,19,20,100,999], 11 > -1
   */
  binaryIndexOf: function (array, item) {
    let _end = array.length - 1
    let _start = 0
    let i, _element

    while (_start <= _end) {
      i = (_start + _end) / 2 | 0
      _element = array[i]
      if (_element < item) {
        _start = i + 1
      } else if (_element > item) {
        _end = i - 1
      } else {
        return i
      }
    }
    return -1
  }

}

module.exports = array
