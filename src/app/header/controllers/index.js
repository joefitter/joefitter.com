//
// src/app/header/controllers/index.js
//

'use strict';

import { Object as Controller, _ } from 'orchestra';
import Collection from '../collections/pages';
import Model from '../models';
import View from '../views';

export default Controller.extend({
  initialize() {
    this.collection = new Collection(this.options.nav.pages);
    this.model = new Model(this.options.nav.settings);
    this._show();
  },

  onRouteChanged(page) {
    this._updateActivePage(page);
  },

  _updateActivePage(page) {
    let model;
    if (!page) {
      model = this.collection.at(0).set('selected', true);
    } else {
      model = this.collection.find(model => model.get('id') === page);
    }
    model.set('selected', true);
    _.each(this.collection.without(model), model => {
      model.set('selected', false);
    });
  },

  _show() {
    const region = this.options.region;
    const view = new View({
      collection: this.collection,
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
