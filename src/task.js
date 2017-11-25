

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
