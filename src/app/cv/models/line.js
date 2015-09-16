//
// src/app/cv/models/line.js
//
'use strict';

import { Model } from 'orchestra';
import prettyPrintJs from '../helpers/prettyPrintJs';
import Segments from '../collections/segments';

export default Model.extend({
  defaults: {
    line: null
  },
  initialize(data) {
    const array = prettyPrintJs(data.line);
    this.set('segments', new Segments(array));
  }
});
