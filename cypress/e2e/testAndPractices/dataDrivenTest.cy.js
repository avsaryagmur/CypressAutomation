
describe('Data Driven Test', () => {
        const username = "[name='username']" ;
        const password = "[name='password']" ;
        const loginBtn = "[type='submit']" ;
        const loginErrorAlert = ".oxd-alert-content > .oxd-text";

    it('Login with using json file in fixture folder for each data input', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/");

        cy.fixture('orangehrm-datadriven.json').then( (data) => { // we are getting entire data in json file

           // we need to iterate for every data input we have to repeat multiple times
           data.forEach( (userdata) => {
            cy.get(username).type(userdata.username);
            cy.get(password).type(userdata.password);
            cy.get(loginBtn).click();

            //assertion should be different for successful login and unsuccessful login 
            if(userdata.username == 'Admin' && userdata.password == 'admin123'){
                cy.get('.oxd-topbar-header-title').should('have.text', userdata.expected);  

                //Logout
                cy.get('.oxd-userdropdown-tab').click();
                cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
            }
            else{
                cy.get(loginErrorAlert).should('have.text', userdata.expected);

            }

           })
        })

    })
   

  })