'use strict';

var Base = require('base');
var Controller = require('./controllers');
var _ = require('lodash');

var BaseModule = Base.Module.extend({
  onStart: function(config) {
    this.config = config;
    this._controller = new Controller(this.config.page);
    this.startSubmodules();
  },

  startSubmodules: function() {
    var modules = _.filter(this.submodules, function(module) {
      return !module.startWithParent;
    });

    _.each(modules, function(module) {
      module.start(this.config);
    }, this);
  },

  onBeforeStop: function() {
    console.log('module stopped');
  }
});

module.exports = BaseModule;
