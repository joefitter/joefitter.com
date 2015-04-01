'use strict';

var compass = require('gulp-compass');
var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('../config').compass;

gulp.task('compass', function() {
  return gulp.src(config.src)
    .pipe(compass(config))
    .pipe(gulp.dest(config.css))
    .pipe(browserSync.reload({stream: true}));
});
