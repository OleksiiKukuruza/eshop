var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('eslint:app', function () {
    return gulp.src(['app/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format());
});

gulp.task('eslint:serve', function () {
    return gulp.src(['server/**/*.js'])
        .pipe(eslint())
        .pipe(eslint.format());
});
