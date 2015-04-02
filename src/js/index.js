'use strict';

var Base = require('base');
var app = Base.getInstance();
var config = require('./config');
require('./modules');
require('./router');

app.start(config);
