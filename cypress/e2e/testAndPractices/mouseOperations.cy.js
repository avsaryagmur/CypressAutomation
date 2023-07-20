require('@4tw/cypress-drag-drop') //drag and drop
describe('Mouse Operations', () => {
    it('MouseHover', () => {
        cy.visit('https://demo.opencart.com/');
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click();
        cy.get('body > main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)')
           .should('be.visible');

    })

    it('Right click - Approach1', () => {
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html');


        cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu');  //right click
        cy.get('.context-menu-icon-copy').should('be.visible');
    })

    it('Right click - Approach2', () => {
        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html');


        cy.get('.context-menu-one.btn.btn-neutral').rightclick();  //right click
        cy.get('.context-menu-icon-copy').should('be.visible');
    })

    it('Double click - Approach1', () => {
        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3');
        cy.getIframe('#iframeResult').find("button[ondblclick='myFunction()']").trigger('dblclick'); //found btn on iframe and trigger for doubleclick
        cy.getIframe('#iframeResult').find("#field2").should('have.value','Hello World!'); // found the filed and verify the text

    })

    it('Double click - Approach2', () => {
        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3');
        cy.getIframe('#iframeResult').find("button[ondblclick='myFunction()']").dblclick(); //found btn on iframe and trigger for doubleclick
        cy.getIframe('#iframeResult').find("#field2").should('have.value','Hello World!'); // found the filed and verify the text

    })

    //npm install --save-dev @4tw/cypress-drag-drop
    it('Drag and Drop using plugin', () => {
        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
        cy.get('#box6').should('be.visible');
        cy.get('#box106').should('be.visible');

        cy.wait(3000);
        cy.get('#box6').drag('#box106', {force:true})
    })

    it('Scrolling page', () => {
        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html');

        //Turkey Flag
        cy.get(':nth-child(2) > tbody > :nth-child(88) > :nth-child(1) > img').scrollIntoView({duration:2000}); //scroll until this  element
        cy.get(':nth-child(2) > tbody > :nth-child(88) > :nth-child(1) > img').should('be.visible');

        //Argentina flag
        cy.get(':nth-child(1) > tbody > :nth-child(8) > :nth-child(1) > img').scrollIntoView({duration:2000});
        cy.get(':nth-child(1) > tbody > :nth-child(8) > :nth-child(1) > img').should('be.visible');


        //Footer
        cy.get('#footer').scrollIntoView({duration:2000});
        cy.get('#footer').should('be.visible');
    })


})