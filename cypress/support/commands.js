import locators from '../support/locators.js'

Cypress.Commands.add('login', (username, password) => {
    cy.session([username, password], () => {
        cy.visit('/')
        cy.get(locators.login['container']).should('be.visible')
        cy.get(locators.login['user']).type(username)
        cy.get(locators.login['password']).type(password)
        cy.get(locators.login['submit']).click()
        cy.get(locators.home['welcome']).should('include.text', `Welcome,${username}!`)
    })
})

Cypress.Commands.add('failing', (message) => {
    throw new Error(message);
  });
