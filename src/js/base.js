'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
require('backbone.radio');
var Marionette = require('backbone.marionette');
var _ = require('lodash');
var Base = {};
_.extend(Base, Backbone);
_.extend(Base, Backbone.Marionette);

_.extend(Base, {
  Application: Base.Application.extend({
    onStart: function() {
      Base.history.start({
        pushState: true
      });
    }
  }),
  getInstance: function() {
    if (!this.instance) {
      this.instance = new this.Application();
    }
    return this.instance;
  }
});

module.exports = Base;
