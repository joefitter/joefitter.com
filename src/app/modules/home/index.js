'use strict';

var Base = require('base');
var Controller = require('./controllers');

var HomeModule = Base.Module.extend({
  startWithParent: false,
  onStart: function(config) {
    this._controller = new Controller(config);
  },
  onBeforeStop: function() {
    this._controller.destroy();
  }
});

module.exports = HomeModule;
