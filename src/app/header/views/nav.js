//
// src/app/header/views/nav.js
//
'use strict';

import { CompositeView } from 'orchestra';
import PageView from './page';
import template from '../templates/nav.hbs';

export default CompositeView.extend({
  template,
  childView: PageView,
  childViewContainer: 'ul'
});
