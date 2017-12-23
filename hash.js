//const crypto = require('crypto')

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
   * @test
   * 'usk6fgbuygbu6' > 'ee42f619919727584b66fe25248ed4bba8e87dcfb3e62a90143ea17ba48df58e'
   * @test
   * 'lorem ipsum %1283770tv8gv 6c6fgw ucthv iy'
   * > '18d18c26ed98c0e88d9121132be48f42596e899ac50f15f854c9d0a82b9f2cb5'
   */
  sha256: function (data) {
    return crypto.createHash('sha256')
      .update(data)
      .digest('hex')
  }
}

module.exports = hash
