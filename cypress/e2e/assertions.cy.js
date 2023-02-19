
describe('Assertions demo', () => {

    it('implicit assertions', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        
        cy.url().should('include', 'orangehrmlive' ).and('not.include', 'test');
        cy.get('.orangehrm-login-branding').should('be.visible').and('exist');

        
    })
  })