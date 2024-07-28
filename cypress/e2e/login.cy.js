
import locators from '../support/locators.js'

const username = Cypress.env('username')
const password = Cypress.env('password')

describe('Login Test', () => {
  beforeEach(() => {
    cy.clearLocalStorage()
    cy.visit('/')
  })  

  it('login success', () => {
    cy.get(locators.login['user']).type(username)
    cy.get(locators.login['password']).type(password)
    cy.get(locators.login['submit']).click()
    cy.get(locators.home['welcome']).should('include.text', `Welcome,${username}!`)
    cy.get(locators.home['logout']).click()
  })

  it('login fail', () => {
    cy.get(locators.login['user']).type(username)
    cy.get(locators.login['password']).type(password + '@')
    cy.get(locators.login['submit']).click()
    cy.get(locators.login['failed']).should('have.text', 'Login Failed!')
  })

  it('invalid credentials', () => {
    cy.get(locators.login['submit']).click()
    cy.get(locators.login['failed']).should('have.text', 'Login Failed!')
  })
})