'use strict';

var nodemon = require('gulp-nodemon');
var gulp = require('gulp');
var config = require('../config').nodemon

gulp.task('nodemon', function(cb) {
  var called = false;
  return nodemon({
    script: config.src,
    ignore: config.ignore,
  }).on('start', function() {
    if (!called) {
      called = true;
      cb();
    }
  });
});
