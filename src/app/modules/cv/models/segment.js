//
// src/app/modules/cv/models/segment.js
//

'use strict';

var Apply = require('apply');

var Model = Apply.Model.extend({
  defaults: {
    item: null,
    type: 'default'
  }
});

module.exports = Model;
