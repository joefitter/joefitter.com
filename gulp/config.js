'use strict';

const dest = './dist';
const src = './src';

const html = {
  dest,
  src: src + '/**/*.html'
};

const clean = [
  dest
];

const htaccess = {
  dest,
  src: src + '/.htaccess'
};

const styles = {
  src: src + '/main.scss',
  dest: dest + '/css',
  compass: {
    src: src + '/**/*.scss',
    configFile: './config.rb',
    css: dest + '/css',
    sass: src
  }
};

const fonts = {
  src: src + '/fonts/**',
  dest: dest + '/fonts'
};

const img = {
  src: src + '/img/**',
  dest: dest + '/img'
};

const scripts = {
  dest: dest + '/js',
  source: 'bundle.js'
};

const bundler = {
  src: src + '/app/main.js'
};

const jshint = {
  src: [
    './src/**/*.js',
    './gulp/**/*.js'
  ]
};

const mocha = {
  src: [
    './test/setup/node.js',
    './test/setup/helpers.js',
    './test/unit/**/*.js'
  ],
  reporter: 'nyan'
};

const watch = {
  files: 'dist/**/*.*',
  proxy: 'http://localhost:3000',
  browser: 'google chrome',
  port: 7000,
  testSrc: './test/**/*.js',
  stylesSrc: [
    './src/main.scss',
    './src/**/*.scss'
  ],
  htmlSrc: './src/*.html'
};

const nodemon = {
  script: 'server/server.js'
};

export {
  html,
  clean,
  htaccess,
  styles,
  fonts,
  img,
  scripts,
  bundler,
  jshint,
  mocha,
  watch,
  nodemon
};
