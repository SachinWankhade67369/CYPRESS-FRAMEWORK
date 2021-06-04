import BasePage from "../Basepage";

export default class LoginPage extends BasePage {

    static login (username, password){
        
        cy.loginToApp(username,password) // using custom commands
    }

    static clickForgotPasswordLink(){
        cy.contains('Forgot your password ?').click()
    }

    static displayErrorMessage(){
        
        cy.isVisible('.alert-error') // using custom commands
    }

    static displayLoginForm(){
        cy.isVisible('#login_form')
    }
}