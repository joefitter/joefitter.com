'use strict';

require('babel/register');

var requireDir = require('require-dir');

requireDir('./gulp/tasks', {
  recurse: true
});
