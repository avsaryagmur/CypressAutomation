
describe('Fixtures', () => {
        const username = "[name='username']" ;
        const password = "[name='password']" ;
        const loginBtn = "[type='submit']" ;

        //Direct access
    it('Login with using json file in fixture folder', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/");

        cy.fixture('orangehrm.json').then( (data) => { // we have to capture some variable in this file

            cy.get(username).type(data.username);
            cy.get(password).type(data.password);
            cy.get(loginBtn).click();
            cy.get('.oxd-topbar-header-title').should('have.text', data.expected);  
        })

    })

    //----------------------------*****----------------------------

    //access through hook - for multiple it blocks
    let  userdata;
    before ( () => {
        cy.fixture('orangehrm.json').then( (data) => { 
          userdata = data;
        })

    })
    it('Login with Hook', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/");

        cy.fixture('orangehrm.json').then( (data) => { // we have to capture some variable in this file

            cy.get(username).type(userdata.username);
            cy.get(password).type(userdata.password);
            cy.get(loginBtn).click();
            cy.get('.oxd-topbar-header-title').should('have.text', userdata.expected);  
        })

    })

    

  })