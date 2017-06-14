'use strict'

const sys = {
  isRoot: function () {
    return process.env.USER === 'root'
  }
}

module.exports = sys
