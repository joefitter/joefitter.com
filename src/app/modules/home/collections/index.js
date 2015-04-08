//
// src/app/modules/home/collections/index.js
//

'use strict';

var Apply = require('apply');
var Model = require('../models');

var Collection = Apply.Collection.extend({
  model: Model
});

module.exports = Collection;
