var gulp = require('gulp');

// Delete existing out directory
gulp.task('clear', function() {
	require('del')("out");
});

// Build the styleguide with KSS.
gulp.task('kss', function() {
	var exec = require('child_process').execFile;
	var kssnode = "./node_modules/.bin/kss-node";
	var args = ["styleguide", "out", "--template=bootstrap"];
	exec(kssnode, args, function(error, stdout, stderr) {
		console.log(error);
		console.log(stdout);
		console.log(stderr);
	});
});

// HTML Hint
gulp.task('htmlhint', function () {
	var htmlhint = require("gulp-htmlhint");
	gulp.src(["./out/*.html"])
		.pipe(htmlhint())
		.pipe(htmlhint.reporter())
		.pipe(htmlhint.failReporter())
});

// Deploy to GitHub Pages
gulp.task('deploy', function () {
	var deploy = require("gulp-gh-pages");
    gulp.src("./out/**/*")
        .pipe(deploy());
});

// Test
gulp.task('test', ['kss', 'htmlhint']);

// Default
gulp.task('default', ['test']);
