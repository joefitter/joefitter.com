'use strict';

var gulp = require('gulp');

gulp.task('build', ['browserify', 'fonts', 'compass', 'html', 'htaccess', 'images']);
