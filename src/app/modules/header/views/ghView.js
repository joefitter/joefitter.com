//
// src/app/modules/header/views/ghView.js
//

'use strict';

var Apply = require('apply');
var template = require('../templates/gh.hbs');

var View = Apply.ItemView.extend({
  template: template
});

module.exports = View;
