//
// src/app/modules/home/models/index.js
//

'use strict';

var Apply = require('apply');

var Model = Apply.Model.extend({
  defaults: {
    item: '',
    className: null
  }
});

module.exports = Model;
