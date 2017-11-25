string: {
    /**
     * replace placeholders inside graph brackets {} with obj dictionary
     * ~ES6 template string
     * @param {string} str
     * @param {Object} obj
     * @param {bool} [remove=false] remove missing placeholders from obj
     * @return {string}
     */
    template: function (str, obj, remove) {
      if (!str) {
        return ''
      }
      return str.replace(/\{([\w.]+)\}/g, function (str, key) {
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
    },
    prependMissing: function (prefix, str) {
      if (str.indexOf(prefix) === 0) {
        return str
      }
      return prefix + str
    }
  },
