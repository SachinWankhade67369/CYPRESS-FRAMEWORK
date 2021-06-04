import BasePage from "../BasePage"

class SearchResultPage extends BasePage{

    displayTitle(){
        cy.get('h2').as('Title')
        cy.get('@Title').contains('Search Results:')
    }

    displayHomePage(){
        cy.go('back')
        cy.isVisible('#carousel')
    }
}

export default SearchResultPage