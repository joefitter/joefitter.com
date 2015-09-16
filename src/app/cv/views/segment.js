//
// src/app/cv/views/segment.js
//
'use strict';

import { ItemView } from 'orchestra';
import template from '../templates/segment.hbs';

export default ItemView.extend({

  template,

  tagName: 'span',

  className() {
    return this.model.get('type');
  },

  triggers: {
    mouseenter: 'mouseenter'
  }
});
