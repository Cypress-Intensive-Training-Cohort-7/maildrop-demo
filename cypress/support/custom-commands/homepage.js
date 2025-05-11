let homepage

before(() => {
    cy.fixture('elements').then(sel => {
        homepage = sel.elements.homepage
    })
})

Cypress.Commands.add('clickSignUpButton', () => {
    cy.get(homepage.homepagesignUpBtn).click()
})