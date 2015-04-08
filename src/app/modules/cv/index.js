//
// src/app/modules/cv/index.js
//

'use strict';

var Apply = require('apply');
var Controller = require('./controllers');

var CVModule = Apply.Module.extend({
  startWithParent: false,

  onStart: function(config) {
    this._controller = new Controller(config.content)
  },

  onBeforeStop: function() {
    this._controller.destroy();
  }
});

module.exports = CVModule;
