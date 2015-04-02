'use strict';

var Base = require('base');
var $ = Base.$;
var _ = require('lodash');
var app = Base.getInstance();
var View = require('../views');
var Collection = require('../collections/lines');
var cv = require('../helpers/cv');
var fs = require('fs');
var cvAsText = fs.readFileSync(__dirname + '/../helpers/cv.js', 'utf8');

var Controller = Base.Object.extend({
  initialize: function(config) {
    this.config = config;
    this.collection = new Collection(_.map(cvAsText.split('\n'), function(line) {
      return {
        line: line
      };
    }));
    console.log(cv);
    this._show();
  },

  _show: function() {
    if (!app.content) {
      return;
    }

    var view = new View({
      collection: this.collection
    });

    app.content.show(view);
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
