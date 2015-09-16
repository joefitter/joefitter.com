//
// src/app/header/views/page.js
//
'use strict';

import { ItemView, Radio } from 'orchestra';
import template from '../templates/page.hbs';

const channel = Radio.channel('router');

export default ItemView.extend({
  template,

  tagName: 'li',

  events: {
    'click': 'linkClicked'
  },

  initialize() {
    this.listenTo(this.model, 'change', () => {
      this.render();
    });
  },

  linkClicked(event) {
    const href = this.model.get('href');

    if (!event.altKey && !event.ctrlKey && !event.metaKey && !event.shiftKey) {
      event.preventDefault();
    }

    channel.request('changePage', href);

    return false;
  }
});
