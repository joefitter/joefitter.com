//
// src/app/modules/home/views/index.js
//

'use strict';

var Apply = require('apply');
var CharacterView = require('./character');
var template = require('../templates/index.hbs');

var View = Apply.CompositeView.extend({
  template: template,
  childView: CharacterView,
  childViewContainer: 'p',
  className: 'wrapper',
});

module.exports = View;
