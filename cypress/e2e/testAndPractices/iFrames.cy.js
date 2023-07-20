
describe('iFrames', () => {
    it('handle iFrame - approach1', () => {
        //Clear defult text on iFrame and pass a new text on bold
        cy.visit("https://the-internet.herokuapp.com/iframe");  
        const iFrame =  cy.get('#mce_0_ifr')
          .its('0.contentDocument.body')   // 0 -> first iframe element
          .should('have.visible')
          .then(cy.wrap);
        
        iFrame.clear().type("yagmur {cmd+a}"); //select all yagmur text
        cy.get('[aria-label="Bold"]').click(); // make it bold

        });
    it('with Custom Command - approach2', () => {
        cy.visit("https://the-internet.herokuapp.com/iframe");  
        cy.getIframe('#mce_0_ifr').clear().type("yagmur {cmd+a}"); //select all yagmur text
        cy.get('[aria-label="Bold"]').click(); // make it bold

    });

    it('Handle iFrame - approach3', () => {
        cy.visit("https://the-internet.herokuapp.com/iframe");  
        cy.getIframe('#mce_0_ifr').clear().type("yagmur {cmd+a}"); //select all yagmur text
        cy.get('[aria-label="Bold"]').click(); // make it bold

    });
});
