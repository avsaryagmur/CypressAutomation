describe('Hook And Tags', () => {
// before -> only ones
// beforeEach
// after -> only ones
// afterEach 

        before( () => {
            cy.log("*****   Launch app   *****");
        })


        after( () => {
            cy.log("*****   Close app   *****");
        
        })

        beforeEach( () => {
            cy.log("*****   Login   *****");
        })


        afterEach( () => {
            cy.log("*****   Logout   *****");
        
        })


    it('search', () => {
        //cy.visit("frfg");
    })

    it('advanced search', () => {
       // cy.visit("");
    })

    it('listing Products', () => {
       // cy.visit("");
    })

    
  })