const crypto = require('crypto')

/**
 * @namespace tools.hash
 */
const hash = {
  /**
   * Generate hash using sha256 in hex format
   * @method tools.hash.sha256
   * @param {string} data any string
   * @return {string} sha256 in hex format
   *
   * @example
   * hash.sha256('usk6fgbuygbu6')
   * return 'ee42f619919727584b66fe25248ed4bba8e87dcfb3e62a90143ea17ba48df58e'
   * @example
   * hash.sha256('usk6fgbuygbu6 asdf')
   * return 'aea2f619919727584b66fe25248ed4bba8e87dcfb3e62a90143ea17ba48df5aa'
   */
  sha256: function (data) {
    return crypto.createHash('sha256')
      .update(data)
      .digest('hex')
  }
}

module.exports = hash
