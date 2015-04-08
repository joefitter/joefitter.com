//
// src/app/modules/cv/views/empty.js
//

'use strict';

var Apply = require('apply');
var template = require('../templates/empty.hbs');

var View = Apply.ItemView.extend({
  template: template
});

module.exports = View;
