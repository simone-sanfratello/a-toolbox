'use strict'
const tools = require('../index')

const samples = {
  data: { a: { a1: 1, a2: 2 }, b: 3 }
}

let _flat = tools.object.flat(samples.data)
let _raise = tools.object.raise(_flat)

console.log(_flat, _raise)
