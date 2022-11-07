/// <reference types="cypress" />

 import articlesPage from '../support/pages/ArticlesPage';
 import user from '../fixtures/user.json';
 import {loginViaAPI} from '../support/helper';
 import articlesArray from '../fixtures/articlesMock.json';
 import {faker} from '@faker-js/faker';


  beforeEach('Login', () => {
    articlesArray.articles[0].favoritesCount = faker.random.numeric(4)
    
    cy.intercept('GET', '**/articles?limit=10&offset=0', articlesArray)
    loginViaAPI(user);
  })

  it('Article added', {retries: 2}, () => {
    articlesPage.visit();
    articlesPage.getGlobalFeed();
    articlesPage.clickGlobalFeedButton();
    articlesPage.getLikeButton()
    articlesPage.clickLikeButton();
    articlesPage.checkLikeButton().should('contain', articlesArray.articles[0].favoritesCount + 1);
  })
