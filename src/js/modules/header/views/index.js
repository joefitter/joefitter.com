'use strict';

var Base = require('base');
var template = require('../templates/index.hbs');
var PageView = require('./page');

var View = Base.CollectionView.extend({
  childView: PageView,
  tagName: 'ul',
  initialize: function() {
    console.log('headerView');
  }
});

module.exports = View;
