//
// src/app/cv/views/index.js
//
'use strict';

import { CollectionView } from 'orchestra';
import LineView from './line';

export default CollectionView.extend({
  tagName: 'ol',
  id: 'cv',
  className: 'wrapper',
  childView: LineView,
  childEvents: {
    childHovered(childView, column) {
      this.triggerMethod('childHovered', {
        line: childView._index + 1,
        col: column
      });
    }
  }
});
