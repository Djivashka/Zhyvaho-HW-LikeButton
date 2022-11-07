
class ArticlesPage{
    visit(){
        cy.visit('/');
    }

    getGlobalFeed(){
        return cy.get('a.link.nav-link').eq(1);
    }

    clickGlobalFeedButton(){
        this.getGlobalFeed().click();
    } 

    getLikeButton(){
        return cy.get('.btn.btn-sm.btn-outline-primary')
    }

    clickLikeButton(){
        this.getLikeButton().click();
    }

    checkLikeButton(){
        return cy.get('button')
    }
    


} export default new ArticlesPage();