
const tollo = require('tollo')

tollo.start = async function () {
  // console.log('start')
}

tollo.end = async function () {
  // console.log('end')
}

tollo.bulk(require('./modules/fs.js'))

tollo.run()
