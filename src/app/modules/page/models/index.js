'use strict';

var Base = require('base');

var Model = Base.Model.extend({
  defaults: {
    name: 'Guest'
  }
});

module.exports = Model;
