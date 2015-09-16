//
// src/app/content/index.js
//
'use strict';

import { _, Module, Radio} from 'orchestra';

const channel = Radio.channel('content');

export default Module.extend({

  onBeforeStart() {
    channel.reply({
      routeChanged: this.updateContent
    }, this);
  },

  onStart(config) {
    this.config = config.content;
  },

  updateContent(page) {
    page = page || 'home';
    _.each(this.submodules, (submodule) => {
      submodule.stop();
    });
    if (_.keys(this.submodules).indexOf(page) !== -1) {
      this.submodules[page].start(this.config);
    }
  }

});
