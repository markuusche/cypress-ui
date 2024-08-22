import locators from "../support/locators"

describe('Reporting Test', () => {
    before(() => {
        const username = Cypress.env('username')
        const password = Cypress.env('password')
        cy.login(username, password)
    })

    it('Betting Transaction', ()=>{
        const operator = Cypress.env('type')

        cy.visit('/')
        cy.get(locators.report['report']).click()
        cy.get(locators.report['containter']).should('be.visible')
        cy.get(locators.report['betting-history']).click()
        cy.get(locators.report.filter['transaction-date']).click()
        cy.get(locators.report.filter['date-modal']).should('be.visible')
        cy.get(locators.report.filter['today']).click()
        cy.get(locators.report.filter['operator']).type(operator)
        cy.get(locators.report.filter['operator-dropdown']).should('be.visible')
        cy.get(locators.report.filter['parent-operator']).click()
        cy.get(locators.report.filter['operator-name']).should('be.visible')
        cy.get(locators.report.filter['operator-name']).each($element => {
            if ($element.text() === operator){
                cy.wrap($element).click()
            }
        })
        cy.get(locators.report.filter['search']).click()
        cy.get(locators.profile.activity['preloader']).should('be.visible')
        cy.get(locators.profile.activity['preloader'], { timeout: 100000 }).should('not.be.visible')
        cy.get(locators.profile.activity['rows']).then((rows) => {
            const count = rows.length;
            if (count >= 1) {
                const table = locators.report.table
                for (const key in table) {
                    cy.get(locators.report.table[key]).then(element => {
                    cy.get(locators.report.filter[key]).type(element.text())
                    cy.get(locators.report.filter['search']).click()
                    cy.get(locators.profile.activity['preloader']).should('be.visible')
                    cy.get(locators.profile.activity['preloader'], { timeout: 100000 }).should('not.be.visible')
                    cy.get(locators.report.table[key]).contains(element.text())
                    cy.get(locators.report.filter[key]).clear()
                    })
                }
            }   
        })
    })
})
