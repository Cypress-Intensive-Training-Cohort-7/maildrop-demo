
  const { defineConfig } = require('cypress');
  
  module.exports = defineConfig({
      e2e: {
          baseUrl: 'https://staging.trymima.com/',
          defaultCommandTimeout: 10000,
          viewportHeight: 960,
          viewportWidth: 1530,
          chromeWebSecurity: false,
          // env:{
          //   "MAILOSAUR_API_KEY": ""
          // },
          setupNodeEvents(on, config) {
            // implement node event listeners here
          },
      },
  });
      