//
// src/app/modules/page/controllers/index.js
//

'use strict';

var Apply = require('apply');
var View = require('../views');
var Model = require('../models');
var app = Apply.getInstance();

var Controller = Apply.Object.extend({
  initialize: function(config) {
    this.config = config;
    this.model = new Model();
    var region = new Apply.Region({
      el: this.config.el
    });

    app.addRegions({
      page: region
    });

    this.show();
  },

  show: function() {
    var view = new View({
      model: this.model
    });

    app.page.show(view);
  },

  hide: function() {
    var region = app.page;
    var view = region.currentView;

    region.reset();
    if (view) {
      delete view.el;
      delete view.$el;
    }
  },

  onDestroy: function() {
    this.hide();
  }
});

module.exports = Controller;
