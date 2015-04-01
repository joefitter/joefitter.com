'use strict';

var Base = require('base');

var Model = Base.Model.extend({
  defaults: {
    title: '',
    location: '/'
  }
});

module.exports = Model;
