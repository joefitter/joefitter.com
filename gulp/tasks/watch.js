'use strict';

import gulp from 'gulp';
import browserSync from 'browser-sync';
import { watch as config } from '../config';
import bundler from '../helpers/bundler';

gulp.task('watch', ['build', 'nodemon'], () => {
  browserSync.init({
    proxy: config.proxy,
    files: config.files,
    browser: config.browser,
    port: config.port
  });

  bundler(true).on('update', () => {
    gulp.start('scripts');
    gulp.start('test');
  });
  gulp.watch(config.testSrc, ['test']);
  gulp.watch(config.stylesSrc, ['styles']);
  gulp.watch(config.htmlSrc, ['html']);
});
