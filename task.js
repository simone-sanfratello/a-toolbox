const time = require('./time')
const array = require('./array')

/**
 * @namespace tools.task
 */
const task = {
  /**
   * simple parallel tasks manager
   * @param {Object} options
   * @param {function} options.done callback when all tasks are completed
   */
  Worker: function (options = {}) {
    const __tasks = []

    /**
     * add task
     * @method Worker.todo
     * @param {!string} id
     * @test.case 'task#1'
     */
    this.todo = function (id) {
      if (options.chrono) {
        time.chrono.set(id)
      }
      __tasks.push(id)
    }

    /**
     * declare task it's done
     * @method Worker.done
     * @param {!string} id
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
