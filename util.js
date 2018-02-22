const util = {
  /**
   * check if ``val`` is setted, means it's not ``null`` or ``undefined``
   * @param {*} val
   * @return {bool}
   */
  isSet: function (val) {
    return (typeof val !== 'undefined' && val !== null)
  },

  /**
   * check if you are on browser or not
   * @return {bool}
   */
  onBrowser: function () {
    // eslint-disable-next-line no-undef
    return (typeof window === 'object' && window instanceof Window)
  }
}

module.exports = util
