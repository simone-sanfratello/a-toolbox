
const tester = require('tollo')

tester.start = async function () {
  // console.log('start')
}

tester.end = async function () {
  // console.log('end')
}

tester.bulk(require('./modules/object.js'))

tester.run()
