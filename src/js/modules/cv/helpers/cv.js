'use strict';

function JavaScriptDeveloper(name, number, email) {
  this.name = name;
  this.number = number;
  this.email = email;
}

var joeFitter = new JavaScriptDeveloper('Joe Fitter', 07791225443, 'hello@joefitter.com');

joeFitter.about = 'I am not a 9-5 developer. I have a passion for JavaScript that extends beyond career';
