object: {
    /**
     *  merge obj2 into obj1
     *  @param {Object} obj1
     *  @param {Object} obj2
     */
    merge: function (obj1, obj2) {
      if (!obj1) {
        obj1 = obj2 || {}
        return
      }
      if (!obj2) {
        return obj1
      }

      for (var i in obj2) {
        if (typeof obj2[i] === 'object') {
          if (obj2[i] instanceof Array) {
            obj1[i] = tools.object.clone(obj2[i])
            continue
          }
          if (!obj1[i] || typeof obj1[i] !== 'object') {
            obj1[i] = {}
          }
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
      var _type = (obj instanceof Array) ? 'array' : typeof obj
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
     * @todo check if both are objects
     */
    inherits: function (destination, source) {
      //      util.inherits(destination, source)
      Object.getOwnPropertyNames(source).forEach((property) => {
        destination[property] = source[property]
      })
    },
    /**
     * @todo properly
     */
    apply: function (source, destination, schema) {
      let _properties
      if (schema) {
        switch (schema.template) {
          // @todo create template dir
          case 'EventEmitter':
            _properties = ['on', 'once', 'removeAllListeners', 'removeListener']
        }
      }
      // else if template is array ..
      _properties.forEach((property) => {
        destination[property] = function () {
          source[property].apply(source, arguments)
        }
      })
    },
    /**
     * flat keys in object
     * @param {object} obj
     * @returns {object}
     * @example { a: { a1: 1, a2: 2 }, b: 3 } >> { 'a.a1': 1, 'a.a2': 2, 'b': 3 }
     */
    flat: function (obj) {
      const _flat = {}

      const _f = function (obj, base) {
        for (const key in obj) {
          try {
            if (obj[key].constructor == Object) {
              _f(obj[key], base + key + '.')
            } else {
              _flat[base + key] = obj[key]
            }
          } catch (e) {
            _flat[base + key] = obj[key]
          }
        }
      }
      _f(obj, '')

      return _flat
    },
    /**
     * restore flat object
     * @param {object} obj
     * @returns {object}
     * @example { 'a.a1': 1, 'a.a2': 2, 'b': 3 } >> { a: { a1: 1, a2: 2 }, b: 3 }
     */
    raise: function (obj) {
      const _raise = {}

      const _f = function (flat, raise) {
        for (const path in flat) {
          const _keys = path.split('.')
          let _cursor = raise
          _keys.forEach((key, i) => {
            if (i < _keys.length - 1) {
              if (!_cursor[key]) {
                _cursor[key] = {}
              }
              _cursor = _cursor[key]
            } else {
              _cursor[key] = flat[path]
            }
          })
        }
      }
      _f(obj, _raise)

      return _raise
    },
    /**
     * get value in object using a flat key
     * @todo check params
     * @param {object} obj
     * @param {string} fkey
     * @returns {object}
     * @example tools.object.getByFlatKey({ a: { b: {c: 1} } }, 'a.b.c') >> 1
     */
    getByFlatKey: function (obj, fkey) {
      let _path = fkey.split('.')
      let _walk = obj
      for (let i = 0; i < _path.length; i++) {
        if (!_walk[_path[i]]) {
          return undefined
        }
        _walk = _walk[_path[i]]
      }
      return _walk
    },
    /**
     * set value in object using a flat key
     * @todo check params
     * @param {object} obj
     * @param {string} fkey
     * @param {*} val
     * @example tools.object.setByFlatKey({}, 'a.b.c', 1) >> { a: { b: {c: 1} } }
     */
    setByFlatKey: function (obj, fkey, val) {
      let _path = fkey.split('.')
      let _walk = obj
      for (let i = 0; i < _path.length; i++) {
        if (!_walk[_path[i]]) {
          // if it's the last step, add key as undefined
          if (i === _path.length - 1) {
            _walk[_path[i]] = undefined
            return
          }
          _walk[_path[i]] = {}
        }
        _walk = _walk[_path[i]]
      }
      _walk = val
    }
  },