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
          return __time
        }
      }
    }
  },
