//
// src/app/header/models/page.js
//
'use strict';

import { Model } from 'orchestra';

export default Model.extend({
  defaults: {
    title: '',
    location: '/',
    selected: false
  }
});
