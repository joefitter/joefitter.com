var dest = './dist';
var src = './src';

module.exports = {
  browserSync: {
    server: {
      baseDir: dest
    }
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
    src: src + '/js/index.js',
    dest: dest + '/js',
    exports: 'app.js'
  }
};
