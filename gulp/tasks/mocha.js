'use strict';

import gulp from 'gulp';
import plumber from 'gulp-plumber';
import mocha from 'gulp-mocha';
import { mocha as config } from '../config';

gulp.task('mocha', ['jshint'], () => {
  return gulp.src(config.src, { read: false })
    .pipe(plumber())
    .pipe(mocha({ reporter: config.reporter }));
});
