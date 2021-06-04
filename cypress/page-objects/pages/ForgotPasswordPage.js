import BasePage from "../BasePage"

class ForgotPasswordPage extends BasePage{

    shouldExist(){
        cy.isVisible('#send_password_form')
    }

    fillEmail(email){

        cy.get('#user_email').type(email)
    }
    
    submitEmail(){
        cy.contains('Send Password').click()
    }

    showSuccessMessage(){
        cy.get('h3').contains('Forgotten Password')
        cy.url().should('include','forgotten-password-send.html')
    }
}

export default ForgotPasswordPage
