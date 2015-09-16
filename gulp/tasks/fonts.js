'use strict';

import gulp from 'gulp';
import { fonts as config } from '../config';
import plumber from 'gulp-plumber';

gulp.task('fonts', ['clean'], () => {
  return gulp.src(config.src)
    .pipe(plumber())
    .pipe(gulp.dest(config.dest));
});
