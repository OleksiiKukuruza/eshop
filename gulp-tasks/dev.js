var gulp = require('gulp');
var paths = {
    scripts: 'app/**/*.js',
    images: 'app/assets/images/**/*',
    styles: 'app/**/*.less'
};

gulp.task('watch', function () {
    gulp.watch(paths.scripts, ['build:app:js']);
    gulp.watch(paths.styles, ['build:app:css']);
    gulp.watch(paths.images, ['build:app:images']);
});

gulp.task('dev', ['watch', 'build:app', 'build:vendors', 'serve']);
