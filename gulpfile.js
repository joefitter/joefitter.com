// 'use strict';

// var requireDir = require('require-dir');

// requireDir('./gulp/tasks', {recurse: true});

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserify = require('browserify');
var del = require('del');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var stylish = require('jshint-stylish');
var buffer = require('vinyl-buffer');
var nodemon = require('nodemon');
var ftp = require('vinyl-ftp');
var _ = require('lodash');

var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('nodemon', function(cb) {
  var called = false;
  return nodemon({
    script: 'server/server.js'
  })
  .on('start', function() {
    if (!called) {
      called = true;
      cb()
    }
  });
});

gulp.task('deploy', function() {
  var conn = ftp.create({
    host: '91.208.99.4',
    user: 'joefitter@joefitter.com',
    password: 'LucyWard1',
    parallel: 10,
    log: $.util.log
  });

  return gulp.src('dist/**/*', { buffer: false, dot: true })
    .pipe(conn.newer('/public_html'))
    .pipe(conn.dest('/public_html'));
});

gulp.task('fonts', ['clean'], function() {
  return gulp.src('./src/fonts/**')
    .pipe($.plumber())
    .pipe(gulp.dest('./dist/fonts'));
});

gulp.task('clean', function(cb) {
  return del([
    './dist/**'
  ], cb);
});

gulp.task('html', ['clean'], function() {
  return gulp.src('./src/index.html')
    .pipe($.plumber())
    .pipe(gulp.dest('./dist'))
    .pipe(reload({ stream: true }));
});

gulp.task('img', ['clean'], function() {
  return gulp.src('./src/img/**')
    .pipe($.plumber())
    .pipe(gulp.dest('./dist/img'));
});

gulp.task('styles', ['fonts'], function() {
  return gulp.src('./src/main.scss')
    .pipe($.compass({
      src: 'src/**/*.scss',
      //jscs:disable requireCamelCaseOrUpperCaseIdentifiers
      config_file: './config.rb',
      //jscs:enable requireCamelCaseOrUpperCaseIdentifiers
      css: 'dist/css',
      sass: 'src'
    }))
    .pipe(gulp.dest('./dist/css'))
    .pipe(reload({ stream: true }));
});

gulp.task('htaccess', ['clean'], function() {
  return gulp.src('src/.htaccess')
    .pipe(gulp.dest('dist'))
});

var bundler = _.memoize(function(watch) {
  var options = {debug: true};

  if (watch) {
    _.extend(options, watchify.args);
  }

  var b = browserify('./src/app/main.js', options);

  if (watch) {
    b = watchify(b);
  }

  return b;
});

var handleErrors = function() {
  var args = Array.prototype.slice.call(arguments);
  delete args[0].stream;
  $.util.log.apply(null, args);
  this.emit('end');
};

function bundle(cb, watch) {
  return bundler(watch).bundle()
    .on('error', handleErrors)
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe($.sourcemaps.init({ loadMaps: true }))
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/js'))
    .on('end', cb)
    .pipe(reload({ stream: true }));
}

gulp.task('scripts', function(cb) {
  process.env.BROWSERIFYSWAP_ENV = 'dist';
  bundle(cb, true);
});

gulp.task('jshint', function() {
  return gulp.src(['./src/**/*.js', './test/**/*.js'])
    .pipe($.plumber())
    .pipe($.jshint())
    .pipe($.jshint.reporter(stylish));
});

var reporter = 'spec';

gulp.task('mocha', ['jshint'], function() {
  return gulp.src([
    './test/setup/node.js',
    './test/setup/helpers.js',
    './test/unit/**/*.js'
  ], { read: false })
    .pipe($.plumber())
    .pipe($.mocha({ reporter: reporter }));
});

gulp.task('build', [
  'html',
  'htaccess',
  'img',
  'styles',
  'scripts',
  'test'
]);

gulp.task('test', [
  'jshint',
  'mocha'
]);

gulp.task('watch', ['build', 'nodemon'], function(cb) {
  browserSync.init({
    proxy: 'http://localhost:3000',
    files: 'dist/**/*.*',
    browser: 'google chrome',
    port: 7000
  });

  reporter = 'dot';
  bundler(true).on('update', function() {
    gulp.start('scripts');
    gulp.start('test');
  });
  gulp.watch('./test/**/*.js', ['test']);
  gulp.watch(['./src/main.scss', './src/**/*.scss'], ['styles']);
  gulp.watch(['./src/*.html'], ['html']);
});

gulp.task('default', ['watch']);
