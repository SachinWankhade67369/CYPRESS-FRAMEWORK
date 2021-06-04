export default class BasePage{

    static pause(ms){
        cy.wait(ms)
    }

    static logInfo(message){
        cy.log(message)
    }

    // utility for Device Emulation

    static setMobileVeiwport(){
        cy.viewport('iphone-x')
    }

    static setTableViewport(){
        cy.viewport('ipad-2')
    }

    static setDesktopViewport(){
        cy.viewport('macbook-11')
    }

    // Full HD
    static setLargeDesktopViewport(){
        cy.viewport('1980,1080')
    }
    
}