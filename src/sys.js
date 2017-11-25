'use strict'

const sys = {
  /**
   * check if running user is root
   * @return {bool} is root or not
   */
  isRoot: function () {
    return process.env.USER === 'root'
  }
}

module.exports = sys
