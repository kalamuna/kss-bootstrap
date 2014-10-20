var gulp = require('gulp');

// Deploy to GitHub Pages
gulp.task('deploy', function () {
	var deploy = require("gulp-gh-pages");
    gulp.src("./out/**/*")
        .pipe(deploy());
});

// HTML Hint
gulp.task('htmlhint', function () {
	var htmlhint = require("gulp-htmlhint");
	gulp.src(["./out/*.html"])
		.pipe(htmlhint())
		.pipe(htmlhint.reporter())
		.pipe(htmlhint.failReporter())
});

// Test
gulp.task('test', ['htmlhint']);

// Default
gulp.task('default', ['test']);
