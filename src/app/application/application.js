//
// src/app/application/application.js
//
'use strict';

import { Application, history } from 'orchestra';
import LayoutView from './layout-view';

export default Application.extend({
  initialize() {
    this.layout = new LayoutView();
    this.layout.render();
  },

  onStart(){
    history.start({
      pushState: true
    });
  }
});
