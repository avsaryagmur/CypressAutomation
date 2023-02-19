
describe('My First Test', () => {

    it('verify Title', () => {
     
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.title().should('eq', 'OrangeHRM');
    })
  })