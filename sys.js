/**
 * @namespace tools.sys
 */
const sys = {
  /**
   * check if running user is root
   * @method tools.sys.isRoot
   * @return {bool} is root or not
   */
  isRoot: function () {
    return process.env.USER === 'root'
  }
}

module.exports = sys
