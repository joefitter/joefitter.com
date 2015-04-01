'use strict';

var Base = require('base');

var FooterModule = Base.Module.extend({
  onStart: function() {
    console.log('footer');
  }
});

module.exports = FooterModule;
