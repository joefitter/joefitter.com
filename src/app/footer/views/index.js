//
// src/app/footer/views/index.js
//
'use strict';

import { LayoutView } from 'orchestra';
import CreditsView from './credits';
import InfoView from './info';
import template from '../templates/index.hbs';

export default LayoutView.extend({
  template,

  className: 'wrapper',

  regions: {
    credits: '#credits',
    info: '#info'
  },

  onRender() {
    this._showViews();
  },

  _showViews() {
    const creditsView = new CreditsView();
    this.getRegion('credits').show(creditsView);

    const infoView = new InfoView({
      model: this.model
    });

    this.getRegion('info').show(infoView);
  }
});
