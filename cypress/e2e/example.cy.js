describe('Example Test', () => {
    it.only('signup via twitter', () => {
        cy.typeInBasicDetailsAndRegNumber()
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
    it('signup via mima sales agent', () => {
        
        cy.typeInBasicDetailsAndRegNumber()
        cy.clickHowYouHeardABoutUsDropdown('Mima Sales Agent')
    });
    it('signup via friends and family', () => {
        
        cy.typeInBasicDetailsAndRegNumber()
        cy.clickHowYouHeardABoutUsDropdown('Friends & Family')
    });
    it('signup via google search', () => {
        
        cy.typeInBasicDetailsAndRegNumber()
        cy.clickHowYouHeardABoutUsDropdown('Google Search')
    });
    it('signup via other means', () => {
        cy.typeInBasicDetailsAndRegNumber()
        cy.clickHowYouHeardABoutUsDropdown('Others')
    });
});
            