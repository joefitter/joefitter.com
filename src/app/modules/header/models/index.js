//
// src/app/modules/header/models/index.js
//

'use strict';

var Apply = require('apply');

var Model = Apply.Model.extend({
  defaults: {
    title: null,
    href: null,
    ghUsername: null,
    ghHref: null,
    ghImg: null,
    ghAlt: null,
  }
});

module.exports = Model;
