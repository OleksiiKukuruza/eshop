var gulp = require('gulp');
var del = require('del');
var less = require('gulp-less');
var concat = require('gulp-concat');
var mainBowerFiles = require('main-bower-files');

gulp.task('build:vendors', ['build:vendors:js', 'build:vendors:css']);

gulp.task('clean:vendors:js', function () {
    del(['build/js/vendors.js'], {force: true});
});

gulp.task('build:vendors:js', ['clean:vendors:js'], function () {
    return gulp.src(mainBowerFiles({filter: '**/*.js'}))
        .pipe(concat('vendors.js'))
        .pipe(gulp.dest('build/js'));
});

gulp.task('clean:vendors:css', function () {
    del(['build/css/vendors.css'], {force: true});
});

gulp.task('build:vendors:css', ['clean:vendors:css'], function () {
    return gulp.src(mainBowerFiles({filter: '**/*.less'}))
        .pipe(less())
        .pipe(concat('vendors.css'))
        .pipe(gulp.dest('build/css'));
});
