'use strict';

var Base = require('base');

var Model = Base.Model.extend({
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
