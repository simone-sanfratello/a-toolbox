/**
 * @namespace tools.event
 */
const event = {
  /**
   * @class
   */
  Emitter: function () {
    const __listners = {}
    const __onceListeners = {}

    /**
     * @param {string} name event name
     * @param {...*} args
     */
    const emit = function (name, ...args) {
      if (__listners[name]) {
        for (const _listener of __listners[name]) {
          _listener.apply(null, args)
        }
        if (__onceListeners[name]) {
          for (const _listener of __onceListeners[name]) {
            _listener.apply(null, args)
          }
          delete __onceListeners[name]
        }
      }
    }

    /**
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
     * @param {string} name event name
     * @param {string} id listener id
     */
    const off = function (name, id) {
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
