'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var handlebars = require('browserify-handlebars');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');
var config = require('../config').browserify;

var bundler = watchify(browserify(watchify.args));

bundler.transform(handlebars);
bundler.transform('brfs');

bundler.add(config.src);

function bundle() {
  return bundler.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source(config.exports))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.dest))
    .pipe(browserSync.reload({stream: true}));
}

bundler.on('update', bundle);
bundler.on('log', gutil.log);

gulp.task('browserify', bundle);
