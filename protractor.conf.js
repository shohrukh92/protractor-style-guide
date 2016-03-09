var SpecReporter = require('jasmine-spec-reporter');

exports.config = {
  // Set directConnect to true to use Chrome's or Firefox's webdriver,
  // instead of selenium server.
  // When directConnect is true the seleniumAddress configuration is skipped.
  directConnect: true,

  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Spec patterns are relative to the location of this config.
  specs: [
    'spec/*_spec.js'
  ],

  suites: {
    smoke: 'spec/smoke_test_spec.js'
  },

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {'args': ['--disable-extensions']},
    shardTestFiles: true,
    maxInstances: 3
  },

  // A base URL for your application under test. Calls to protractor.get()
  // with relative paths will be prepended with this.
  baseUrl: 'http://angular.github.io/protractor/',

  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: false,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 10000
  },

  // Define things that will happen before start testing.
  onPrepare: function() {
    // Add jasmine spec reporter
    jasmine.getEnv().addReporter(new SpecReporter({
      displayFailuresSummary: true,
      displayFailedSpec: true,
      displaySuiteNumber: true,
      displaySpecDuration: true
    }));

    browser.driver.manage().window().maximize();
  }
};
