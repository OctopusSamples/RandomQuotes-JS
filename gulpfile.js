
var gulp = require('gulp');
var octo = require('@octopusdeploy/gulp-octo');

gulp.task('publish', function() {
    return gulp.src(['**/*'])
        .pipe(octo.pack('zip'))
        .pipe(octo.push({host: 'http://localhost:8065', apiKey: 'API-XXXX', replace: true}));
});