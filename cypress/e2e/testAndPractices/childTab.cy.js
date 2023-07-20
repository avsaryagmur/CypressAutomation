
describe('Child Tabs and Pages', () => {
    it('Handle Tab - approach1', () => {
        //target="_blank" -> page will open in next tab
        cy.visit("https://the-internet.herokuapp.com/windows"); //parent tab 
        cy.get('.example >a').invoke('removeAttr', 'target').click(); //remove target and so it will open to same
        cy.url().should('include', '/windows/new');
        cy.go('back');
    });
    it('Handle Tab - approach2', () => {
        cy.visit("https://the-internet.herokuapp.com/windows"); //parent tab 

        cy.get('.example >a').then((e) => {
           const url = e.prop('href');        // prop means property --> returns href value
           cy.visit(url); 
        })
        cy.url().should('include', '/windows/new');
        cy.go('back');
    });
});
