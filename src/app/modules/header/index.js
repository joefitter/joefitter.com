//
// src/app/modules/header/index.js
//

'use strict';

var Apply = require('apply');
var Controller = require('./controllers');
var channel = Apply.Radio.channel('header');

var HeaderModule = Apply.Module.extend({
  startWithParent: false,

  onStart: function(config) {
    this._controller = new Controller(config.header);

    channel.comply({
      routeChanged: this._controller.onRouteChanged
    }, this._controller)
  },

  onBeforeStop: function() {
    this._controller.destroy();
    channel.reset();
  }
});

module.exports = HeaderModule;
