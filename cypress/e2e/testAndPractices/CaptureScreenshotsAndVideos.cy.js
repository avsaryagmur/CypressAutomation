
describe('Capture Screenshots and Videos', () => {


    it('Capture Screenshots and videos', () => {
        cy.visit("https://demo.opencart.com/");
        cy.screenshot("Homepage");
        
        cy.wait(5000);
        cy.get("img[title='Your Store']").screenshot("logo");

        
    })


   // Only works  when u execute through CLI
    it.only('Automatically Capture Screenshots and videos on failure', () => {
        cy.visit("https://demo.opencart.com/");
        
        cy.get("li:nth-child(7) a:nth-child(1)").click(); //cameras

        cy.get("div[id='content'] h2").should('have.text', 'Camerasss'); // it will take arror because assertion is not correct

       // NOTE: run command is npx cypress run -- cypress/e2e/testAndPractices/CaptureScreenshotsAndVideos.cy.js
        
    })


  })