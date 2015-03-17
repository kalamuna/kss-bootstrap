/**
 * Dependencies
 */
var gulp = require('gulp');
var serve = require('gulp-serve');
var fs = require('fs');

/**
 * Clean
 */
gulp.task('clean', function() {
	require('del')('out');
});

/**
 * KSS
 */
gulp.task('kss', function() {
	var exec = require('child_process').execFile;
	var args = ['--config=.kss-node.json'];
	exec('kss-node', args, function(error, stdout, stderr) {
		// Copy Bootstrap into the styleguide folder.
		fs.createReadStream('node_modules/bootstrap/dist/css/bootstrap.css')
		  .pipe(fs.createWriteStream('out/public/bootstrap.css'));

		// Output any errors.
		console.log(stdout);
    console.log(error);
		console.log(stderr);
	});
});

/**
 * HTML Hint
 */
gulp.task('htmlhint', function () {
	var htmlhint = require('gulp-htmlhint');
	gulp.src(['./out/*.html'])
		.pipe(htmlhint())
		.pipe(htmlhint.reporter())
		.pipe(htmlhint.failReporter())
});

/**
 * Deploy
 */
gulp.task('deploy', function () {
	var deploy = require('gulp-gh-pages');
    gulp.src('./out/**/*')
      .pipe(deploy());
});

/**
 * Serve
 */
gulp.task('serve', serve({
	root: ['out'],
	port: 8000
}));

/**
 * Watch
 */
gulp.task('watch', function() {
	gulp.watch(['styleguide/**', 'bootstrap/**'], ['kss']);
});

/**
 * Default tasks
 */
gulp.task('start', ['clean', 'kss', 'serve', 'watch']);
gulp.task('test', ['kss', 'htmlhint']);
gulp.task('default', ['test']);
