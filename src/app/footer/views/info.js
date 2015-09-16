//
// src/app/footer/views/info.js
//
'use strict';

import { ItemView } from 'orchestra';
import template from '../templates/info.hbs';

export default ItemView.extend({
  template,

  bindings: {
    '#col': 'col',
    '#line': 'line'
  },

  onRender() {
    this.stickit();
  },
  onDestroy() {
    this.unstickit();
  }
});
