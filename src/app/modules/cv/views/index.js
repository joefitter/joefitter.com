//
// src/app/modules/cv/views/index.js
//

'use strict';

var Apply = require('apply');
var LineView = require('./line');

var View = Apply.CollectionView.extend({
  tagName: 'ol',
  id: 'cv',
  className: 'wrapper',
  childView: LineView,
  childEvents: {
    childHovered: function(childView, column) {
      this.triggerMethod('childHovered', {
        line: childView._index + 1,
        col: column
      });
    }
  }
});

module.exports = View;
