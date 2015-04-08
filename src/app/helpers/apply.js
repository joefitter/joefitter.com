//
// src/app/helpers/apply.js
//

'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;
require('backbone.radio');
require('backbone.stickit');
var Marionette = require('backbone.marionette');
var _ = require('lodash');
var Apply = {};
_.extend(Apply, Backbone);
_.extend(Apply, Backbone.Marionette);

_.extend(Apply, {
  Application: Apply.Application.extend(require('./application')),
  getInstance: function() {
    if (!this.instance) {
      this.instance = new this.Application();
    }
    return this.instance;
  }
});

module.exports = Apply;
