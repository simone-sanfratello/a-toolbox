// standardjs
/* global Blob File FormData $ */

var tools = {
  /** low level function */
  core: {
    /**
     * check if v is setted, means it's not null or undefined
     * @param {*} v
     */
    isSet: function (v) {
      return (typeof v !== 'undefined' || v !== null)
    },

    onBrowser: function () {
      return (typeof window !== 'undefined' && typeof module === 'undefined')
    }
  },

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
      } else {
        array.push(item)
      }
    }

  },

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
     * @return {String}
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
     * @return {String}
     */
    hex: function (length) {
      if (!length) {
        length = 8
      }
      return tools.random.string(length, '0123456789abcdef')
    }
  },

  object: {
    /**
     *  merge obj2 into obj1
     *  @param {Object} obj1
     *  @param {Object} obj2
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
     * @return {Object|Array}
     */
    clone: function (obj) {
      if (obj === null || obj === undefined) {
        return obj
      }
      var _type = (obj instanceof Array) ? _type = 'array' : typeof obj
      if (_type === 'object' || _type === 'array') {
        if (obj instanceof Date) {
          return new Date(obj.getTime())
        } else if (typeof window !== 'undefined' && (obj instanceof File || obj instanceof Blob)) {
          return obj
        } else {
          if (obj.clone) {
            return obj.clone()
          }
          /**
           * @type {Array|Object}
           */
          var _clone = _type === 'array' ? [] : {}
          for (var key in obj) {
            _clone[key] = tools.object.clone(obj[key])
          }
          return _clone
        }
      }
      return obj
    },
    /**
     * @see http://google.github.io/closure-library/api/source/closure/goog/object/object.js.src.html#l225
     * @param {Object} obj
     * @return {Array}
     */
    getKeys: function (obj) {
      if (Object.keys) {
        return Object.keys(obj)
      }
      var _keys = []
      for (var key in obj) {
        _keys.push(key)
      }
      return _keys
    },
    /**
     * @param {Object} obj
     * @return {Object}
     */
    sortKeys: function (obj) {
      var _keys = tools.object.getKeys(obj)
      _keys.sort()
      var _obj = {}
      for (var i = 0; i < _keys.length; i++) {
        _obj[_keys[i]] = obj[_keys[i]]
      }
      return _obj
    },
    /**
     * @todo properly
     */
    apply: function (source, destination, template) {
      let _properties
      if (template) {
        switch (template) {
          // @todo create template dir
          case 'EventEmitter':
            _properties = ['on', 'once', 'removeAllListeners', 'removeListener']
        }
      }
      // else if template is array ..
      _properties.forEach((property) => {
        destination[property] = function () {
          souce[property].apply(source, arguments)
        }
      })
    }
  },

  /**
   * async parallel task manager
   * @constructor
   * @param {function} done callback when all tasks are completed
   */
  Tasks: function (done, options) {
    var __tasks = []
    var __chronos = {}
    if (!options) {
      options = {}
    }

    return {
      /**
       * schedule what to do
       * @param {string} id
       */
      todo: function (id) {
        if (options.chrono) {
          __chronos[id] = new tools.time.Chrono(id)
          __chronos[id].check()
        }
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
        if (options.chrono) {
          return {chrono: __chronos[id].check()}
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
     * @return {unresolved}
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
     * @return {string}
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

  time: {
    Chrono: function (tag) {
      if (!tag) {
        tag = 'chrono'
      }

      var __tick
      var __time

      /**
       * return milliseconds from the last checkpoint
       * @function
       * @return {string}
       */
      return {
        check: function () {
          if (!__tick) {
            __tick = new Date()
            return 0
          }
          /**
           * @type {number}
           */
          __time = (new Date()).getTime() - __tick.getTime()
          __tick = new Date()
          return __time
        },
        time: function () {
          __time
        }
      }
    }
  },

  console: {
    /**
     * @param {Object} options
     * @param {number} [options.tick=10] millisec
     * @param {Object} [options.spinner=['.    ', '..   ', '...  ', '.... ', '.....']]
     */
    Wait: function (options) {
      if (!options) {
        options = {}
      }

      var __wait = null
      var __timer = 0
      var __tick = options.tick || 100
      var __spin = options.spinner || ['.    ', '..   ', '...  ', '.... ', '.....']
      var __spinner = 0

      var start = function () {
        if (__wait) {
          return
        }
        __timer = 0
        __spinner = 0
        __wait = setInterval(function () {
          if (!__wait) {
            return
          }
          process.stdout.write(__spin[__spinner % __spin.length] + ' ' + (__timer / 1000).toFixed(2) + ' sec \r')
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
  },

  ajax: {
    _cache: {},
    /**
     * send ajax request using $.ajax
     * @param {Object} args
     * @param {Object} args.options $.ajax options -> @see http://api.jquery.com/jquery.ajax/
     *   default: { type: 'POST', dataType: 'json', cache: false, xhrFields: { withCredentials: true } }}
     * @param {Object} args.data
     * @param {string} args.url
     * @param {boolean} args.cache
     * @param {boolean} args.upload
     * @param {boolean} args.xhr return the xhr object, for call "abort" (especially for upload)
     * .. timeout
     * @param {function()} args.callback
     */
    request: function (args) {
      if (args.cache && tools.ajax._cache[args.url]) {
        args.callback && args.callback(tools.ajax._cache[args.url])
        return
      }

      if (!args.options) {
        args.options = {}
      }
      if (!args.data) {
        args.data = {}
      } else {
        for (var i in args.data) {
          if (args.data[i] instanceof Date) {
            args.data[i] = args.data[i].toISOString()
          } else if (!tools.core.isSet(args.data[i])) {
            delete args.data[i]
          }
        }
      }

      var defaults = {
        type: 'POST',
        dataType: 'json',
        cache: false,
        xhrFields: { withCredentials: true },
        success: function (response, textStatus, XMLHttpRequest) {
          if (tools.ajax.error(response)) {
            args.callback && args.callback(response, textStatus)
          } else {
            args.callback && args.callback(response, textStatus, XMLHttpRequest)

            if (args.cache && !tools.ajax._cache[args.url]) {
              tools.ajax._cache[args.url] = response
            }
          }
        },
        error: function (xhr, textStatus, errorThrown) {
          if (xhr.status !== 0 || (!args.upload && (textStatus === 'abort' || textStatus === 'timeout'))) {
            args.callback(xhr, textStatus, errorThrown)
          }
        }
      }

      var _options = tools.object.clone(args.options)
      if (args.upload) {
        _options = tools.ajax._upload(_options)
      }

      $.ajax($.extend(defaults, _options))

      if (args.xhr) {
        return args.xhr
      }
    },

    _upload: function (options) {
      var _formData = new FormData()
      for (var _var in options.data) {
        var _val = options.data[_var]
        if (_val instanceof Blob || _val instanceof File) {
          _formData.append(_var, _val, _val._filename || _var)
        } else if (_val instanceof Array) {
          for (var i in _val) {
            _formData.append(_var + '[' + i + ']', _val[i])
          }
        } else if (_val instanceof Object) {
          _formData.append(_var, JSON.stringify(_val))
        } else {
          _formData.append(_var, _val)
        }
      }

      options.data = _formData
      options.contentType = false
      options.processData = false

      options.xhr = function () {
        var _xhr = $.ajaxSettings.xhr()
        _xhr.upload && _xhr.upload.addEventListener('progress', options.progress, false)
        return _xhr
      }
      return options
    },

    error: function (response) {
      if (!response) return true

      if (response.error) {
        return true
      }
      return false
    }
  }

}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = tools
}
