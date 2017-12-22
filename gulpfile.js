const gulp = require('gulp')
const clean = require('gulp-clean')
const babel = require('gulp-babel')

const _files = [
  'array',
  'fs',
  'hash',
  'object',
  'random',
  'string',
  'sys',
  'task',
  'time']
const _nodejs = ['sys', 'fs']

gulp.task('clean', function () {
  return gulp.src(_files.map(f => `./${f}.js`))
    .pipe(clean({force: true}))
})

gulp.task('default', ['browser'], function () {
  return gulp.src('src/**.js')
    .pipe(gulp.dest('./'))
})

gulp.task('browser', function () {
  return gulp.src(_files
        .filter(f => _nodejs.indexOf(f) === -1)
        .map(f => `./src/${f}.js`))
      .pipe(babel({
          // https://babeljs.io/docs/plugins/preset-env/
        presets: ['es2015'],
        minified: true,
        comments: false
      }))
      .pipe(gulp.dest('./dist'))
})

/*
var _tmp = {};(function(module){

    ... module

})(_tmp);
this['tools.array'] = _tmp.exports;
_tmp = null
*/
