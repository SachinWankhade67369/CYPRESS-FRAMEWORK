import FeedbackPage from "../../page-objects/pages/FeedbackPage"
import HomePage from "../../page-objects/pages/HomePage"

describe('Feedback Test using fixtures data', () => {

    const homePage = new HomePage()

    before(function(){
        homePage.visit()
        homePage.clickOnFeedback()
    })

    it('should display feedback form', () => {

        FeedbackPage.displayFeedbackForm()
    })

    it('should fill the feedback form', () => {
        FeedbackPage.fillFeedbackForm()
    })

    it('should submit the feedback form', () => {
        FeedbackPage.submitFeedbackForm()
    })

    it('should display success message', () => {
        FeedbackPage.showSuccessMessage()
    })

})
