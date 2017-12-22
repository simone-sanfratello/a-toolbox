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
