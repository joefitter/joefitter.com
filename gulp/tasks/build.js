'use strict';

var gulp = require('gulp');

gulp.task('build', ['fonts', 'compass', 'html', 'htaccess', 'images', 'browserify']);
