'use strict';

import gulp from 'gulp';
import nodemon from 'nodemon';
import { nodemon as config } from '../config';

gulp.task('nodemon', cb => {
  let called = false;
  return nodemon({
    script: config.script
  })
  .on('start', () => {
    if (!called) {
      called = true;
      cb();
    }
  });
});
