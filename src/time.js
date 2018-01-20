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
     * start a timer identified by tag
     * @method tools.time.chrono.set
     * @param {string} [tag=chrono] identifier
     * @test.case 'query'
     */
    set: function (tag = 'chrono') {
      if (_chronos[tag]) {
        console.warn('time chrono', tag, 'already set; use reset instead or start a new chrono')
        return
      }
      _chronos[tag] = Date.now()
    },
    /**
     * reset the timer identified by tag
     * @method tools.time.chrono.reset
     * @param {string} [tag=chrono] identifier
     * @test.case 'query'
     */
    reset: function (tag = 'chrono') {
      _chronos[tag] = Date.now()
    },
    /**
     * discard the timer identified by tag
     * @method tools.time.chrono.clear
     * @param {string} [tag=chrono] identifier
     * @test.case 'query'
     */
    clear: function (tag = 'chrono') {
      delete _chronos[tag]
    },
    /**
     * get the timer in ms from start (or reset) identified by tag
     * @method tools.time.chrono.get
     * @param {string} [tag=chrono] identifier
     * @return {number} ms
     * @test.case 'query' > (11)
     */
    get: function (tag = 'chrono') {
      const _now = Date.now()
      return _chronos[tag] ? _now - _chronos[tag] : 0
    }
  },

  /**
   * clear timers (if you care about memory)
   * @method tools.time.chrono.gc
   */
  gc: function () {
    object.empty(_chronos)
  }
}

const _chronos = {}

module.exports = time
