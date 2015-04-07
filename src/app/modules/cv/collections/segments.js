'use strict';

var Base = require('base');
var Model = require('../models/segment');

var Collection = Base.Collection.extend({
  model: Model
});

module.exports = Collection;
