//
// src/app/modules/home/controllers/index.js
//

'use strict';

var Apply = require('apply');
var app = Apply.getInstance();
var Collection = require('../collections');
var View = require('../views');
var formatting = require('../constants/formatting');
var _ = require('lodash');
var fs = require('fs');
var text = fs.readFileSync(__dirname + '/../constants/index.txt', 'utf8');
var mainChannel = Apply.Radio.channel('main');

var Controller = Apply.Object.extend({
  initialize: function(config) {
    this.config = config;
    this.text = [];

    this.info = {
      line: 1,
      col: 1
    };

    // grab links whole.
    var arr = text.split(/(<a[^>]*>[^<]*<\/a>)/g);

    _.each(arr, function(item) {
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

  _show: function() {
    if (!app.content) {
      return;
    }

    var view = new View({
      collection: this.collection
    });

    app.content.show(view);
  },

  startCursor: function(i, closing) {
    var item = this.text[i];
    var skip = false;
    var delay = 60; //ms

    if (item === '\n') {
      this.info.line ++;
      this.info.col = 1;
    } else {
      this.info.col ++;
    }

    mainChannel.command('updateInfo', this.info);

    if (this.text[i] === '\n' && this.text[i + 1] === '\n') {
      delay = 600;
    } else if (this.text[i - 1] && this.text[i - 1].indexOf('<a href') !== -1) {
      delay = 1000;
    }

    closing = closing || [];
    this._timeout = _.delay(_.bind(function() {

      if (closing[closing.length - 1] === item) {
        closing.pop();
        skip = true;
      }

      if (!skip) {
        this.collection.add({
          item: item
        }, {
          // if we have pre-printed closing parenthesis, insert character before these.
          at: closing.length ? this.collection.length - closing.length : this.collection.length
        });
      }

      _.each(formatting.enclosing, function(encl) {
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

      _.each(_.keys(formatting.highlight), function(key) {

        var group = formatting.highlight[key];
        _.each(group, function(word) {
          if (this.text[i] && this.text[i].indexOf(word) !== -1) {
            this.collection.at(i).set('className', key);
            return;
          }
          if (i >= word.length - 1) {
            if (this.text.slice(i - word.length, i).join('') === word) {
              _.each(this.collection.slice(i - word.length, i), function(model) {
                model.set('className', key);
              });
            }
          }
        }, this);
      }, this);

      if (i < this.text.length - 1) {
        this.startCursor(i + 1, closing);
      }
    }, this), delay);
  },

  _hide: function() {
    var region = app.content;
    var view = region.currentView;

    region.reset();
    if (view) {
      delete view.el;
      delete view.$el;
    }
  },

  onDestroy: function() {
    clearTimeout(this._timeout);
    this._hide();
  }

});

module.exports = Controller;
