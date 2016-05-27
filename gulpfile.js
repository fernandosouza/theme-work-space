'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var styleguide = require('devbridge-styleguide');

gulp.task('start-styleguide', function () {
  styleguide.startServer();
});

var sassFiles = ['./src/**/*.scss'];
 
gulp.task('sass', function () {
  return gulp.src(sassFiles)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dest'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch(sassFiles, ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
    gulp.watch(sassFiles).on('change', browserSync.reload);
});

gulp.task('default', ['start-styleguide', 'sass', 'browser-sync']);