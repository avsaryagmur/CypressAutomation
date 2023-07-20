const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');


module.exports = defineConfig({
  watchForFileChanges: false,
  pageLoadTimeout: 60000,
  defaultCommandTimeout: 60000,
  retries: 3,
  chromeWebSecurity: false,
  grepOmitFiltered: true,
  grepFilterSpecs: true,
  downloadsFolder: 'cypress/downloads',
  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });

      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });
      
      return require('./cypress/plugins/index.js')(on, config);
     
    },
  },
});
