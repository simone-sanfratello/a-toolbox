const object = require('./object')

/**
 * @namespace tools.time
 */

const time = {
  /**
   * can use across modules using same tag
   */
  chrono: {
    /**
     * @param {?string} [tag=chrono]
     */
    set: function (tag = 'chrono') {
      if (_chronos[tag]) {
        console.warn('time chrono', tag, 'already set; use reset instead or start a new chrono')
        return
      }
      _chronos[tag] = Date.now()
    },
    /**
     * @param {?string} [tag=chrono]
     */
    reset: function (tag = 'chrono') {
      _chronos[tag] = Date.now()
    },
    /**
     * @param {?string} [tag=chrono]
     */
    clear: function (tag = 'chrono') {
      delete _chronos[tag]
    },
    /**
     * @param {?string} [tag=chrono]
     * @return {number} ms
     */
    get: function (tag = 'chrono') {
      const _now = Date.now()
      return _chronos[tag] ? _now - _chronos[tag] : 0
    }
  },

  /**
   * clear counters
   * if you care about memory leaks
   */
  gc: function () {
    object.empty(_chronos)
  }
}

const _chronos = {}

module.exports = time
