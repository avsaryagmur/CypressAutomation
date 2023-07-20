
describe('Assertions demo and More', () => {

    it('implicit assertions', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        
        cy.url().should('include', 'orangehrmlive' ).and('not.include', 'test');
        cy.get('.orangehrm-login-branding').should('be.visible').and('exist');
        
    })

    it('Dropdown with select', () => {
        cy.visit("https://www.zoho.com/commerce/free-demo.html");
        
        cy.get('#zcf_address_country').
        select('Turkey').
        should("have.value", 'Turkey');
        
    })

    it('Dropdown without select', () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
        
        cy.get('#select2-billing_country-container').click();
        cy.get('.select2-search__field').type('Germany').type('{enter}'); 
        cy.get('#select2-billing_country-container').should("have.text", 'Germany');
        
    })

    it('Dynamic Dropdown', () => {
        cy.visit("https://www.google.com/");
        
        cy.get("[name='q']").type('automation cypress'); 
        cy.get("div.wM6W7d>span").each(($el, index, $list) => {
            if ($el.text() == 'cypress automation tutorial') {
                // wrap this element so we can
                // use cypress commands on it
                cy.wrap($el).click();
                cy.get('div.wM6W7d>span').should("have.text", 'cypress automation tutorial');

              }
        })
    })
   
  })