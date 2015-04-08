//
// src/app/modules/cv/collections/lines.js
//

'use strict';

var Apply = require('apply');
var Model = require('../models/line');

var Collection = Apply.Collection.extend({
  model: Model
});

module.exports = Collection
