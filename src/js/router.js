'use strict';

var Base = require('base');
var channel = Base.Radio.channel('main');

var AppRouter = Base.Router.extend({
  routes: {
    '(:id)': 'getContent',
    '': 'showHash'
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
