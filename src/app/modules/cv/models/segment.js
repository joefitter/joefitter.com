'use strict';

var Base = require('base');

var Model = Base.Model.extend({
  defaults: {
    item: null,
    type: 'default'
  }
});

module.exports = Model;
