//
// src/app/footer/index.js
//
'use strict';

import { Module, Radio } from 'orchestra';
import Controller from './controllers';
const channel = Radio.channel('footer');

export default Module.extend({
  onStart(config) {
    this._controller = new Controller(config.footer);

    channel.reply({
      updateInfo: this._controller.onUpdateInfo
    }, this._controller);
  },

  onBeforeStop() {
    this._controller.destroy();
    channel.reset();
  }
});
