'use strict';

//7927

var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var changed = require('gulp-changed');
var browserSync = require('browser-sync');
var config = require('../config').images;

gulp.task('images', function() {
  return gulp.src(config.src)
    .pipe(changed(config.dest))
    .pipe(imagemin())
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream: true}));
});
