var gulp = require('gulp');
var del = require('del');
var less = require('gulp-less');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var paths = {
    scripts: 'app/**/*.js',
    images: 'app/assets/images/**/*',
    styles: 'app/**/*.less'
};

gulp.task('build:app', ['build:app:js', 'build:app:css', 'build:app:images']);

gulp.task('clean:app:js', function () {
    del(['build/js/app.js'], {force: true});
});

gulp.task('build:app:js', ['eslint:app', 'clean:app:js'], function () {
    return gulp.src(paths.scripts)
        .pipe(sourcemaps.init())
        .pipe(babel({presets: ['es2015']}))
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/js'));
});

gulp.task('clean:app:css', function () {
    del(['build/css/app.css'], {force: true});
});

gulp.task('build:app:css', ['clean:app:css'], function () {
    return gulp.src(paths.styles)
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(concat('app.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('build/css'));
});

gulp.task('clean:app:images', function () {
    del(['build/img'], {force: true});
});

gulp.task('build:app:images', ['clean:app:images'], function () {
    return gulp.src(paths.images)
        .pipe(imagemin({optimizationLevel: 5}))
        .pipe(gulp.dest('build/img'));
});
