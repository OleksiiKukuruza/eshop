var gulp = require('gulp');
var livereload = require('gulp-livereload');
var paths = {
    scripts: 'app/**/*.js',
    images: 'app/assets/images/**/*',
    styles: 'app/**/*.less'
};

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(paths.styles, ['build:app:css']);
    gulp.watch(paths.scripts, ['build:app:js']);
    gulp.watch(paths.images, ['build:app:images']);
});

gulp.task('dev', ['watch', 'build:app', 'build:vendors', 'serve']);
