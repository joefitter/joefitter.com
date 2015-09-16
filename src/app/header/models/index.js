//
// src/app/header/models/index.js
//
'use strict';

import { Model } from 'orchestra';

export default Model.extend({
  defaults: {
    title: null,
    href: null,
    ghUsername: null,
    ghHref: null,
    ghImg: null,
    ghAlt: null,
  }
});
