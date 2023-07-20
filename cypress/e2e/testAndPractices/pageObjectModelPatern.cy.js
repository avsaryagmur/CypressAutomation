import { Login } from "../../pageObjects/LoginPage.js";

describe('POM Pattern', () => {
    

    let  userdata;
    before ( () => {
        cy.fixture('orangehrm.json').then( (data) => { 
          userdata = data;
        })

    })

    it('Login with POM Pattern', () => {
    const loginPage = new Login();

    cy.visit("https://opensource-demo.orangehrmlive.com/");
    
    cy.get(loginPage.usernameInput).type(userdata.username);
    cy.get(loginPage.passwordInput).type(userdata.password);
    cy.get(loginPage.loginBtn).click();
    cy.wait(3000);
    cy.get(loginPage.verfiyLogin).should('be.visible').and('have.text', userdata.expected);








})

})