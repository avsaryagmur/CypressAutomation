
describe('Custom Commands', () => {


    it('Handling links', () => {
        // Every element or every link have their own loacator or different type of locator. We will use custom command
        cy.visit("https://demo.nopcommerce.com/");

        cy.clickLink('Apple MacBook Pro 13-inch');
        cy.get('h1').should('have.text' , 'Apple MacBook Pro 13-inch')

    })



    it.only('Overwriting existing commands', () => {
        cy.visit("https://demo.nopcommerce.com/");
        
        cy.clickLink('APPLE MACBOOK PRO 13-inch');
        cy.get('h1').should('have.text' , 'Apple MacBook Pro 13-inch')
    })

    it('Login commands', () => {
        cy.visit("https://demo.nopcommerce.com/");

    })


  })