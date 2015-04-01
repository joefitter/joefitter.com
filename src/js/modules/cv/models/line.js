'use strict';

var Base = require('base');
var prettyPrintJs = require('../helpers/prettyPrintJs');
var Segments = require('../collections/segments');

var Model = Base.Model.extend({
  defaults: {
    line: null
  },
  initialize: function(data) {
    var array = prettyPrintJs(data.line);
    this.set('segments', new Segments(array));
  }

});

module.exports = Model;
