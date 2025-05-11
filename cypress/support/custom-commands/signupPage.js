let signup

before(() => {
    cy.fixture('elements').then(sel => {
        signup = sel.elements.signupPage
    })
})

Cypress.Commands.add('typeInFullname', ()=>{
    cy.get(signup.fullnameField).type('Beatrice Vivian Olasupo')
})

Cypress.Commands.add('typeInBusinessName', ()=>{
    cy.get(signup.businessNameField).type('BV-Olasupo')
})

Cypress.Commands.add('typeInBusinessEmail', ()=>{
    cy.get(signup.businessEmailField).type('bv_olasupo@maildrop.cc')
})

Cypress.Commands.add('typeInBusinessPhoneNUmber', ()=>{
    cy.get(signup.businesPhoneField).type('+2348184593926')
})

Cypress.Commands.add('typeInBusinessRegNumber', ()=>{
    cy.get(signup.businessRegNumField).type('7812743')
})

Cypress.Commands.add('clickNextButton', ()=>{
    cy.get('button').contains('Next').click()
})