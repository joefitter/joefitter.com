//
// src/app/modules/index.js
//
'use strict';

import HeaderModule from './header';
import ContentModule from './content';
import CvModule from './cv';
import HomeModule from './home';
import FooterModule from './footer';

export default function(app) {
  // app.module('page', {
  //   moduleClass: PageModule
  // });

  app.module('header', {
    moduleClass: HeaderModule
  });

  app.module('content', {
    moduleClass: ContentModule
  });

  app.module('content.cv', {
    moduleClass: CvModule
  });

  app.module('content.home', {
    moduleClass: HomeModule
  });

  app.module('footer', {
    moduleClass: FooterModule
  });
}
