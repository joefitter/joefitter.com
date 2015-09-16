//
// src/app/home/index.js
//
'use strict';

import { Module } from 'orchestra';
import Controller from './controllers';

export default Module.extend({
  startWithParent: false,

  onStart(config) {
    this._controller = new Controller(config);
  },

  onBeforeStop() {
    this._controller.destroy();
  }
});
