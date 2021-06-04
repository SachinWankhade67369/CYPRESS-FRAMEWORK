import Navbar from "../../page-objects/componants/Navbar"
import HomePage from "../../page-objects/pages/HomePage"
import SearchResultPage from "../../page-objects/pages/SearchResultPage"

describe('Searchbox test', () => {

    const homepage = new HomePage()
    const searchResultPage = new SearchResultPage()

    before(function (){
        homepage.visit()
    })

    it('should search for value via searchbox', () => {

        Navbar.search('Bank')
    })

    it('should display search result page', () => {

        searchResultPage.displayTitle()
    })

    it('should display Home page again', () => {

        searchResultPage.displayHomePage()
    })

})