const {test} = require('@playwright/test')
const {LoginPage} = require ('../page-object/LoginPage')



test('Login', async({page})=> {

const loginpage = new LoginPage(page);

const username = 'anshika@gmail.com';
const password = 'Iamking@000'


await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

await loginpage.LoginAssertion();

await loginpage.LoginCrediantials(username,password);

});