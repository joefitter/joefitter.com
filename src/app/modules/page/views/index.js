//
// src/app/modules/page/views/index.js
//

'use strict';

var Marionette = require('backbone.marionette');
var template = require('../templates/index.hbs');

var View = Marionette.ItemView.extend({
  template: template
});

module.exports = View;
