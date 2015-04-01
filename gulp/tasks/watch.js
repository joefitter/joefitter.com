'use strict';

var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', ['browserSync'], function() {
  gulp.watch(config.compass.src, ['compass']);
  gulp.watch(config.html.src, ['html']);
});
