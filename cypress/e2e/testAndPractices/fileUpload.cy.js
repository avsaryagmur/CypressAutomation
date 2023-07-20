// https://github.com/abramenal/cypress-file-upload
// npm install --save-dev cypress-file-upload
import 'cypress-file-upload';

describe('File Uploads', () => {

    it('Single File Upload', () => {
     
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get('#file-upload').attachFile('test1.pdf'); // read from fixtures and you can give the file name to attachFile
        cy.get('#file-submit').click();
        cy.get('h3').should('have.text', 'File Uploaded!');
    })

    it('File Upload - Rename', () => {
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get('#file-upload').attachFile({filePath: 'test1.pdf', fileName: 'FileNameRenamed.pdf'}); //  Rename
        cy.get('#file-submit').click();
        cy.get('h3').should('have.text', 'File Uploaded!');
    })

    it('File Upload - Drag and Drop', () => {
     
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get('#drag-drop-upload').attachFile('test1.pdf', {subjectType: 'drag-n-drop'});   //drag to here
        cy.get("div[class='dz-preview dz-file-preview dz-processing dz-success dz-complete'] div[class='dz-details'] span")
          .contains('test1.pdf');
    })

    it('Multiple Files Upload', () => {
     
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
        cy.get('#filesToUpload').attachFile(["test2.pdf", "test3.pdf"]); // attachFile(["multi", "file", "upload" , ...]) 
        cy.wait(5000);
        cy.get(':nth-child(6) > strong').contains('Files You Selected:');
        cy.get('#fileList').contains('test3.pdf');
    })

    it.only('File Upload - Shadow Dom', () => {
     
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm");
        cy.get('.smart-browse-input', {includeShadowDom:true}).attachFile("test3.pdf"); //find element which is present inside the shadow dom 
        cy.wait(5000);
        cy.get('.smart-item-name', {includeShadowDom:true}).contains("test3.pdf"); 

    })
  })