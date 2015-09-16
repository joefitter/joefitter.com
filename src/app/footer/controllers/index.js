//
// src/app/footer/controllers/index.js
//
'use strict';

import { Object as Controller } from 'orchestra';
import View from '../views';
import Model from '../models';

export default Controller.extend({
  initialize() {
    this.model = new Model();
    this._show();
  },

  onUpdateInfo(data) {
    this.model.set(data);
  },

  _show() {
    const region = this.options.region;
    const view = new View({
      model: this.model
    });

    region.show(view);
  },

  _hide() {
    const region = this.options.region;
    const view = region.currentView;

    region.reset();
    if (view) {
      delete view.el;
      delete view.$el;
    }
  },

  onDestroy() {
    this._hide();
  }
});
