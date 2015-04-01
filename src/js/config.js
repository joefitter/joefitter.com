'use strict';

module.exports = {
  page: {
    el: '#app'
  },
  header: {
    el: '#header',
    pages: [{
      title: 'Home',
      href: '/',
    },
    {
      title: 'CV',
      href: '/cv'
    }],
    github: {
      username: 'joefitter',
      href: 'https://github.com/',
      img: '',
      alt: 'Fork me on GitHub',
    }
  },
  content: {
    el: '#content'
  }
}
