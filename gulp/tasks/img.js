'use strict';

import gulp from 'gulp';
import plumber from 'gulp-plumber';
import { img as config } from '../config';

gulp.task('img', ['clean'], () => {
  return gulp.src(config.src)
    .pipe(plumber())
    .pipe(gulp.dest(config.dest));
});
