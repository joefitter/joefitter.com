//
// src/app/modules/footer/views/index.js
//

'use strict';

var Apply = require('apply');
var CreditsView = require('./credits');
var InfoView = require('./info');
var template = require('../templates/index.hbs');

var View = Apply.LayoutView.extend({
  regions: {
    credits: '#credits',
    info: '#info'
  },
  onRender: function() {
    this._showViews();
  },
  _showViews: function() {
    var creditsView = new CreditsView();
    this.getRegion('credits').show(creditsView);

    var infoView = new InfoView({
      model: this.model
    });

    this.getRegion('info').show(infoView)
  },
  template: template,
  className: 'wrapper'
});

module.exports = View;
