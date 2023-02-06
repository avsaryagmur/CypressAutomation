/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

const xlsx = require('node-xlsx').default;
const fs = require('fs');
const path = require('path');
const { isFileExist } = require('cy-verify-downloads');
const { rmdir } = require('fs');

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits

  // parse xlsx file
  on('task', {
    parseXlsx({ filePath }) {
      return new Promise((resolve, reject) => {
        try {
          const jsonData = xlsx.parse(fs.readFileSync(filePath));
          resolve(jsonData);
        } catch (e) {
          reject(e);
        }
      });
    },
  });

  // reading directory files into array
  on('task', {
    readDirFiles({ filePath }) {
      return new Promise((resolve, reject) => {
        try {
          const files = fs.readdirSync(filePath);
          resolve(files);
        } catch (e) {
          reject(e);
        }
      });
    },
  });

  // check if a file exists
  on('task', {
    isFileExist,
  });

  // delete a folder
  on('task', {
    deleteFolder(folderName) {
      console.log('deleting folder %s', folderName);
      return new Promise((resolve, reject) => {
        rmdir(folderName, { maxRetries: 10, recursive: true }, (err) => {
          if (err) {
            console.error(err);
            return reject(err);
          }
          resolve(null);
        });
      });
    },
  });

  // optional: register cypress-grep plugin code
  // https://github.com/cypress-io/cypress-grep
  require('cypress-grep/src/plugin')(config);
  // make sure to return the config object
  // as it might have been modified by the plugin
  return config;
};
