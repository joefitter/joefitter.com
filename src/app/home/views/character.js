//
// src/app/home/views/character.js
//
'use strict';

import { ItemView } from 'orchestra';
import template from '../templates/character.hbs';

export default ItemView.extend({
  template,

  tagName: 'span',

  initialize() {
    this.listenTo(this.model, 'change:className', (model, className) => {
      this.$el.addClass(className);
    });
  }
});
