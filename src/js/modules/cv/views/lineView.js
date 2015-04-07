'use strict';

var Base = require('base');
var SegmentView = require('./segment');
var EmptyView = require('./emptyLine');
var _ = require('lodash');

var View = Base.CollectionView.extend({
  childView: SegmentView,
  emptyView: EmptyView,
  initialize: function() {
    this.collection = this.model.get('segments');
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
