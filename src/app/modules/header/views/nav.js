'use strict';

var Base = require('base');
var PageView = require('./page');
var template = require('../templates/nav.hbs');

var View = Base.CompositeView.extend({
  template: template,
  childView: PageView,
  childViewContainer: 'ul'
});

module.exports = View;
