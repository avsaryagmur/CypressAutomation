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

  /* We modifate and create a command for iframe
  modifate this: 
       const iFrame =  cy.get('#mce_0_ifr')
          .its('0.contentDocument.body')   // 0 -> first iframe element
          .should('have.visible')
          .then(cy.wrap);
  */
  Cypress.Commands.add('getIframe', (iframe)=> {
     return  cy.get(iframe)
    .its('0.contentDocument.body')   // 0 -> first iframe element
    .should('have.visible')
    .then(cy.wrap);

  })
  
  Cypress.Commands.add('iframe', { prevSubject: 'element' }, ($iframe) => {
    return new Cypress.Promise((resolve) => {
      $iframe.ready(function () {
        resolve($iframe.contents().find('body'));
      });
    });
  });


  //custom command for clicking on link using label
  Cypress.Commands.add('clickLink' , (label)=> {
    cy.get('a').contains(label).click();
  })

  /*
  //Over write command
  Cypress.Commands.overwrite('contains', (originalFn, subject, filter, text, options = {}) => {
     // determine if a filter argument was passed
     if(typeof text === 'object'){
      options = text
      text = filter
      filter = undefined
     }

     options.matchCase = false

     return originalFn(subject, filter, text, options)
  })
  
*/

Cypress.Commands.overwrite('contains', (originalFn, subject, filter, text, options = {}) => {})