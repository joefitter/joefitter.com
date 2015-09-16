'use strict';

import gulp from 'gulp';
import compass from 'gulp-compass';
import { styles as config } from '../config';
import { reload } from 'browser-sync';

gulp.task('styles', ['fonts'], () => {
  return gulp.src(config.src)
    .pipe(compass({
      src: config.compass.src,
      //jscs:disable requireCamelCaseOrUpperCaseIdentifiers
      config_file: config.compass.configFile,
      //jscs:enable requireCamelCaseOrUpperCaseIdentifiers
      css: config.compass.css,
      sass: config.compass.sass
    }))
    .pipe(gulp.dest(config.dest))
    .pipe(reload({ stream: true }));
});
