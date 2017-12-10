const nativeFs = require('fs')

const fs = {}

/**
 * replace deprecated fs.exists
 * @param {string} path file path
 * @return {Promise<boolean>} true if file exists - and it's a file
 * https://nodejs.org/api/fs.html#fs_fs_exists_path_callback
 * @test.arrange async function(input, sandbox) {
 *   const fs = require('a-toolbox/fs')
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
 * @param {string} path file path
 * @return {Promise<>}
 * @test.case '/none' ! Error('NOENT')
 * @test.case '/tmp/touch-me'
 */
fs.touch = function (path) {
  return new Promise(function (resolve, reject) {
    fs.open(path, 'a', (err, fd) => {
      if (err) {
        reject(err)
        return
      }
      fs.close(fd, (err) => {
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
 * @param {string} path
 * @param {boolean=true} safe
 * @return {Promise<>}
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
