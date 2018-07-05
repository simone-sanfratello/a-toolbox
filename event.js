/**
 * @namespace tools.event
 */
const event = {
  /**
   * simple event emitter
   * @class
   */
  Emitter: function () {
    const __listners = {}
    const __onceListeners = {}

    /**
     * emit and event
     * @param {string} name event name
     * @param {...*} values values to pass to the event listener
     */
    const emit = function (name, ...values) {
      if (__listners[name]) {
        for (const _listener of __listners[name]) {
          _listener.apply(null, values)
        }
        if (__onceListeners[name]) {
          for (const _listener of __onceListeners[name]) {
            _listener.apply(null, values)
          }
          delete __onceListeners[name]
        }
      }
    }

    /**
     * listen to an event
     * @param {string} name event name
     * @param {function} callback
     */
    const on = function (name, callback) {
      if (!__listners[name]) {
        __listners[name] = []
      }
      __listners[name].push(callback)
    }

    /**
     * listen to an event only once
     * @param {string} name event name
     * @param {function} callback
     */
    const once = function (name, callback) {
      if (!__onceListeners[name]) {
        __onceListeners[name] = []
      }
      __onceListeners[name].push(callback)
    }

    /**
     * stop listening to an event
     * @param {string} name event name
     */
    const off = function (name) {
      delete __listners[name]
      delete __onceListeners[name]
    }

    return {
      emit: emit,
      on: on,
      off: off,
      once: once
    }
  }
}

module.exports = event
