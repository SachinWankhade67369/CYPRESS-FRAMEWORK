import Navbar from "../../page-objects/componants/Navbar"
import HomePage from "../../page-objects/pages/HomePage"
import LoginPage from "../../page-objects/pages/LoginPage"
import ForgotPasswordPage from "../../page-objects/pages/ForgotPasswordPage"

describe('Forgotten Password Test',() => {

    const homepage = new HomePage()
    const forgotPasswordPage = new ForgotPasswordPage()
    
    before(function(){
        homepage.visit()
    })

    it('should display login form',() => {

        Navbar.clickOnSignIn()
        LoginPage.displayLoginForm()
       
    })

    it('should display forgotten password form',() => {

        LoginPage.clickForgotPasswordLink()
        forgotPasswordPage.shouldExist()
        
    })

    it('should submit forgotten password form',() => {

        cy.fixture('feedback').then(data =>{

            const email = data.email
            
            forgotPasswordPage.fillEmail(email)
        })

        forgotPasswordPage.submitEmail()
    })

    it('should display success message',() => {

        forgotPasswordPage.showSuccessMessage()
    })

})