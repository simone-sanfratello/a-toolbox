const time = require('./time')
const array = require('./array')

/**
 * @namespace tools.task
 */
const task = {
  /**
   * simple parallel tasks manager
   * @param {Object} options
   * @param {bool} options.chrono measure time, default false
   * @param {function} options.done callback when all tasks are completed
   * @example
   * const tasks = new tools.task.Worker({done: () => { console.log('well done') }})
   * const _asyncOperationTimeout = [500, 1000, 200, 1500, 100];
   * for (const i in _asyncOperationTimeout) {
   *   _tasks.todo('task#' + i);
   * }
   * for (const i in _asyncOperationTimeout) {
   *   setTimeout(function (i) {
   *     return function () {
   *       console.log('done task #', i);
   *       _tasks.done('task#' + i);
   *     };
   *   }(i), _asyncOperationTimeout[i]);
   * }
   */
  Worker: function (options = {}) {
    const __tasks = []

    /**
     * add task
     * @method Worker.todo
     * @param {!string} id
     * @test.mode EVENT
     * @test.case 'task#1'
     */
    this.todo = function (id) {
      if (options.chrono) {
        time.chrono.set(id)
      }
      __tasks.push(id)
    }

    /**
     * declare task done
     * @method Worker.done
     * @param {!string} id
     * @return {Object|null} if options.chrono is enabled, return elapsed time as {chrono: time ms}
     * @test.case 'task#1'
     */
    this.done = function (id) {
      array.remove(__tasks, id)
      if (__tasks.length < 1) {
        if (options.done) {
          options.done()
        }
      }
      if (options.chrono) {
        const _time = time.chrono.get(id)
        time.chrono.clear(id)
        return {chrono: _time}
      }
    }
  }
}

module.exports = task
