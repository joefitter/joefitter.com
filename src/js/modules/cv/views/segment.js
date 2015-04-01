'use strict';

var Base = require('base');
var template = require('../templates/segment.hbs');

var View = Base.ItemView.extend({
  tagName: 'span',
  className: function() {
    return this.model.get('type');
  },
  template: template,
  initialize: function() {
    console.log('SEGMENT');
  }
});

module.exports = View;
