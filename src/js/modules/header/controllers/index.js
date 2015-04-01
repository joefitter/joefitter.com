'use strict';

var Base = require('base');
var app = Base.getInstance();
var Collection = require('../collections/pages');
var View = require('../views');

var Controller = Base.Object.extend({
  initialize: function(config) {
    this.config = config;
    this.collection = new Collection(this.config.pages);
    this.setupRegion();
    this.showView();
  },

  setupRegion: function() {
    var region = new Base.Region({
      el: this.config.el
    });

    app.addRegions({
      header: region
    });
  },

  showView: function() {
    var view = new View({
      collection: this.collection
    });

    app.header.show(view);
  },

  hide: function() {
    var region = app.header;
    var view = region.currentView;

    region.reset();
    if (view) {
      delete view.el;
      delete view.$el;
    }
  }
});

module.exports = Controller;
