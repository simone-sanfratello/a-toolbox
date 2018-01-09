const time = require('./time')
const array = require('./array')

/**
 * @namespace tools.task
 */

/**
 * simple async parallel task manager
 * @class
 * @param {Object} options
 * @param {function} options.done callback when all tasks are completed
 */
const Tasks = function (options = {}) {
  const __tasks = []

  /**
   * add task
   * @param {!String} id
   */
  this.todo = function (id) {
    if (options.chrono) {
      time.chrono.set(id)
    }
    __tasks.push(id)
  }

  /**
   * declare task it's done
   * @param {!String} id
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

module.exports = Tasks
