/**
 * @namespace tools.object
 */
const object = {
  /**
   * merge b into a
   * @method tools.object.merge
   * @param {Object} a
   * @param {Object} b
   * @test.case {a: 1, b: 'ciao'}, {a: 4, c: { d: 8, e: 9}} > &{ a: 4, b: 'ciao', c: { d: 8, e: 9 } }
   */
  merge: function (a, b) {
    if (!a) {
      a = b || {}
      return
    }
    if (!b) {
      return a
    }

    for (var i in b) {
      if (typeof b[i] === 'object') {
        if (b[i] instanceof Array) {
          a[i] = object.clone(b[i])
          continue
        }
        if (!a[i] || typeof a[i] !== 'object') {
          a[i] = {}
        }
        object.merge(a[i], b[i])
      } else {
        a[i] = b[i]
      }
    }
  },

  /**
   * Clone an array or an object in input
   * @method tools.object.clone
   * @param {Object|Array} obj The array or the object to clone
   * @return {Object|Array}
   * @test.case {a: 1, b: 'ciao'} > {a: 1, b: 'ciao'}
   * @test.case {a: 4, c: { d: 8, e: 9}} > {a: 4, c: { d: 8, e: 9}}
   * @test.case {a: 4, b: 'ciao', c: { d: 8, e: 9 }} > {a: 4, b: 'ciao', c: { d: 8, e: 9 }}
   * @test.case {a: [4, function() { console.log('hi') }, {a1: 0, a2: null}], b: 'ciao', c: { d: 8, e: 9 }} > {a: [4, function() { console.log('hi') }, {a1: 0, a2: null}], b: 'ciao', c: { d: 8, e: 9 }}
   */
  clone: function (obj) {
    if (obj === null || obj === undefined) {
      return obj
    }
    var _type = (obj instanceof Array) ? 'array' : typeof obj
    if (_type === 'object' || _type === 'array') {
      if (obj instanceof Date) {
        return new Date(obj.getTime())
      } else if (typeof window !== 'undefined') {
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
          _clone[key] = object.clone(obj[key])
        }
        return _clone
      }
    }
    return obj
  },

  /**
   * @see http://google.github.io/closure-library/api/source/closure/goog/object/object.js.src.html#l225
   * @method tools.object.getKeys
   * @param {Object} obj
   * @return {Array<string>}
   * @test.case {a: () => { }, b: 1, c: 'ciao'} > ['a','b','c']
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
   * it use ``Object.getOwnPropertyNames`` to inherits child from parent, without prototype
   * @method tools.object.inherits
   * @todo check if both are objects
   * @param {Object} destination
   * @param {Object} source
   * @test.case {}, {f0: () => { }, p1: 1, p2: 'ciao'} > &{f0: () => { }, p1: 1, p2: 'ciao'}
   */
  inherits: function (destination, source) {
    Object.getOwnPropertyNames(source).forEach((property) => {
      destination[property] = source[property]
    })
  },

  /**
   * empty object - need to keep references
   * @method tools.object.empty
   * @param {Object} obj
   * @test.case {a:0,b:1,c:2,d:[],e:{f:-1}} > &{}
   * @test.case {} > &{}
   */
  empty: function (obj) {
    for (const i in obj) {
      delete obj[i]
    }
  },

  /**
   * restore flat object
   * @method tools.object.raise
   * @param {Object} flat
   * @return {Object}
   * @test.case { 'a.a1': 1, 'a.a2': 2, 'b': 3 } > { a: { a1: 1, a2: 2 }, b: 3 }
   */
  raise: function (flat) {
    const _raise = {}

    for (const path in flat) {
      const _keys = path.split('.')
      let _cursor = _raise
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

    return _raise
  },

  /**
   * flat keys in object
   * @method tools.object.flat
   * @param {Object} obj
   * @return {Object}
   * @test.case { a: { a1: 1, a2: 2 }, b: 3 } > { 'a.a1': 1, 'a.a2': 2, 'b': 3 }
   */
  flat: function (obj) {
    const _flat = {}
    object._rflat(obj, '', _flat)
    return _flat
  },

  _rflat: function (obj, base, flat) {
    for (const key in obj) {
      try {
        // eslint-disable-next-line eqeqeq
        if (obj[key].constructor == Object) {
          object._rflat(obj[key], base + key + '.', flat)
        } else {
          flat[base + key] = obj[key]
        }
      } catch (e) {
        flat[base + key] = obj[key]
      }
    }
  },

  /**
   * walk object to path
   * @method tools.object.walk
   * @param {Object} obj
   * @param {string} path
   * @return {Object}
   * @test.case { a: { a1: 1, a2: 2 }, b: 3 }, 'a.a1' > 1
   * @test.case { a: { a1: { a2: 2 } }, b: 3 }, 'a.a1.a2' > 2
   */
  walk: function (obj, path) {
    const _steps = path.split('.')
    let _cursor = obj
    for (const _step of _steps) {
      _cursor = _cursor[_step]
    }
    return _cursor
  },

  /**
   * get value in object using a flat key
   * @method tools.object.getByFlatKey
   * @todo check params
   * @param {Object} obj
   * @param {string} fkey
   * @return {Object}
   * @test.case { a: { b: {c: 1} } }, 'a.b.c' > 1
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
   * @method tools.object.setByFlatKey
   * @todo check params
   * @param {Object} obj
   * @param {string} fkey
   * @param {*} val
   * @test.case
   * {}, 'a.b.c', 1 > &{ a: { b: {c: 1} } }
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
}

module.exports = object
