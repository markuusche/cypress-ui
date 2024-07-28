Cypress.Commands.add('login', (username, password) => {
    cy.session([username, password], () => {
        cy.visit('/')
        cy.get('.login-container').should('be.visible')
        cy.get('input[placeholder="Enter username"]').type(username)
        cy.get('input[placeholder="Enter password"]').type(password)
        cy.get('button[type="submit"]').click()
        cy.get('.welcome-section h1').should('include.text', `Welcome,${username}!`)
    })
})

Cypress.Commands.add('failing', (message) => {
    throw new Error(message);
  });
  