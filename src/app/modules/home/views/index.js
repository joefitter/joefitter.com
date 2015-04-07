//
// src/app/modules/home/views/index.js
//

'use strict';

var Base = require('base');
var CharacterView = require('./character');
var template = require('../templates/index.hbs');

var View = Base.CompositeView.extend({
  template: template,
  childView: CharacterView,
  childViewContainer: 'p',
  className: 'wrapper',
});

module.exports = View;
