//
// src/app/header/views/index.js
//
'use strict';

import { LayoutView } from 'orchestra';
import template from '../templates/index.hbs';
import GhView from './ghView';
import NavView from './nav';

export default LayoutView.extend({
  template,

  regions: {
    logo: '#logo',
    nav: 'nav',
    gh: '#gh'
  },

  initialize(config) {
    this.config = config;
  },

  onRender() {
    this._showViews();
  },

  _showViews() {
    const ghView = new GhView({
      model: this.model
    });
    this.gh.show(ghView);

    const navView = new NavView({
      collection: this.collection,
      model: this.model
    });
    this.nav.show(navView);
  }
});
