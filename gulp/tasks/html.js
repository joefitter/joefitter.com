'use strict';

import gulp from 'gulp';
import { html as config } from '../config';
import plumber from 'gulp-plumber';
import { reload } from 'browser-sync';

gulp.task('html', ['clean'], () => {
  return gulp.src(config.src)
    .pipe(plumber())
    .pipe(gulp.dest(config.dest))
    .pipe(reload({ stream: true }));
});
