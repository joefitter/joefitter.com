//
// src/app/modules/header/models/page.js
//

'use strict';

var Apply = require('apply');

var Model = Apply.Model.extend({
  defaults: {
    title: '',
    location: '/',
    selected: false
  }
});

module.exports = Model;
