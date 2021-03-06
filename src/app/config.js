//
// src/app/config.js
//
'use strict';

export default {
  header: {
    el: 'header',
    nav: {
      settings: {
        title: '{joeFitter}',
        href: '/',
        ghUsername: 'joefitter',
        ghHref: 'https://github.com/',
        ghRepo: '/joefitter.com',
        ghSrc: '/img/gh.png',
        ghAlt: 'Fork me on GitHub'
      },
      pages: [{
        id: 'home',
        title: 'home',
        href: '/'
      },
      {
        id: 'cv',
        title: 'cv',
        href: '/cv'
      }]
    }
  },
  content: {
    el: '#content'
  },
  footer: {
    el: 'footer'
  }
};
