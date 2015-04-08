//
// src/app/modules/footer/views/credits.js
//

'use strict';

var Apply = require('apply');
var template = require('../templates/credits.hbs');

var View = Apply.ItemView.extend({
  template: template
});

module.exports = View;
