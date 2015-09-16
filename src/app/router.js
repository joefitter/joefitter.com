//
// src/app/router.js
//
'use strict';

import { Router, Radio } from 'orchestra';

const channel = Radio.channel('router');
const contentChannel = Radio.channel('content');
const headerChannel = Radio.channel('header');

const AppRouter = Router.extend({
  routes: {
    '(:id)': 'getContent'
  }
});

const appRouter = new AppRouter();

appRouter.on('route:getContent', id => {
  contentChannel.request('routeChanged', id);
  headerChannel.request('routeChanged', id);
});

channel.reply({
  changePage(url) {
    this.navigate(url, {
      trigger: true
    });
  }
}, appRouter);

export default appRouter;
