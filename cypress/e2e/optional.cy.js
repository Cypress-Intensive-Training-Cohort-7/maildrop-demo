describe('Example Test', () => {
    it.only('signup via twitter and website', () => {
        cy.typeInBasicDetails()
        cy.fillinAnyOptionalField('website')
        cy.clickHowYouHeardABoutUsDropdown('Twitter')
        cy.insertPassword()
        cy.submitSignupForm()
        cy.retrieveAndInsertOTP()
    });
    it('signup via instagram', () => {
        
        cy.typeInBasicDetailsAndRegNumber()
        cy.clickHowYouHeardABoutUsDropdown('Instagram')
    });
    it('signup via Facebook', () => {
        
        cy.typeInBasicDetailsAndRegNumber()
        cy.clickHowYouHeardABoutUsDropdown('Facebook')
    });
    it('signup via webinar and seminar', () => {
        
        cy.typeInBasicDetailsAndRegNumber()
        cy.clickHowYouHeardABoutUsDropdown('Webinar/Seminar')
    });
    
});
            