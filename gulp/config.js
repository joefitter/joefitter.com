var dest = './dist';
var src = './src';

module.exports = {
  browserSync: {
    proxy: 'http://localhost:3000',
    files: dest + '/**/*.*',
    browser: 'google chrome',
    port: 7000
  },
  compass: {
    src: src + '/sass/**/*.scss',
    config_file: './config.rb',
    css: dest + '/css',
    sass: src + '/sass'
  },
  html: {
    src: src + '/**/*.html',
    dest: dest
  },
  browserify: {
    src: src + '/app/index.js',
    dest: dest + '/js',
    exports: 'app.js'
  },
  images: {
    src: src + '/img/**',
    dest: dest + '/img'
  },
  nodemon: {
    src: './server/server.js',
    watch: './server/server.js',
    ignore: [
      'src/**',
      'dist/**',
      'node_modules'
    ]
  },
  fonts: {
    src: src + '/fonts/**/*',
    dest: dest + '/fonts'
  },
  htaccess: {
    src: src + '/.htaccess',
    dest: dest
  }
};
