'use strict';

var Base = require('base');

var HomeModule = Base.Module.extend({
  startWithParent: false,
  onStart: function() {
    console.log('home module started');
  },
  onBeforeStop: function() {
    console.log('home module stopped');
  }
});

module.exports = HomeModule;
