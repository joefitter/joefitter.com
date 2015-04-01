'use strict';

var Base = require('base');
var Controller = require('./controllers');

var CVModule = Base.Module.extend({
  startWithParent: false,

  onStart: function(config) {
    this._controller = new Controller(config.content)
  },

  onBeforeStop: function() {
    this._controller.destroy();
  }
});

module.exports = CVModule;
