/**
 * note: not available on browser
 * @namespace tools.sys
 */
const sys = {
  /**
   * check if running user is root
   * @method tools.sys.isRoot
   * @return {bool} is root or not
   */
  isRoot: function () {
    return process.env.USER === 'root' ||
    (process.getuid && process.getuid() === 0)
  }
}

module.exports = sys
