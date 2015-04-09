'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var ftp = require('vinyl-ftp');
var config = require('../_creds');

gulp.task('deploy', function() {
  var conn = ftp.create({
    host: config.host,
    user: config.user,
    password: config.password,
    parallel: config.parallel,
    log: gutil.log
  });

  return gulp.src(config.src, {buffer: false})
    .pipe(conn.newer(config.dest))
    .pipe(conn.dest(config.dest));
});
