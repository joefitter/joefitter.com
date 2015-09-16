'use strict';

import gulp from 'gulp';
import { clean as config } from '../config';
import del from 'del';

gulp.task('clean', cb => {
  return del(config.src, cb);
});
