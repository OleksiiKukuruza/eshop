var gulp = require('gulp');
var gulpLiveServer = require('gulp-live-server');
var paths = {
    scripts: 'app/**/*.js',
    images: 'app/assets/images/**/*',
    styles: 'app/**/*.less',
    server: 'server/**/*.js'
};

gulp.task('serve', function () {
    var server = gulpLiveServer.new(['--harmony', 'app.js']);

    server.start();

    var serverWatcher = gulp.watch(paths.server);
    var stylesWatcher = gulp.watch(paths.styles, ['build:app:css']);
    var scriptsWatcher = gulp.watch(paths.scripts, ['build:app:js']);
    var imagesWatcher = gulp.watch(paths.images, ['build:app:images']);

    serverWatcher.on('change', function () {
        server.start.bind(server)();
    });

    stylesWatcher.on('change', function (file) {
        server.notify.apply(server, [file]);
    });

    scriptsWatcher.on('change', function (file) {
        server.notify.apply(server, [file]);
    });

    imagesWatcher.on('change', function (file) {
        server.notify.apply(server, [file]);
    });

});
