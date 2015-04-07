'use strict';

var app = require('base').getInstance();

app.module('page', {
  moduleClass: require('./page')
});

app.module('page.header', {
  moduleClass: require('./header')
});

app.module('page.content', {
  moduleClass: require('./content')
});

app.module('page.content.cv', {
  moduleClass: require('./cv')
});

app.module('page.content.home', {
  moduleClass: require('./home')
});

app.module('page.footer', {
  moduleClass: require('./footer')
});
