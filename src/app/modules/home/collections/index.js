//
// src/app/modules/home/collections/index.js
//

'use strict';

var Base = require('base');
var Model = require('../models');

var Collection = Base.Collection.extend({
  model: Model
});

module.exports = Collection;
