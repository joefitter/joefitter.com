//
// src/app/cv/controllers/index.js
//
'use strict';

import { Object as Controller, _, Radio } from 'orchestra';
import View from '../views';
import Collection from '../collections/lines';
import cv from '../models/cv';

// commonJS require due to compatibility issue with babelify/brfs
const fs = require('fs');

const cvAsText = fs.readFileSync(__dirname + '/../models/cv.js', 'utf8');
const footerChannel = Radio.channel('footer');

export default Controller.extend({
  initialize() {
    this.info = {
      col: 1,
      line: 1
    };

    footerChannel.request('updateInfo', this.info);

    this.collection = new Collection(_.map(cvAsText.split('\n'), line => {
      return { line };
    }));

    // log CV object to console.
    console.log(cv);
    this._show();
  },

  _show() {
    const view = new View({
      collection: this.collection
    });

    this.listenTo(view, 'childHovered', info => footerChannel.request('updateInfo', info));

    this.options.region.show(view);
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
