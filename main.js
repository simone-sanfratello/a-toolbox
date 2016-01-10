var tools = {
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
      if (_index !== -1)
        array.splice(_index, 1)
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
     * @returns {*} last element of the array or null
     */
    last: function (array) {
      return array[array.length - 1] || null
    },
    /**
     * get first element of array or null
     * @param {Array} array
     * @returns {*} last element of the array or null
     */
    first: function (array) {
      return array[0]
    },
    /**
     * check if array contains an element
     * @param {Array} array
     * @param {*} item
     * @returns {Boolean}
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
     * @returns {*} element
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
     * @returns {Array} chained arrays
     * @example tools.array.concat([0,1,2],[3,4,5]) > [0,1,2,3,4,5]
     */
    concat: function (args) {
      return Array.prototype.concat.apply(Array.prototype, arguments)
    },
    /**
     * empty - need to not break references
     */
    empty: function (array) {
      while (array[0])
        array.pop()
    }
  },
  /**
   * random utils
   */
  random: {
    /**
     * get random int from 0 to val
     * @param {number} val max item
     * @returns {number}
     */
    rnd: function (val) {
      if (!val)
        return 0
      return Math.floor(val * (Math.random() % 1))
    },
    /**
     * get random int from min to max
     * @param {number} min
     * @param {number} max
     * @returns {number}
     */
    number: function (min, max) {
      if (!max)
        return tools.random.rnd(min)
      min = Math.floor(min)
      max = Math.floor(max)
      return min + tools.random.rnd(1 + max - min)
    },
    /**
     * get random string
     * @param {number} [length=8]
     * @param {Array} [set=qwertyuiopasdfghjklzxcvbnm]
     * @returns {String}
     */
    string: function (length, set) {
      if (!length)
        length = 8
      if (!set)
        set = 'qwertyuiopasdfghjklzxcvbnm'
      var _str = ''
      for (var i = 0; i < length; i++) {
        _str += tools.array.randomElement(set)
      }
      return _str
    }
  },
  object: {
    /**
     *  merge obj2 into obj1
     *  @param {object} obj1
     *  @param {object} obj2
     */
    merge: function (obj1, obj2) {
      for (var i in obj2) {
        if (typeof obj2[i] === 'object') {
          !obj1[i] && (obj1[i] = {})
          tools.object.merge(obj1[i], obj2[i])
        } else {
          obj1[i] = obj2[i]
        }
      }
    },
    /**
     * Clone an array or an object in input
     * @function
     * @param {Object|Array} obj The array or the object to clone
     * @returns {Object|Array}
     */
    clone: function (obj) {
      if (obj === null || obj === undefined)
        return obj
      var _type = (obj instanceof Array) ? _type = 'array' : typeof obj
      if (_type === 'object' || _type === 'array') {
        if (obj instanceof Date) {
          return new Date(obj.getTime())
        } else if (typeof window !== 'undefined' && (obj instanceof File || obj instanceof Blob)) {
          return obj
        } else {
          if (obj.clone)
            return obj.clone()
          /**
           * @type {Array|Object}
           */
          var _clone = _type === 'array' ? [] : {}
          for (var key in obj)
            _clone[key] = tools.object.clone(obj[key])
          return _clone
        }
      }
      return obj
    },
    /**
     * @see http://google.github.io/closure-library/api/source/closure/goog/object/object.js.src.html#l225
     * @param {object} obj
     * @returns {Array}
     */
    getKeys: function (obj) {
      var _keys = []
      for (var key in obj) {
        _keys.push(key)
      }
      return _keys
    },
    /**
     * @param {object} obj
     * @returns {object}
     */
    sortKeys: function (obj) {
      var _keys = tools.object.getKeys(obj)
      _keys.sort()
      var _obj = {}
      for (var i = 0; i < _keys.length; i++)
        _obj[_keys[i]] = obj[_keys[i]]
      return _obj
    }
  },
  /**
   * async parallel task manager
   * @constructor
   * @param {function} done callback when all tasks are completed
   */
  Tasks: function (done) {
    var __tasks = []
    return {
      /**
       * schedule what to do
       * @param {string} id
       */
      todo: function (id) {
        __tasks.push(id)
      },
      /**
       * declare it's done
       * @param {string} id
       */
      done: function (id) {
        tools.array.remove(__tasks, id)
        if (__tasks.length < 1) {
          done && done()
        }
      }
    }
  },
  string: {
    /**
     * replace placeholders inside graph brackets {} with obj dictionary
     * ~ES6 template string, but safer
     * @param {string} str
     * @param {type} obj
     * @param {bool} [remove=false] remove missing placeholders from obj
     * @returns {unresolved}
     */
    template: function (str, obj, remove) {
      return str.replace(/\{([\w]+)\}/g, function (str, key) {
        return obj[key] ? obj[key] : (remove ? '' : str)
      })
    },
    /**
     * trim string
     * @see http://google.github.io/closure-library/api/namespace_goog_string.html
     * @param {string} str
     * @param {?string[]} cuts
     * @returns {string}
     */
    trim: function (str, cuts) {
      if (!cuts) {
        return str.replace(/^[\s\xa0]+|[\s\xa0]+$/g, '')
      } else {
        var _cuts = cuts.join()
        return str.replace(new RegExp('^[' + _cuts + ']+|[' + _cuts + ']+$', 'gm'), '')
      }
    },
    replaceAll: function (str, from, to) {
      return str.split(from).join(to)
    },
    capitalize: function (str) {
      return str.substr(0, 1).toUpperCase() + str.substr(1).toLowerCase()
    }
  },
  console: {
    /**
     * 
     * @param {object} prm
     * @param {number} [prm.tick=10] millisec
     * @param {object} [prm.spinner=['.    ', '..   ', '...  ', '.... ', '.....']]
     */
    wait: function (prm) {
      if (!prm)
        prm = {}

      var __wait = null
      var __timer = 0
      var __tick = prm.tick || 100
      var __spin = prm.spinner || ['.    ', '..   ', '...  ', '.... ', '.....']
      var __spinner = 0

      var start = function () {
        if (__wait)
          return
        __timer = 0
        __spinner = 0
        __wait = setInterval(function () {
          process.stdout.write(__spin[__spinner % __spin.length] + ' ' + (__timer/1000).toFixed(2) + ' sec \r')
          __timer += __tick
          __spinner++
        }, __tick)
      }

      var end = function () {
        clearInterval(__wait)
        __wait = null
      }

      return {
        start: start,
        end: end
      }
    }
  }
}
// compatibilty < 0.0.10 - to remove
tools.tasks = tools.Tasks

String.prototype.replaceAll = function (from, to) {
  console.warn('String.replaceAll is deprecated, please use tools.string.replaceAll')
  return tools.string.replaceAll(this, from, to)
}

String.prototype.capitalize = function () {
  console.warn('String.capitalize is deprecated, please use tools.string.capitalize')
  return tools.string.capitalize(this)
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = tools
}
