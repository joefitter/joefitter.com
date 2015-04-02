'use strict';

var Base = require('base');
var template = require('../templates/gh.hbs');

var View = Base.ItemView.extend({
  template: template
});

module.exports = View;
