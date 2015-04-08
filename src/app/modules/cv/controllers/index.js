//
// src/app/modules/cv/controllers/index.js
//

'use strict';

var Apply = require('apply');
var $ = Apply.$;
var _ = require('lodash');
var app = Apply.getInstance();
var View = require('../views');
var Collection = require('../collections/lines');
var cv = require('../models/cv');
var fs = require('fs');
var cvAsText = fs.readFileSync(__dirname + '/../models/cv.js', 'utf8');
var mainChannel = Apply.Radio.channel('main');

var Controller = Apply.Object.extend({
  initialize: function(config) {
    this.info = {
      col: 1,
      line: 1
    };

    mainChannel.command('updateInfo', this.info);

    this.config = config;
    this.collection = new Collection(_.map(cvAsText.split('\n'), function(line) {
      return {
        line: line
      };
    }));

    // log CV object to console.
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

    this.listenTo(view, 'childHovered', function(info) {
      mainChannel.command('updateInfo', info);
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
