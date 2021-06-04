export default class AccountLinksTabs{

    static shouldBeVisibleAccountNavbar(){

        cy.isVisible('#account_summary_tab')
        cy.isVisible('#account_activity_tab')
        cy.isVisible('#transfer_funds_tab')
        cy.isVisible('#pay_bills_tab')
        cy.isVisible('#money_map_tab')
        cy.isVisible('#online_statements_tab')
    }

    static clickAccountSummery(){
        cy.contains('Account Summary').click()
    }

    static clickAccountActivity(){
        cy.contains('Account Activity').click()
    }

    static clickTransferFunds(){
        cy.contains('Transfer Funds').click()
    }

    static clickPayBills(){
        cy.contains('Pay Bills').click()
    }

    static clickMyMoneyMaps(){
        cy.contains('My Money Map').click()
    }

    static clickOnlineStatements(){
        cy.contains('Online Statements').click()
    }
}