var gulp = require('gulp');

gulp.task('dev', ['build:app', 'build:vendors', 'serve']);
