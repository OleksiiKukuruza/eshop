var gulp = require('gulp');
var gulpLiveServer = require('gulp-live-server');
var paths = {
    scripts: 'app/**/*.js',
    images: 'app/assets/images/**/*',
    styles: 'app/**/*.less',
    templates: 'app/**/*.html',
    server: 'server/**/*.js'
};

gulp.task('serve', ['eslint:serve'], function () {
    var server = gulpLiveServer.new(['--harmony', 'app.js']);

    server.start();

    var serverWatcher = gulp.watch(paths.server, ['eslint:serve']);
    var templatesWatcher = gulp.watch(paths.templates, ['build:app:js']);
    var scriptsWatcher = gulp.watch(paths.scripts, ['build:app:js']);
    var stylesWatcher = gulp.watch(paths.styles, ['build:app:css']);
    var imagesWatcher = gulp.watch(paths.images, ['build:app:images']);

    serverWatcher.on('change', function () {
        server.start.bind(server)();
    });

    templatesWatcher.on('change', function (file) {
        server.notify.apply(server, [file]);
    });

    scriptsWatcher.on('change', function (file) {
        server.notify.apply(server, [file]);
    });

    stylesWatcher.on('change', function (file) {
        server.notify.apply(server, [file]);
    });

    imagesWatcher.on('change', function (file) {
        server.notify.apply(server, [file]);
    });
});
