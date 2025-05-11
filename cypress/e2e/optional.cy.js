describe('Example Test', () => {
    it.skip('signup via twit.skipter and websit.skipe', () => {
        cy.typeInBasicDetails()
        cy.fillinAnyOptionalField('websit.skipe')
        cy.clickHowYouHeardABoutUsDropdown('Twit.skipter')
        cy.insertPassword()
        cy.submit.skipSignupForm()
        cy.retrieveAndInsertOTP()
    });
    it.skip('signup via instagram', () => {
        
        cy.typeInBasicDetailsAndRegNumber()
        cy.clickHowYouHeardABoutUsDropdown('Instagram')
    });
    it.skip('signup via Facebook', () => {
        
        cy.typeInBasicDetailsAndRegNumber()
        cy.clickHowYouHeardABoutUsDropdown('Facebook')
    });
    it.skip('signup via webinar and seminar', () => {
        
        cy.typeInBasicDetailsAndRegNumber()
        cy.clickHowYouHeardABoutUsDropdown('Webinar/Seminar')
    });
    
});
            