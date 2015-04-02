'use strict';

var Base = require('base');
var Controller = require('./controllers');
var channel = Base.Radio.channel('header');

var HeaderModule = Base.Module.extend({
  startWithParent: false,

  onStart: function(config) {
    this._controller = new Controller(config.header);

    channel.comply({
      routeChanged: this._controller.onRouteChanged
    }, this._controller)
  },

  onRouteChanged: function() {
    console.log('blah')
  },

  onBeforeStop: function() {
    this._controller.destroy();
    channel.reset();
  }
});

module.exports = HeaderModule;
