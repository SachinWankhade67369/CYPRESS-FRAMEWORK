import BasePage from "../BasePage";

export default class FeedbackPage extends BasePage{

    static displayFeedbackForm(){
        cy.isVisible('#feedback-title')
        cy.get('form').should('be.visible')
    }

    static fillFeedbackForm(){

        cy.fixture('feedback').then(data =>{

            // const name = data.name
            // const email = data.email
            // const subject = data.subject
            // const message = data.message

            cy.get('#name').type(data.name)
            cy.get('#email').type(data.email)
            cy.get('#subject').type(data.subject)
            cy.get('#comment').type(data.message)

        })
    }

    static submitFeedbackForm(){

        cy.contains('Send Message').click()
    }

    static showSuccessMessage(){
        
        cy.isVisible('#feedback-title')
    }
}