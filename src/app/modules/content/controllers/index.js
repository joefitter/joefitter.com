'use strict';

var Base = require('base');
var app = Base.getInstance();

var Controller = Base.Object.extend({
  initialize: function(config) {
    this.config = config;
    this._setupRegions();
  },

  _setupRegions: function() {
    var region = new Base.Region({
      el: this.config.el
    });

    app.addRegions({
      content: region
    });
  },

  _hide: function() {
    var region = app.content;
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
