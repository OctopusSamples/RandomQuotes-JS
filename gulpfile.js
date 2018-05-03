// including plugins
var gulp = require('gulp')
    , minifyHtml = require("gulp-minify-html");

// task
gulp.task('minify-html', function () {
    gulp.src('./Html/*.html') // path to your files
        .pipe(minifyHtml())
        .pipe(gulp.dest('path/to/destination'));
});