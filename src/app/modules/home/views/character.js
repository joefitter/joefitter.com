//
// src/app/modules/home/views/character.js
//

'use strict';

var Apply = require('apply');
var template = require('../templates/character.hbs');

var View = Apply.ItemView.extend({
  template: template,
  tagName: 'span',
  initialize: function() {
    this.listenTo(this.model, 'change:className', function(model, className) {
      this.$el.addClass(className);
    });
  }
});

module.exports = View;
