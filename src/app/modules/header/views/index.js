'use strict';

var Base = require('base');
var template = require('../templates/index.hbs');
var GhView = require('./ghView');
var NavView = require('./nav');

var View = Base.LayoutView.extend({
  template: template,

  regions: {
    logo: '#logo',
    nav: 'nav',
    gh: '#gh'
  },

  initialize: function(config) {
    this.config = config;
  },

  onRender: function() {
    this._showViews();
  },

  _showViews: function() {
    var ghView = new GhView({
      model: this.model
    });
    this.gh.show(ghView);

    var navView = new NavView({
      collection: this.collection,
      model: this.model
    });
    this.nav.show(navView);
  },

  onDestroy: function() {
    this._hide();
  }
});

module.exports = View;
