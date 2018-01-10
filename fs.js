const nativeFs = require('fs')

/**
 * @namespace tools.fs
 */
const fs = {}

/**
 * replace deprecated fs.exists
 * @method tools.fs.exists
 * @param {string} path (filePath) file path
 * @return {Promise.<boolean>} true if file exists - and it's a file
 * https://nodejs.org/api/fs.html#fs_fs_exists_path_callback
 * @test.arrange async function(input, sandbox) {
 *   const fs = require('a-toolbox').fs
 *   return fs.touch('/tmp/file')
 * }
 * @test.case '/tmp/file' > true
 * @test.case '/tmp/none' > false
 * @test.case '/tmp' > false
 */
fs.exists = function (path) {
  return new Promise(function (resolve) {
    nativeFs.stat(path, function (err, stats) {
      if (err || !stats) {
        resolve(false)
        return
      } else if (stats.isFile()) {
        resolve(true)
        return
      }
      resolve(false)
    })
  })
}

/**
 * create an empty file if not exists
 * @method tools.fs.touch
 * @param {string} path (filePath) file path
 * @return {Promise.<void>}
 * @test.case '/tmp/touch-me'
 * @test.case '/none' ! new Error('EACCES')
 * @test.assert async (result, input, output, sandbox) => {
 *   if(!await tester.assert.equal(result, input, output, sandbox)) {
 *     return false
 *   }
 *   const fs = require('a-toolbox').fs
 *   return fs.exists(input[0])
 * }
 */
fs.touch = function (path) {
  return new Promise(function (resolve, reject) {
    nativeFs.open(path, 'a', (err, fd) => {
      if (err) {
        reject(err)
        return
      }
      nativeFs.close(fd, (err) => {
        if (err) {
          reject(err)
        }
        resolve()
      })
    })
  })
}

/**
 * delete file, optionally in safe mode
 * @method tools.fs.unlink
 * @param {string} path (filePath) file path
 * @param {boolean} [safe=true] if safe do not throw exception
 * @return {Promise.<void>}
 * @test.arrange async function(input, sandbox) {
 *   const fs = require('a-toolbox').fs
 *   return fs.touch('/tmp/file')
 * }
 * @test.case '/tmp/file'
 * @test.case '/tmp/none', false ! new Error('EACCES')
 * @test.case '/tmp/none', true
 */
fs.unlink = function (path, safe) {
  return new Promise(function (resolve, reject) {
    nativeFs.unlink(path, function (err) {
      if (err && !safe) {
        reject(err)
        return
      }
      resolve()
    })
  })
}

module.exports = fs
