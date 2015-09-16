//
// src/app/home/controllers/index.js
//
'use strict';

import { Object as Controller, _, Radio} from 'orchestra';
import Collection from '../collections';
import View from '../views';
import formatting from '../constants/formatting';
var fs = require('fs');

const text = fs.readFileSync(__dirname + '/../constants/index.txt', 'utf8');
const footerChannel = Radio.channel('footer');

export default Controller.extend({
  initialize() {
    this.text = [];

    this.info = {
      line: 1,
      col: 1
    };

    // grab links whole.
    const arr = text.split(/(<a[^>]*>[^<]*<\/a>)/g);

    _.each(arr, item => {
      if (item.match(/(<a[^>]*>[^<]*<\/a>)/g)) {
        return this.text.push(item);
      }
      // split everything else
      this.text.push(item.match(/[\s\S]/g));
    }, this);

    this.text = _.flatten(this.text);

    this.collection = new Collection();

    this._show();
    this.startCursor(0);
  },

  _show() {
    const region = this.options.region;
    const view = new View({
      collection: this.collection
    });

    region.show(view);
  },

  startCursor(i, closing) {
    const item = this.text[i];
    let skip = false;
    let delay = 60; //ms

    if (item === '\n') {
      this.info.line ++;
      this.info.col = 1;
    } else {
      this.info.col ++;
    }

    footerChannel.request('updateInfo', this.info);

    if (this.text[i] === '\n' && this.text[i + 1] === '\n') {
      delay = 600;
    } else if (this.text[i - 1] && this.text[i - 1].indexOf('<a href') !== -1) {
      delay = 1000;
    }

    closing = closing || [];
    this._timeout = _.delay(() => {

      if (closing[closing.length - 1] === item) {
        closing.pop();
        skip = true;
      }

      if (!skip) {
        this.collection.add({ item }, {
          // if we have pre-printed closing parenthesis, insert character before these.
          at: closing.length ? this.collection.length - closing.length : this.collection.length
        });
      }

      _.each(formatting.enclosing, encl => {
        if (encl.opening === item) {
          // pre-add closing symbol if opening detected.
          this.collection.add({
            item: encl.closing
          }, {
            at: closing.length ? this.collection.length - closing.length : this.collection.length
          });
          closing.push(encl.closing);
        }
      }, this);

      _.each(_.keys(formatting.highlight), key => {

        const group = formatting.highlight[key];
        _.each(group, word => {
          if (this.text[i] && this.text[i].indexOf(word) !== -1) {
            this.collection.at(i).set('className', key);
            return;
          }
          if (i >= word.length - 1) {
            if (this.text.slice(i - word.length, i).join('') === word) {
              _.each(this.collection.slice(i - word.length, i), model => {
                model.set('className', key);
              });
            }
          }
        });
      });

      if (i < this.text.length - 1) {
        this.startCursor(i + 1, closing);
      }
    }, delay);
  },

  _hide() {
    const region = this.options.region;
    const view = region.currentView;

    region.reset();
    if (view) {
      delete view.el;
      delete view.$el;
    }
  },

  onDestroy() {
    clearTimeout(this._timeout);
    this._hide();
  }

});
