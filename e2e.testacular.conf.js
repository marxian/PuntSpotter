// Testacular configuration

// base path, that will be used to resolve files and exclude
basePath = '';

// list of files / patterns to load in the browser
files = [
  ANGULAR_SCENARIO,
  ANGULAR_SCENARIO_ADAPTER,
  'test/e2e/*.js',
  'test/e2e/**/*.js'
];

// web server port
port = 8080;

// cli runner port
runnerPort = 9100;

proxies =  {
    '/': 'http://localhost:9000/'
  };


// list of files to exclude
exclude = [];

// test results reporter to use
// possible values: dots || progress
reporter = 'progress';

autoWatch = false;

// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari
// - PhantomJS
browsers = ['PhantomJS'];


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = true;