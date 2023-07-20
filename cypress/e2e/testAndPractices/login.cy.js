
describe('Login', () => {
        const username = "[name='username']" ;
        const password = "[name='password']" ;
        const loginBtn = "[type='submit']" ;
        const loginErrorAlert = "[role='alert']";
        const alertMessage = "Invalid credentials";
        const profileName = "Magdalena Lozowska-Pereira Collings";

    it('unsuccessfully login', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get(username).type("Adminn");
        cy.get(password).type("admin123");
        cy.get(loginBtn).click();
        cy.get(loginErrorAlert).should('have.text', alertMessage);
        
    })


    it('successful login', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get(username).type("Admin");
        cy.get(password).type("admin123");
        cy.get(loginBtn).click();
        cy.url().should('include', 'dashboard');

        cy.get(".oxd-userdropdown-name").then( (x)=> {

            let name = x.text();
            expect(name).to.equal(profileName); 
            assert.equal(profileName, name);

        })
    })

    

  })