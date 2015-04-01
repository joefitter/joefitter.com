'use strict';

var Base = require('base');
var template = require('../templates/page.hbs');
var channel = Base.Radio.channel('main');

var PageView = Base.ItemView.extend({
  template: template,

  events: {
    'click': 'linkClicked'
  },

  linkClicked: function(event) {
    var href = this.model.get('href');

    if (!event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey) {
      event.preventDefault();
    }

    channel.command('changePage', href);

    return false;
  }
});

module.exports = PageView;
