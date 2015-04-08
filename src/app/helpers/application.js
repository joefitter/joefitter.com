//
// src/app/helpers/application.js
//

'use strict';

var Backbone = require('backbone');
var Radio = require('backbone.radio')
var channel = Radio.channel('main');
var _ = require('lodash');

module.exports = {
  onBeforeStart: function() {
    channel.comply({
      default: this.cascadeCommands
    }, this);
  },

  onStart: function() {
    Backbone.history.start({
      pushState: true
    });
  },

  // catch any commands sent to main channel
  // and filter down to any interested channels
  cascadeCommands: function(name) {
    var args = Array.prototype.slice.call(arguments);

    var channels = _.filter(Radio._channels, function(channel) {
      return channel.channelName !== 'main';
    });

    _.each(channels, function(channel) {
      if (channel._commands && channel._commands[name]) {
        channel.command.apply(channel, args);
      }
    });
  },

  onBeforeStop: function() {
    channel.reset();
  }
};
