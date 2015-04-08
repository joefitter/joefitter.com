//
// src/app/modules/cv/models/line.js
//

'use strict';

var Apply = require('apply');
var prettyPrintJs = require('../helpers/prettyPrintJs');
var Segments = require('../collections/segments');

var Model = Apply.Model.extend({
  defaults: {
    line: null
  },
  initialize: function(data) {
    var array = prettyPrintJs(data.line);
    this.set('segments', new Segments(array));
  }

});

module.exports = Model;
