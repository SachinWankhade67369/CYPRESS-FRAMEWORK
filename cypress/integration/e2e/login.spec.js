/// < reference type ="cypress" />
import { url, login_username, login_password } from '../../../config'
import AccountLinksTabs from '../../page-objects/componants/AccountLinksTabs'
import Navbar from '../../page-objects/componants/Navbar'
import HomePage from '../../page-objects/pages/HomePage'
import LoginPage from '../../page-objects/pages/LoginPage'


 describe('Login Test', () =>{

    const homepage = new HomePage()

    describe('Login Failed Test', ()=>{

        before(function() {
    
            homepage.visit()
            Navbar.clickOnSignIn()
        })
    
        it('should try to login with invalid credentials',()=>{
    
            LoginPage.login('invalid username','invalid password')
    
        })
    
        it('should display error message',()=>{
    
            LoginPage.displayErrorMessage()
    
        })
    
     })
    
     describe('Login Success Test', ()=>{
    
        before(function() {
    
            homepage.visit()
            Navbar.clickOnSignIn()
        })
    
        it('should login to the application',()=>{
    
            LoginPage.login(login_username,login_password) // taken from config file
        })
    
        it('should display Account links Navbar', () => {
           AccountLinksTabs.shouldBeVisibleAccountNavbar()
        })

        it('should logout from application',() => {
            Navbar.logout()
            Navbar.displaySingInButton()
            homepage.carouselIsVisible()
        })
    
     })
 })