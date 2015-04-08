//
// src/app/modules/cv/collections/segments.js
//

'use strict';

var Apply = require('apply');
var Model = require('../models/segment');

var Collection = Apply.Collection.extend({
  model: Model
});

module.exports = Collection;
