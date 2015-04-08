//
// src/app/modules/footer/models/index.js
//

'use strict';

var Apply = require('apply');

var Model = Apply.Model.extend({
  defaults: {
    line: 0,
    col: 0
  }
});

module.exports = Model;
