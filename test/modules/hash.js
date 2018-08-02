const tollo = require('tollo')
const instance = require('../../src/hash.js')

module.exports = {
  'hash.sha256': {
    describe: '',
    mode: tollo.mode.SYNC,
    act: instance.sha256,
    cases: [
      {
        input: ['usk6fgbuygbu6'],
        output: 'ee42f619919727584b66fe25248ed4bba8e87dcfb3e62a90143ea17ba48df58e'
      },
      {
        input: ['lorem ipsum %1283770tv8gv 6c6fgw ucthv iy'],
        output: '18d18c26ed98c0e88d9121132be48f42596e899ac50f15f854c9d0a82b9f2cb5'
      }
    ]
  }
}
