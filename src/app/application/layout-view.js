//
// src/app/application/layout-view
//
'use strict';

import { LayoutView } from 'orchestra';
import template from './layout-template.hbs';

export default LayoutView.extend({
  template,

  el: '#app',

  regions: {
    header: 'header',
    content: '#content',
    footer: 'footer'
  }
});
