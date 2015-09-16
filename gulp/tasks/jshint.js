'use strict';

import gulp from 'gulp';
import plumber from 'gulp-plumber';
import jshint from 'gulp-jshint';
import stylish from 'jshint-stylish';
import { jshint as config } from '../config';

gulp.task('jshint', () => {
  return gulp.src(config.src)
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});
