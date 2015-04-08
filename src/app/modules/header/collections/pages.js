//
// src/app/modules/header/collections/pages.js
//

'use strict';

var Apply = require('apply');
var Model = require('../models/page');

var Collection = Apply.Collection.extend({
  model: Model
});

module.exports = Collection;
