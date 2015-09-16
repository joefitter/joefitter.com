//
// src/app/cv/models/cv.js
//
'use strict';

class Developer {
  constructor(name, number, email) {
    this.name = name;
    this.number = number;
    this.email = email;
  }

  setEmploymentHistory(employmentHistory) {
    this.employmentHistory = employmentHistory;
  }

  setAbout(about) {
    this.about = about;
  }
}

class JavaScriptDeveloper extends Developer {
  setSkills(skills) {
    this.skills = skills;
  }
}

const joeFitter = new JavaScriptDeveloper('Joe Fitter', '0' + 7791225443, 'hello@joefitter.com');

//jscs:disable maximumLineLength
joeFitter.setAbout('I am not a 9-5 developer. I have a passion for JavaScript that extends beyond career. I always code by hand. I use Sublime Text 3. A lot. I never fall in love with code. I prefer removing code to writing it. I get excited by RESTful API’s. I’m a big fan of Marionette. I prefer JSON to XML, Gulp to Grunt, Browserify to Require, NPM to Bower, Sass to Less and Mocha to Jasmine. I code quickly. And accurately. I learn as fast as I code. I turn designs into pixel-perfect cross-browser and semantic HTML/CSS. I have a firm grasp of UX principles. And how to apply them. Oh, and I have a pretty good eye for design too.');

joeFitter.setSkills({
  clientSide: {
    javaScript: {
      native: 'advanced \'vanilla\' JavaScript ~ 5 years',
      frameworks: {
        backbone: 'advanced Backbone development on large modular web applications, vast experience using Marionette, Backbone.Radio, Backbone.Stickit, Backbone.Cocktail ~ 3.5 years',
        jQuery: 'enterprise level optimised jQuery ~ 5 years',
        angular: 'smaller scale prototype/POC development ~ 1.5 years',
        react: 'experience creating a few single page applications, including using FLUX architecture',
        meteor: 'experience building an isomorphic single page application'
      },
      tooling: {
        taskRunners: ['gulp', 'grunt'],
        modularity: {
          amd: 'RequireJS ~ 2.5 years',
          commonJS: 'Browserify ~ 1.5 years',
          es6: {
            babel: 'Enterprise level large scale application ~ 9 months',
            jspm: '2 small applications ~ 3 months'
          }
        },
        testing: ['mocha', 'expectjs', 'sinonjs', 'jasmine', 'karma', 'selenium', 'phantomJS'],
        linting: ['jscs', 'jsHint'],
        templating: ['handlebars', 'mustache', 'underscore'],
      },
      dataVisualisation: ['d3.js', 'c3.js', 'highcharts', 'three.js']
    },
    layout: {
      html: 'Cross-browser, standards-compliant HTML5',
      css: [
        'Sass/Compass',
        'Less',
        'CSS3 including responsive and adaptive layouts',
        'Bootstrap/Foundation for prototyping/POC',
      ]
    }
  },
  serverSide: {
    nodeJS: 'Express and Hapi application frameworks. Experience with RESTful HATEOAS api development',
    php5: {
      language: 'Object orientated ~ 3 years',
      web: [
        'WordPress custom theme/plugin development ~ 3.5 years',
        'Magento & Joomla development'
      ],
      testing: 'PHPUnit'
    },
    java: 'Proficient in Java API development and testing using HTML Unit & Selenium ~ 2 years'
  },
  general: {
    agile: 'Scrum - 3.5 years. Certified ScrumMaster with radtac',
    cloudComputing: 'Amazon Web Services EC2, S3, SNS',
    sourceControl: 'GitLab, GitHub, Mercurial',
    search: 'Lucene, Solr, ElasticSearch',
    apiIntgration: ['Twitter', 'Facebook', 'LinkedIn', 'Twilio', 'Google Maps', 'AdWords'],
    adwordsScripts: 'Bespoke management of campaign budgets through AdWords Scripts',
    userExperience: 'Good knowledge of UX principles and experience running user testing sessions',
    softwareAndServices: ['Sublime Text 3', 'zsh', 'VirtualBox', 'Eclipse', 'Firebase', 'Heroku', 'Travis', 'Jira', 'Confluence', 'testrail', 'TeamCity', 'Greenhopper', 'Bamboo', 'FishEye', 'Hudson', 'Vagrant', 'Ansible', 'Liquibase', 'PuTTY', 'Linux server admin', 'Mac/Linux/Windows development', 'PhotoShop', 'GIMP', 'Illustrator', 'InDesign']
  }
});

