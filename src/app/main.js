//
// src/app/index.js
//
'use strict';

import Application from './application/application';
import getModules from './modules';
import './router';
import config from './config';

const app = new Application();

config.header.region = app.layout.header;
config.content.region = app.layout.content;
config.footer.region = app.layout.footer;

getModules(app);

app.start(config);
