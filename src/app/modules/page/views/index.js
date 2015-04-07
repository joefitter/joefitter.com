'use strict';

var Marionette = require('backbone.marionette');
var template = require('../templates/index.hbs');

var View = Marionette.ItemView.extend({
  template: template,
  initialize: function() {
    console.log('view init')
  },
  onRender: function() {
    console.log('rendered');
  }
});

module.exports = View;
