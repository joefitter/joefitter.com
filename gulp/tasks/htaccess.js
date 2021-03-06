'use strict';

import gulp from 'gulp';
import plumber from 'gulp-plumber';
import { htaccess as config } from '../config';

gulp.task('htaccess', ['clean'], () => {
  return gulp.src(config.src)
    .pipe(plumber())
    .pipe(gulp.dest(config.dest));
});
