var gulp = require('gulp');
var gulpLiveServer = require('gulp-live-server');

gulp.task('serve', function () {
    var server = gulpLiveServer.new(['--harmony', 'app.js']);
    server.start();
    gulp.watch('server/**/*.js', function () {
        server.start.bind(server);
    });
});
