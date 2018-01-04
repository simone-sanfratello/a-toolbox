const object = require('./object')

/**
 * @namespace tools.time
 */

const time = {
  /**
   * @namespace tools.time.chrono
   */
  chrono: {
    /**
     * @method tools.time.chrono.set
     * @param {String} [tag=chrono]
     */
    set: function (tag = 'chrono') {
      if (_chronos[tag]) {
        console.warn('time chrono', tag, 'already set; use reset instead or start a new chrono')
        return
      }
      _chronos[tag] = Date.now()
    },
    /**
     * @method tools.time.chrono.reset
     * @param {String} [tag=chrono]
     */
    reset: function (tag = 'chrono') {
      _chronos[tag] = Date.now()
    },
    /**
     * @method tools.time.chrono.clear
     * @param {String} [tag=chrono]
     */
    clear: function (tag = 'chrono') {
      delete _chronos[tag]
    },
    /**
     * @method tools.time.chrono.get
     * @param {String} [tag=chrono]
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
   * @method tools.time.chrono.gc
   */
  gc: function () {
    object.empty(_chronos)
  }
}

const _chronos = {}

module.exports = time
