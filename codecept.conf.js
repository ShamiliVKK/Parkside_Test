exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://en.wikipedia.org/wiki/Metis_(mythology)',
      browser: 'chrome',
      restart: false,
      waitForTimeout: 2000
    }
  },
  include: {
    I: './steps_file.js'
  },
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone']
    }
  },
  bootstrap: null,
  mocha: {},
  name: 'vikramnarayanan'
}
