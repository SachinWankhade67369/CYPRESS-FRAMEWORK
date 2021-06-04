// Componants includes command element which is shared by all the pages or home page information
export default class Navbar {

    static clickOnLogo (){
        cy.get('.brand').click()
    }

    static search(value){

        cy.get('#searchTerm').clear().type(value).type('{enter}')
        // cy.get('#searchTerm').as('Searchbox')
        // cy.get('@Searchbox').type('$text {enter}')
        cy.url().should('include','search.html?searchTerm=')
    }

    static displaySingInButton(){
        cy.isVisible('#signin_button')
    }

    static clickOnSignIn(){
        cy.get('#signin_button').click()
    }

    static clickOnSettings(){
        cy.contains('Settings').click()
    }

    static logout(){
        cy.contains('username').click()
        cy.get('#logout_link').click()
    }
}