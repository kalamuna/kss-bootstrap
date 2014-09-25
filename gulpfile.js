var gulp = require('gulp');

// Deploy to GitHub Pages

gulp.task('deploy', function () {
	var deploy = require("gulp-gh-pages");
    gulp.src("./out/**/*")
        .pipe(deploy());
});
