//
// src/app/modules/footer/index.js
//

'use strict';

var Apply = require('apply');
var Controller = require('./controllers');
var channel = Apply.Radio.channel('footer');

var FooterModule = Apply.Module.extend({
  startWithParent: false,

  onStart: function(config) {
    this._controller = new Controller(config.footer);

    channel.comply({
      updateInfo: this._controller.onUpdateInfo
    }, this._controller);
  },

  onBeforeStop: function() {
    this._controller.destroy();
    channel.reset();
  }
});

module.exports = FooterModule;
