// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

require('cy-verify-downloads').addCustomCommand();
import 'cypress-file-upload';

Cypress.Commands.add('parseXlsx', (inputFile) => {
    return cy.task('parseXlsx', { filePath: inputFile });
  });
  
  Cypress.Commands.add('readDirFiles', (inputDir) => {
    return cy.task('readDirFiles', { filePath: inputDir });
  });
  
  Cypress.Commands.add('deleteFolder', (folderName) => {
    return cy.task('deleteFolder', folderName);
  });
  
  Cypress.Commands.add('iframe', { prevSubject: 'element' }, ($iframe) => {
    return new Cypress.Promise((resolve) => {
      $iframe.ready(function () {
        resolve($iframe.contents().find('body'));
      });
    });
  });
  
