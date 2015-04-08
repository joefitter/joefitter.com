//
// src/app/modules/page/models/index.js
//

'use strict';

var Apply = require('apply');

var Model = Apply.Model.extend({
  defaults: {
    name: 'Guest'
  }
});

module.exports = Model;
