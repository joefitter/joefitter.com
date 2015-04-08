//
// src/app/modules/cv/views/segment.js
//

'use strict';

var Apply = require('apply');
var template = require('../templates/segment.hbs');

var View = Apply.ItemView.extend({
  tagName: 'span',
  className: function() {
    return this.model.get('type');
  },
  triggers: {
    'mouseenter': 'mouseenter'
  },
  template: template
});

module.exports = View;
