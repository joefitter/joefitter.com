//
// src/app/home/views/index.js
//
'use strict';

import { CompositeView } from 'orchestra';
import CharacterView from './character';
import template from '../templates/index.hbs';

export default CompositeView.extend({
  template,

  childView: CharacterView,

  childViewContainer: 'p',

  className: 'wrapper',
});
