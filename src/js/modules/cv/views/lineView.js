'use strict';

var Base = require('base');
var SegmentView = require('./segment');
var EmptyView = require('./emptyLine');

var View = Base.CollectionView.extend({
  childView: SegmentView,
  emptyView: EmptyView,
  initialize: function() {
    this.collection = this.model.get('segments');
  }
});

module.exports = View;