joeFitter.setEmploymentHistory([
  {
    position: 'JavaScript Developer / ScrumMaster',
    company: 'pebble {code}',
    from: new Date('June 2014'),
    to: new Date(), // current
    details: 'Since starting at pebble {code} I have been working on an online Bingo platform for one of our clients, Bede Gaming. Within three months of joining I took over leadership of the 10 strong agile team and have since overseen many architectural enhancements. These include components as private NPM modules, each individually testable; the progression from RequireJS to Browserify, Grunt to Gulp, global Marionette application events to Backbone.Radio and the development of <a href="https://www.npmjs.com/package/orchestra" target="_blank">Orchestra</a> - our own application framework built on top of Backbone.Marionette. We are a distributed team located in London, Brighton, Newcastle and Sofia. My day to day duties include leading daily Scrum meetings, grooming, retrospective, sprint planning and all other Scrum ceremonies; coordinating releases - we have moved from a monthly release to a near continuous delivery cycle; managing our deployments to development and QA environments and communicating with the other teams across the company; investigating and undertaking architectural enhancements by keeping up to date with the ever progressing JavaScript community; mentoring junior developers and reviewing/merging all pull requests. Since being at Pebble I have taken part in two hack days, the first where I worked with a team of C# developers to create a GitHub dashboard for the company showing commit leaderboards, live commits, lines of code changes and consecutive days, this was build with Facebook React.js and D3 for the dava visualisations; the second was an individual 8 hour hack where I built a 3D globe in three.js and plotted realtime earthquakes using a data source from Firebase. <a href="https://twitter.com/pebblecode/status/563667312474337281" target="_blank">Tweet</a> from Pebble Code.'
  },
  {
    position: 'Front End Application Developer',
    company: 'iCrossing UK',
    from: new Date('May 2012'),
    to: new Date('June 2014'),
    details: 'As the sole Front End Appication Developer at iCrossing, I was responsible for the user interface of every application we worked on. Shortly after joining I built a complete Paid Search ad-monitoring application from the ground up – this was intended as a pet project for my first few months but has since been deployed across their offices in Europe and the US. Since then I converted their all-in-one SEO application from Apache Wicket to a RESTful Backbone interface which communicated with a Java Spring API; I created many one-off interfaces including interactive visualisations, developed many small ad-hoc applications, rebuilt the company blog, and developed many projects for clients such as a parallax jQuery plugin for M&S and a client dashboard for Sainsbury’s Bank. I built responsive content managed websites for 2 local charities as part of a local Skills Exchange project. I also regularly assisted the creative team by providing advice and assistance on many client development projects and offered training in HTML, CSS and JavaScript.'
  },
  {
    position: 'Freelance Web Application Developer',
    company: 'Joe Fitter Development',
    from: new Date('Nov 2010'),
    to: new Date(), // current
    details: 'I offer on-going development expertise to a number of companies on a freelance basis. These include iCrossing UK - since leaving employment with iCrossing I have developed a bespoke mobile/desktop carousel framework for M&S Bank Articles. This currently sits within their website and allows web designers to code one page of html to suit multiple devices. An example of a finished article using the framework can be seen <a href="http://bank.marksandspencer.com/explore/articles/how-to-build-a-capsule-wardrobe/ar0028/" target="_blank">Here</a>. I also take occasional jobs for East Web, the most notible of which is a bespoke online-entry, payment, ticket purchase and back-office fulfilment system for Brighton & Hove Business Awards 2013. The same system was used for Sussex Business Awards 2013, and then again for Lewes Business Awards and the Brighton & Hove Business Awards in 2014. I have also helped East Web with multiple WordPress and Magento plugins, custom theme features and other ad hoc tasks which fall outside the skill-set of their in-house web developer. Previously I worked for Rebob/Yellow60 on a freelance basis between November 2010 and June 2013 where I developed around 40 websites ranging from static html micro-sites to large content-managed ecommerce sites.'
  }
]);
//jscs:enable maximumLineLength
export default joeFitter;
