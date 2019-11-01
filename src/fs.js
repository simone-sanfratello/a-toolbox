const nativeFs = require('fs')

/**
 * note: not available on browser
 * @namespace tools.fs
 */
const fs = {}

/**
 * replace deprecated fs.exists
 * @method tools.fs.exists
 * @param {string} path path
 * @return {Promise.<boolean>} true if file/folder exists
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
 * @param {boolean} [safe=false] if safe do not throw exception
 * @return {Promise.<void>}
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

/**
 * check if `path` exists and is a file
 * @param {string} path path
 * @return {Promise.<boolean>} true if file exists and it's a file
 */
fs.isFile = function (path) {
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
 * check if `path` exists and is a directory
 * @param {string} path path
 * @return {Promise.<boolean>} true if file exists and it's a directory
 */
fs.isDirectory = function (path) {
  return new Promise(function (resolve) {
    nativeFs.stat(path, function (err, stats) {
      if (err || !stats) {
        resolve(false)
        return
      } else if (stats.isDirectory()) {
        resolve(true)
        return
      }
      resolve(false)
    })
  })
}

module.exports = fs
