import homePage from './pages/HomePage';
import authorizationPage from './pages/AuthorizationPage';
import sessionData from '../fixtures/sessionData.json';
import user from '../fixtures/user.json'

export function login(){
    homePage.visit();
    homePage.clickLoginButton();

    authorizationPage.submitLoginForm(user.email, user.password);
}

export function loginViaAPI(user){
    let requestBody = {user: {email: " ", password: " "}};

    requestBody.user.email = user.email;
    requestBody.user.password = user.password;

    cy.request('POST', '/api/users/login', requestBody).then( response => {
        let token = response.body.user.token;

        cy.setCookie('auth', token);

        sessionData.email = user.email;
        sessionData.username = user.userName;
        sessionData.token = response.body.user.token;

        window.localStorage.setItem('user', JSON.stringify(sessionData));
    })
}