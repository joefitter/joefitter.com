//
// src/app/modules/home/index.js
//

'use strict';

var Apply = require('apply');
var Controller = require('./controllers');

var HomeModule = Apply.Module.extend({
  startWithParent: false,
  onStart: function(config) {
    this._controller = new Controller(config);
  },
  onBeforeStop: function() {
    this._controller.destroy();
  }
});

module.exports = HomeModule;
