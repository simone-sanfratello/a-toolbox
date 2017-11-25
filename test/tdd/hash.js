const tap = require('tap')
const log = require('log-segment')
const hash = require('../../src/hash')
const tests = require('../cases/hash')

for (const i in tests) {
    const _cases = tests[i]
    tap.test(i, (test) => {
        test.plan(_cases.length)
        for(const _case of _cases) {
            test.equal(hash[i](_case.input), _case.output)
        }
    })
}
