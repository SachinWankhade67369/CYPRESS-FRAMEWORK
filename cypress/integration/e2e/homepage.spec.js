import HomePage from '../../page-objects/pages/HomePage'

describe('Home page Test', () => {

    it('Home page should be working',() => {

        const homePage = new HomePage()
        homePage.visit()
        homePage.carouselIsVisible()

        // Following method will work when we will defained class as export default class HomePage 
        // and all the method should be static in nature.
        // HomePage.visit()
        // HomePage.carouselIsVisible()

    })



})