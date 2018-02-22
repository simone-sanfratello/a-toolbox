
const tester = require('tollo')

tester.start = async function () {
  // console.log('start')
}

tester.end = async function () {
  // console.log('end')
}

tester.bulk(require('./modules/string.js'))
tester.bulk(require('./modules/random.js'))
tester.bulk(require('./modules/sys.js'))
tester.bulk(require('./modules/task.js'))
tester.bulk(require('./modules/time.js'))

tester.run()
