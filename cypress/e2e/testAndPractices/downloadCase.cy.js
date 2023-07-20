import { Login } from "../../pageObjects/LoginPage.js";

describe('Download Cases', () => {
    
/* NOTE: When it download the file, it opens a new window and download it
Cypress does not test the new window but does check for a successes message shown on the page being tested.
This issue does not happen on Cypress interactive mode (so only seen on headless).Please run it in Chrome:

 cypress run --spec cypress/e2e/testAndPractices/downloadCase.cy.js --browser chrome
*/

    let  userdata;
    before ( () => {
        cy.fixture('orangehrm.json').then( (data) => { 
          userdata = data;
        })

    })

    it('Download File and Check It', () => {
    const loginPage = new Login();

    cy.visit("https://opensource-demo.orangehrmlive.com/");
    
    cy.get(loginPage.usernameInput).type(userdata.username);
    cy.get(loginPage.passwordInput).type(userdata.password);
    cy.get(loginPage.loginBtn).click();
    cy.wait(3000);
    cy.get(loginPage.verfiyLogin).should('be.visible').and('have.text', userdata.expected);

  //  cy.get("(//span[normalize-space()='My Info'])[1]").click();
    cy.get(':nth-child(6) > .oxd-main-menu-item').click();
    cy.get(':nth-child(5) > .orangehrm-tabs-item').click({force: true} );  //--.oxd-icon.bi-download
    cy.get('.oxd-icon.bi-download').should('be.visible').click({force: true} );
    cy.wait(5000);
    verifyDownloadedTxt();

})

function verifyDownloadedTxt(){
  cy.readFile(`cypress/downloads/Immigration.txt`).should(
    'be.not.empty').and('contain',
    'dsfafdsdfsafdssdfsfadsfd',
  );
}

})