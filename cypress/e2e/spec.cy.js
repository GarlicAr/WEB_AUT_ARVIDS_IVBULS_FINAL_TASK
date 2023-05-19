describe('template spec', () => {
  it('First Task', () => {

    cy.viewport(1980, 1024);


    cy.visit('https://demoqa.com/automation-practice-form')
    cy.get('#firstName').click().type('Arvids')
    cy.get('#lastName').click().type('Ivbuls')
    cy.get('#userEmail').click().type('arvidsivbuls@gmail.com')
    cy.get('.custom-control-label').contains('Male').click()
    cy.get('#userNumber').click().type('2222222222')
    cy.get('#dateOfBirthInput').click()
    cy.get('.react-datepicker__year-select').select('1930')
    cy.get('.react-datepicker__month-select').select('February')
    cy.get('.react-datepicker__day[aria-label="Choose Friday, February 28th, 1930"]').click();
    cy.get('#subjectsContainer').click().type('Economics{enter}')
    cy.get('.custom-control-label').contains('Music').click()



    cy.get('#uploadPicture').selectFile({
      contents: Cypress.Buffer.from('file contents'),
      fileName: 'image.jpg',
      mimeType: 'image/jpeg',
      lastModified: Date.now(),
    })

    cy.get('#state').scrollIntoView().click().type('NCR{enter}')
    cy.get('#city').click().type('Delhi{enter}')
    cy.get('#submit').click();
    // Validations
    cy.contains('Arvids'); 
    cy.contains('Ivbuls'); 
    cy.contains('arvidsivbuls@gmail.com'); 
    cy.contains('Male'); 
    cy.contains('2222222222'); 
    cy.contains('28 February,1930'); 
    cy.contains('Economics');
    cy.contains('Music'); 
    cy.contains('image.jpg'); 
    cy.contains('NCR Delhi'); 
    
});
  })


Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
  });