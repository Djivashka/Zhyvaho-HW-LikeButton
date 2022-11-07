
class HomePage{
    visit(){
        cy.visit('/');
    }

    getLoginButton(){
        return cy.get('[href="/user/login"]')
    }

    clickLoginButton(){
        this.getLoginButton().click();
    } 

    getProfileButton(){
        return cy.get('[href*="/profile/"]')
    }

    clickProfileButton(){
        this.getProfileButton().click();
    } 

    getTagsList(){
        return cy.get('.tag-list');
    }

    getTagChip(){
        return cy.get('.link.tag-default.tag-pill');
    }

    clickTagChip(){
        this.getTagChip().click();
    } 

} export default new HomePage();