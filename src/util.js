const util = {
/**
 * check if v is setted, means it's not null or undefined
 * @param {*} v
 */
  isSet: function (v) {
    return (typeof v !== 'undefined' && v !== null)
  },

  onBrowser: function () {
    return (typeof window === 'object' && window instanceof Window)
  }
}

module.exports = util
