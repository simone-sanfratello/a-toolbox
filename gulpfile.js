const gulp = require('gulp')
const clean = require('gulp-clean')
const browserify = require('browserify')
const fs = require('fs-extra')
const buffer = require('gulp-buffer')
const source = require('vinyl-source-stream')
const sourcemaps = require('gulp-sourcemaps')

const _files = [
  'array',
  'fs',
  'hash',
  'object',
  'random',
  'string',
  'sys',
  'task',
  'time'
]
const _nobrowser = ['sys', 'fs']

gulp.task('clean', function () {
  return gulp.src(_files.map(f => `./${f}.js`).concat(['./index.js', './dist/*']))
    .pipe(clean({force: true}))
})

gulp.task('browser', function () {
  let _index = 'window.tools={\n' +
    _files
    .filter(f => _nobrowser.indexOf(f) === -1)
    .map(f => `${f}: require('./${f}')`)
    .join(',\n') + '\n}'
  fs.ensureDirSync('./dist')
  fs.writeFileSync('./src/_index.js', _index)

  const b = browserify({
    entries: './src/_index.js',
    debug: true
  })
  .transform('babelify', {
    presets: ['es2015', 'env'],
    minified: true,
    comments: false
  })

  return b.bundle()
    .pipe(source('atoolbox.min.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/'))
})

gulp.task('post-build', ['browser'], function () {
  return gulp.src(['./src/_index.js', './_index.js'])
    .pipe(clean({force: true}))
})

gulp.task('default', ['browser', 'post-build'], function () {
  let _index = 'module.exports = {' +
    _files.map(f => `${f}: require('./${f}')`).join(',\n') +
    '}'
  fs.writeFileSync('./index.js', _index)
  return gulp.src('src/**.js')
    .pipe(gulp.dest('./'))
})

/* ?todo
modular with browserify
const browserify = require('browserify')
const tap = require('gulp-tap')
const buffer = require('gulp-buffer')

nb todo https://github.com/browserify/browserify-handbook#partitioning

gulp src ...
.pipe(tap((file) => {
  file.contents = browserify(file.contents, {debug: true}).bundle()
}))
.pipe(buffer())
*/

/*

manual modular
nb require does not work

const gutil = require('gulp-util')
const tools = {
  string: require('./src/string')
}

const browser = function (namespace) {
  return through.obj(function (item, encode, next) {
    let _module = tools.string.trim(item.relative, ['.js'])
    let _content = 'const _tmp={};(function(module){\n' +
      item.contents.toString() +
      '\n})(_tmp);this["' + namespace + '.' + _module + '"]=_tmp.exports;_tmp=null;'
    item.contents = Buffer.from(_content)
    next(null, item)
    // this.emit('error', new gutil.PluginError('browser', err))
  })
}

gulp src ...
.pipe(browser('tools'))
*/
