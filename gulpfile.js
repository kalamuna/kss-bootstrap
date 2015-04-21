/**
 * Dependencies
 */
var gulp = require('gulp');
var serve = require('gulp-serve');
var fs = require('fs');
var del = require('del');
var exec = require('gulp-exec');
var concat = require('gulp-concat');

/**
 * Clean
 */
gulp.task('clean', function(cb) {
  del('out', cb);
});

/**
 * KSS
 */
gulp.task('kss', ['clean'], function(cb) {
  var options = {
    continueOnError: false,
    pipeStdout: true
  };
  var reportOptions = {
    err: true,
    stderr: true,
    stdout: true
  };
  return gulp.src('styleguide')
    .pipe(exec('kss-node --config=.kss-node.json', options))
    .pipe(exec.reporter(reportOptions));
});

/**
 * Sets up Bootstrap for KSS.
 */
gulp.task('kss-bootstrap', ['kss'], function() {
  var sources = [
    'node_modules/bootstrap/dist/css/bootstrap.css',
    'node_modules/bootstrap/dist/css/bootstrap-theme.css'
  ];
  return gulp.src(sources)
    .pipe(concat('bootstrap.css'))
    .pipe(gulp.dest('out/public/'));
});

/**
 * HTML Hint
 */
gulp.task('htmlhint', ['kss-bootstrap'], function () {
  var htmlhint = require('gulp-htmlhint');
  return gulp.src(['./out/*.html'])
    .pipe(htmlhint())
    .pipe(htmlhint.reporter())
    .pipe(htmlhint.failReporter())
});

/**
 * Deploy
 */
gulp.task('deploy', ['kss-bootstrap'], function () {
  var deploy = require('gulp-gh-pages');
  return gulp.src('./out/**/*')
    .pipe(deploy());
});

/**
 * Serve
 */
gulp.task('serve', ['kss-bootstrap'], serve({
  root: ['out'],
  port: 8000
}));

/**
 * Watch
 */
gulp.task('watch', ['kss-bootstrap'], function() {
  gulp.watch(['styleguide/**', 'bootstrap/**'], ['kss-bootstrap']);
});

/**
 * Default tasks
 */
gulp.task('start', ['clean', 'kss-bootstrap', 'serve', 'watch']);
gulp.task('test', ['kss-bootstrap', 'htmlhint']);
gulp.task('default', ['test']);
