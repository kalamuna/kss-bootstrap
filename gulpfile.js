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
  del('out').then(function () {
    cb();
  });
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
    .pipe(exec('kss --config=.kss-node.json', options))
    .pipe(exec.reporter(reportOptions));
});

/**
 * Sets up Bootstrap CSS for KSS.
 */
gulp.task('kss-bootstrap-css', ['kss'], function() {
  var sources = [
    'node_modules/bootstrap/dist/css/bootstrap.css',
    'node_modules/bootstrap/dist/css/bootstrap-theme.css'
  ];
  return gulp.src(sources)
    .pipe(concat('main.css'))
    .pipe(gulp.dest('out/public/'));
});

/**
 * Sets up Bootstrap JS for KSS.
 */
gulp.task('kss-bootstrap-js', ['kss'], function() {
  var sources = [
    'node_modules/jquery/dist/jquery.js',
    'node_modules/bootstrap/dist/js/bootstrap.js'
  ];
  return gulp.src(sources)
    .pipe(concat('main.js'))
    .pipe(gulp.dest('out/public/'));
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
 * Set up the assets.
 */
gulp.task('kss-bootstrap', ['kss-bootstrap-css', 'kss-bootstrap-js']);

/**
 * Default tasks
 */
gulp.task('start', ['clean', 'kss-bootstrap', 'serve', 'watch']);
gulp.task('test', ['kss-bootstrap']);
gulp.task('default', ['test']);
