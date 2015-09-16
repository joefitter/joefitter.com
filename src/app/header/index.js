//
// src/app/header/index.js
//
'use strict';

import { Module, Radio } from 'orchestra';
import Controller from './controllers';

const channel = Radio.channel('header');

export default Module.extend({
  onStart(config) {
    this._controller = new Controller(config.header);

    channel.reply({
      routeChanged: this._controller.onRouteChanged
    }, this._controller);
  },

  onBeforeStop() {
    this._controller.destroy();
    channel.reset();
  }
});
