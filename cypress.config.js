const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    chromeWebSecurity:false,
    defaultCommandTimeout:10000,
    screenshotOnRunFailure:false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
