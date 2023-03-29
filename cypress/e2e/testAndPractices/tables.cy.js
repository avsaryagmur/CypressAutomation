describe('Handle Tables', () => {
    beforeEach('Login', ()=> {
        cy.visit('https://demo.opencart.com/admin/index.php');
        cy.get('#input-username').type('demo');
        cy.get('#input-password').type('demo');
        cy.get('.btn').click();

        cy.get('.btn-close').click();
       // Customers -> Customers
       cy.get('#menu-customer').click();
       cy.get('#menu-customer > ul > li:first-child').click();
    })
    it('Check Number Rows and Columns', () => {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length', '10'); //rows
       cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length', '7'); // columns
    })
    it('Check cell data from specific Rows and Columns', () => {

        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)").contains("@");
    })
    it('Read All Rows and Columns Data in The First Page', () => {
        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
           .each( ($row, $index, $rows) => {

            cy.wrap($row). within( () => {
                cy.get("td").each( ($col , $index, $cols) => {
                    cy.log($col.text());
                })
            })

           })
    })
    it('Pagination', () => {
        //find total number of pages
        let totalPages;

        
        cy.get(".col-sm-6.text-end").then( (e) => {
            const myText = e.text(); //Showing 1 to 10 of 11687 (1169 Pages)
            totalPages = myText.substring(myText.indexOf("(")+1 , myText.indexOf("Pages")-1) //starting index of Number, ending index of Number
            cy.log("Total number of pages is in a table :  " + totalPages);
      
             for(let p=1; p<=10 ; p++){
                    if(totalPages>1){
                      cy.log("Active page is  " +p);
                      cy.get("ul[class='pagination'] >li:nth-child("+p+")").click();

                       cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                       .each( ($row, $index, $rows) => {
 
                       cy.wrap($row).within( () => {
                       cy.get("td:nth-child(3)").then( (e) => { //email
                       cy.log(e.text());
                           })
                         })
 
                         })

                     }


        
     }

    })
})

})