// Gulpfile
var gulp            = require('gulp');
var sass            = require('gulp-sass');
var watch           = require('gulp-watch');
var autoprefixer    = require('gulp-autoprefixer');
var notify          = require("gulp-notify");
var sourcemaps      = require('gulp-sourcemaps');

// Server
var browserSync     = require('browser-sync').create();
var reload          = browserSync.reload;
var filter          = require('gulp-filter');

// Build
var webpack         = require('webpack-stream');

gulp.task('default', ['serve']);

// Use BrowserSync to fire up a localhost server and start a livereload. We
// inject CSS changes, and reload fully for javascript and html changes.
// http://www.browsersync.io/docs/options/
gulp.task('serve', ['webpack'], function() {

    browserSync.init({
        server: "./",
        notify: false,
        reloadOnRestart: true,
        open: false,
    });

    // html
    gulp.watch("./index.html").on('change', reload);
    gulp.watch("./javascript/app/**/*.html").on('change', reload);

    // js
    gulp.watch('./javascript/app/**/*.js', ['webpack']);
    gulp.watch('./javascript/dist/**/*.js').on('change', reload);

});

gulp.task('webpack', function() {

    gulp.src('./javascript/app/index.js')

        .pipe( webpack( require('./webpack.config.js') ) )
        .pipe( gulp.dest('./javascript/dist/'))
        .pipe(notify({ title: 'Webpack Compiled!', message: '<%= file.relative %>', sound: false}));
});
