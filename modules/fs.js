'use strict'

const nodeFs = require('fs')

const fs = {}

/**
 * replace deprecated fs.exists
 * https://nodejs.org/api/fs.html#fs_fs_exists_path_callback
 */
fs.existsAsync = function (path) {
  return new Promise(function (resolve) {
    nodeFs.stat(path, function (err, stats) {
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

fs.unlink = function (path, ignore) {
  return new Promise(function (resolve, reject) {
    nodeFs.unlink(path, function (err) {
      if (err && !ignore) {
        reject()
        return
      }
      resolve()
    })
  })
}

module.exports = fs
