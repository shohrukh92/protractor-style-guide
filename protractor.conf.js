var SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
  // Set directConnect to true to use Chrome's or Firefox's webdriver,
  // instead of selenium server.
  // When directConnect is true the seleniumAddress configuration is skipped.
  directConnect: true,

  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Spec patterns are relative to the location of this config.
  specs: [
    'specs/*_spec.js'
  ],

  // The below line of code is an example of the following ...
  // ... Protractor's style guide rule advantage:
  // Make your tests independent from each other.
  // You can run suites in isolation.
  suites: {
    smoke: 'specs/smoke_test_spec.js'
  },

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {'args': ['--disable-extensions']},

    // The below 2 lines of code are an example of the following ...
    // ... Protractor's style guide rule advantage:
    // Make your tests independent from each other.
    // You can run tests in parallel with sharding.
    shardTestFiles: true,
    maxInstances: 3
  },

  // A base URL for your application under test. Calls to protractor.get()
  // with relative paths will be prepended with this.
  baseUrl: 'http://www.protractortest.org/#/',

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
