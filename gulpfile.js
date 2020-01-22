'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    bs = require('browser-sync').create();

sass.compiler = require('node-sass');

// Scss to css
gulp.task('sass', function () {
    return gulp.src('assets/scss/**.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer('last 2 versions'))
        .pipe(gulp.dest('assets/css'))
        .pipe(bs.reload({
            stream: true
        }));
});

gulp.task('watch', function () {
    gulp.watch('assets/scss/**/*.scss', ['sass']);
    gulp.watch("html/**/*.html").on('change', bs.reload);
});

gulp.task('browser-sync', ['watch'], function () {
    bs.init({
        proxy: "localhost/multikart/theme/index.html"
    });
});

gulp.task('default', ['sass', 'watch', 'browser-sync']);
