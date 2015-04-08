//
// src/app/modules/footer/controllers/index.js
//

'use strict';

var Apply = require('apply');
var app = Apply.getInstance();
var View = require('../views');
var Model = require('../models');

var Controller = Apply.Object.extend({
  initialize: function(config) {
    this.config = config;
    this.model = new Model();
    this._setupRegions();
    this._show();
  },

  onUpdateInfo: function(data) {
    this.model.set(data);
  },

  _setupRegions: function() {
    var region = new Apply.Region({
      el: this.config.el
    });

    app.addRegions({
      footer: region
    });
  },

  _show: function() {
    var view = new View({
      model: this.model
    });

    app.footer.show(view);
  },

  _hide: function() {
    var region = app.header;
    var view = region.currentView;

    region.reset();
    if (view) {
      delete view.el;
      delete view.$el;
    }
  },

  onDestroy: function() {
    this._hide();
  }
});

module.exports = Controller;
