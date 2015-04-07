//
// src/app/modules/home/models/index.js
//

'use strict';

var Base = require('base');

var Model = Base.Model.extend({
  defaults: {
    item: '',
    className: null
  }
});

module.exports = Model;
