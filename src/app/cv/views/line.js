//
// src/app/cv/views/line.js
//
'use strict';

import { _, CollectionView } from 'orchestra';
import SegmentView from './segment';
import EmptyView from './empty';

export default CollectionView.extend({
  childView: SegmentView,
  emptyView: EmptyView,
  tagName: 'li',

  childEvents: {
    mouseenter: 'childViewHovered'
  },

  initialize() {
    this.collection = this.model.get('segments');
  },

  childViewHovered(view) {
    const model = view.model;
    const collection = model.collection;
    const index = collection.indexOf(model);
    const items = collection.pluck('item');
    const col = _.slice(items, 0, index + 1).join('').length;
    this.triggerMethod('childHovered', col);
  },

  onBeforeRender() {
    const numberOfTabs = _.dropRightWhile(this.collection.models, model => model.get('type') !== 'tab').length;

    if (!numberOfTabs) {
      return;
    }
    this.$el.addClass('tabs-' + numberOfTabs);
  }
});
