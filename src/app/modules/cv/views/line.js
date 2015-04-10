//
// src/app/modules/cv/views/line.js
//

'use strict';

var Apply = require('apply');
var SegmentView = require('./segment');
var EmptyView = require('./empty');
var _ = require('lodash');

var View = Apply.CollectionView.extend({
  childView: SegmentView,
  emptyView: EmptyView,
  tagName: 'li',

  childEvents: {
    mouseenter: 'childViewHovered'
  },

  initialize: function() {
    this.collection = this.model.get('segments');
  },

  childViewHovered: function(view) {
    var model = view.model;
    var collection = model.collection;
    var index = collection.indexOf(model);
    var items = collection.pluck('item');
    var col = _.slice(items, 0, index + 1).join('').length;
    this.triggerMethod('childHovered', col);
  },

  onBeforeRender: function() {
    var numberOfTabs = _.dropRightWhile(this.collection.models, function(model) {
      return model.get('type') !== 'tab';
    }).length;

    if (!numberOfTabs) {
      return;
    }
    this.$el.addClass('tabs-' + numberOfTabs);
  }
});

module.exports = View;
