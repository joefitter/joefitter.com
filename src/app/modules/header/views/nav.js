//
// src/app/modules/header/views/nav.js
//

'use strict';

var Apply = require('apply');
var PageView = require('./page');
var template = require('../templates/nav.hbs');

var View = Apply.CompositeView.extend({
  template: template,
  childView: PageView,
  childViewContainer: 'ul'
});

module.exports = View;
