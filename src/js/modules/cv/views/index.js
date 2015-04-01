'use strict';

var Base = require('base');
var LineView = require('./lineView');

var View = Base.CollectionView.extend({
  tagName: 'pre',
  id: 'cv',
  childView: LineView
});

module.exports = View;
