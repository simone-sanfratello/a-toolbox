
var _tasks = new tools.Tasks(function () {
  console.log('well done')
})

var _asyncOperationTimeout = [ 500, 1000, 200, 1500, 100]
var i

for (i in _asyncOperationTimeout) {
  _tasks.todo('task#' + i)
}
for (i in _asyncOperationTimeout) {
  setTimeout(function (i) {
    return function () {
      console.log('done task #', i)
      _tasks.done('task#' + i)
    }
  }(i), _asyncOperationTimeout[i])
}

// >done task # 4
// >done task # 2
// >done task # 0
// >done task # 1
// >done task # 3
// >well done


console.log('random number from 1 to 100:', tools.random.number(1, 100))

// >random number from 1 to 100: 14

console.log('random string of 8 chars, default set:', tools.random.string(8))

// >random string of 8 chars, default set: dcglhcvr

var _hex = '0123456789abcdef'
console.log('random string of 16 chars, custom set (hex)', _hex, ':', tools.random.string(16, _hex))

// >random hash of 64 chars

console.log('random hash of 64 chars', tools.random.hash())

// >random string of 16 chars, custom set (hex) 0123456789abcdef : b4a61c1af5360fd4

console.log('get random element:', tools.array.randomElement(_array))
