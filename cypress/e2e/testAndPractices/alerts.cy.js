describe('Alerts', () => {
    it('Javascript Alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get("button[onclick='jsAlert()']").click(); 
        // cypress will automatically close the alert window,
        //+ so we need yo perform any action to handle this 

        cy.on('window:alert' , (e) => {
            expect(e).to.contain('I am a JS Alert'); 
        }) // cy.on -> triggers to events

        //alert window will be closed by cypress, now we can check the message after the alert is closed. 
        cy.get('#result').should('have.text' ,'You successfully clicked an alert');

})
    it('Javascript Confirm Alert - OK', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get("button[onclick='jsConfirm()']").click(); 

        cy.on('window:confirm' , (e) => { //confirmation alert
            expect(e).to.contain('I am a JS Confirm'); 

        })

        //cypress automatically closedthe alert by using OK button-default
        cy.get('#result').should('have.text' ,'You clicked: Ok');

    })
    it('Javascript Confirm Alert - CANCEL', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        cy.get("button[onclick='jsConfirm()']").click(); 

        cy.on('window:confirm' , (e) => { //confirmation alert
            expect(e).to.contain('I am a JS Confirm'); 

        })


        cy.on('window:confirm' , () => false); //automatically closed the alert by using Cancel btn

        cy.get('#result').should('have.text' ,'You clicked: Cancel');

    })
    it('Javascript Prompt Alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts');
        
        cy.window().then((window) => {
            cy.stub(window, 'prompt').returns('yagmur');
        })  // before the opening alert window, we get control on it.
        cy.get("button[onclick='jsPrompt()']").click(); 
        cy.get('#result').should('have.text' ,'You entered: yagmur');

       



    })
    it('Authenticated Alert - inject username and pass to url', () => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {auth: 
                                                                    {
                                                                      username: "admin",
                                                                      password: "admin"
                                                                    }
                                                                   });
        cy.get('[id="content"] p').should('have.contain', 'Congratulations! You must have the proper credentials.');


    })
    it('Authenticated Alert - as parameters of visit', () => {
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth');
        cy.get('[id="content"] p').should('have.contain', 'Congratulations! You must have the proper credentials.');


    })



})
