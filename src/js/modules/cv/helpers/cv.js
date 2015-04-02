'use strict';

function JavaScriptDeveloper(name, number, email) {
  this.name = name;
  this.number = number;
  this.email = email;
}

var joeFitter = new JavaScriptDeveloper('Joe Fitter', '0' + 7791225443, 'hello@joefitter.com');

joeFitter.about = 'I am not a 9-5 developer. I have a passion for JavaScript that extends beyond career. I always code by hand. I use Sublime Text 3. A lot. I never fall in love with code. I prefer removing code to writing it. I get excited by RESTful API’s. I’m a big fan of the MEAN stack. I prefer JSON to XML. I code quickly. And accurately. I learn as fast as I code. I turn designs into pixel-perfect semantic HTML/CSS. Oh, and I’m pretty handy with server-side too.';

joeFitter.skills = {
  frontEnd: {
    javaScript: {
      native: 'advanced \'vanilla\' JavaScript ~ 4.5 years',
      frameworks: {

      }
    }
  }
};

module.exports = joeFitter;
