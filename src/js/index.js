'use strict';

var app = require('base').getInstance();
var config = require('./config');
require('./modules');
require('./router');

app.start(config);
