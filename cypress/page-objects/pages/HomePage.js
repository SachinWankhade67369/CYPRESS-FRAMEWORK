import { url } from "../../../config";
import BasePage from "../BasePage";

class HomePage extends BasePage{

     visit(){
        cy.visit(url)
    }

     carouselIsVisible(){
        cy.isVisible('#carousel')
    }

    clickOnHome(){
        cy.isVisible('#homeMenu')
        cy.get('#homeMenu').click()
    }

    clickOnOnlineBanking(){
        cy.isVisible('#onlineBankingMenu')
        cy.get('#onlineBankingMenu').click()
    }

    clickOnFeedback(){
        cy.isVisible('#feedback')
        cy.get('#feedback').click()
    }   
}

export default HomePage