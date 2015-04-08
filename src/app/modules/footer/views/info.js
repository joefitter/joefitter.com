//
// src/app/modules/footer/views/info.js
//

'use strict';

var Apply = require('apply');
var template = require('../templates/info.hbs');
var _ = require('lodash');

var View = Apply.ItemView.extend({
  template: template,
  bindings: {
    '#col': 'col',
    '#line': 'line'
  },

  onRender: function() {
    this.stickit();
  },
  onDestroy: function() {
    this.unstickit();
  }
});

module.exports = View;
