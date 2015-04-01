'use strict';

var Base = require('base');
var app = Base.getInstance();
var channel = Base.Radio.channel('main');
var Controller = require('./controllers');
var _ = require('lodash');

var ContentModule = Base.Module.extend({

  onBeforeStart: function() {
    channel.comply({
      routeChanged: this.updateContent
    }, this);
  },

  onStart: function(config) {
    this.config = config.content
    this._controller = new Controller(this.config);
  },

  updateContent: function(page) {
    page = page || 'home';
    _.each(this.submodules, function(submodule) {
      submodule.stop();
    })
    if (_.keys(this.submodules).indexOf(page) !== -1) {
      this.submodules[page].start(this.config);
    }
  }

});

module.exports = ContentModule;
