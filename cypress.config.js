const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  pageLoadTimeout: 60000,
  defaultCommandTimeout: 60000,
  retries: 3,
  chromeWebSecurity: false,
  grepOmitFiltered: true,
  grepFilterSpecs: true,
  downloadsFolder: 'cypress/downloads',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return require('./cypress/plugins/index.js')(on, config);
    },
  },
});
