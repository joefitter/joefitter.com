'use strict';

var Base = require('base');
var app = Base.getInstance();
var Collection = require('../collections/pages');
var Model = require('../models');
var View = require('../views');
var _ = require('lodash');

var Controller = Base.Object.extend({
  initialize: function(config) {
    this.config = config;
    this.collection = new Collection(this.config.nav.pages);
    this.model = new Model(this.config.nav.settings);
    this._setupRegions();
    this._show();
  },

  onRouteChanged: function(page) {
    this._updateActivePage(page);
  },

  _updateActivePage: function(page) {
    var model;
    if (!page) {
      model = this.collection.at(0).set('selected', true);
    } else {
      model = this.collection.find(function(model) {
        return model.get('id') === page;
      });
    }
    model.set('selected', true);
    _.each(this.collection.without(model), function(model) {
      model.set('selected', false);
    });
  },

  _setupRegions: function() {
    var region = new Base.Region({
      el: this.config.el
    });

    app.addRegions({
      header: region
    });
  },

  _show: function() {
    var view = new View({
      collection: this.collection,
      model: this.model
    });

    app.header.show(view);
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
