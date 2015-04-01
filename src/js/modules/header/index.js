'use strict';

var Base = require('base');
var Controller = require('./controllers');

var HeaderModule = Base.Module.extend({
  startWithParent: false,

  onStart: function(config) {
    this._controller = new Controller(config.header);
    console.log('started header');
  }
});

module.exports = HeaderModule;
