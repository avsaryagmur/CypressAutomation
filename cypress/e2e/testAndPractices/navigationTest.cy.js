
describe('Navigation Test', () => {


    it('Navigation on Page', () => {
        cy.visit("https://demo.opencart.com/");
        cy.title().should('eq', 'Your Store'); //Home page

        cy.get(':nth-child(7) > .nav-link').click(); // Cameras
        cy.title().should('eq', 'Cameras');

        cy.go('back');
        cy.title().should('eq', 'Your Store'); //Home page

        cy.go('forward');
        cy.title().should('eq', 'Cameras'); // Cameras


        cy.go(-1);
        cy.title().should('eq', 'Your Store'); //Home page

        cy.go(1);
        cy.title().should('eq', 'Cameras'); // Cameras

        
        cy.reload();

    })


  })