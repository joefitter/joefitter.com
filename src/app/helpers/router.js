//
// src/app/helpers/router.js
//

'use strict';

var Apply = require('apply');
var channel = Apply.Radio.channel('main');

var AppRouter = Apply.Router.extend({
  routes: {
    '(:id)': 'getContent'
  }
});

var appRouter = new AppRouter();

appRouter.on('route:getContent', function(id) {
  channel.command('routeChanged', id);
});

channel.comply({
  changePage: function(url) {
    this.navigate(url, {
      trigger: true
    });
  }
}, appRouter)

module.exports = appRouter;
