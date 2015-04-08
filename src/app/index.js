//
// src/app/index.js
//

'use strict';

var Apply = require('apply');
var app = Apply.getInstance();
var config = require('./config/config');
require('./modules');
require('./helpers/router');

app.start(config);
