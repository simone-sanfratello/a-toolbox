const nativeFs = require('fs')

/**
 * note: not available on browser
 * @namespace tools.fs
 */
const fs = {}

/**
 * replace deprecated fs.exists
 * @method tools.fs.exists
 * @param {string} path (filePath) file path
 * @return {Promise.<boolean>} true if file/folder exists
 * https://nodejs.org/api/fs.html#fs_fs_exists_path_callback
 * @test.arrange async function(input, sandbox) {
 *   const fs = require('../../src/fs')
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
      } else if (stats.isFile() || stats.isDirectory()) {
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
 * @param {number} [mode=0o666]
 * @return {Promise.<void>}
 * @test.case '/tmp/touch-me'
 * @test.case '/none' ! new tollo.Error({code: 'EACCES'})
 * @test.assert async (result, input, output, sandbox) => {
 *   if(result) {
 *     return result.code === output.code
 *   }
 *   const fs = require('../../src/fs')
 *   return fs.exists(input[0])
 * }
 */
fs.touch = function (path, mode = 0o666) {
  return new Promise(function (resolve, reject) {
    nativeFs.open(path, 'a', mode, (err, fd) => {
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
 *   const fs = require('../../src/fs')
 *   return fs.touch('/tmp/file')
 * }
 * @test.case '/tmp/file'
 * @test.case '/tmp/none', false ! new tollo.Error({code: 'ENOENT'})
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
