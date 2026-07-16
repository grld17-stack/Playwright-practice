const {expect} = require ('@playwright/test');


class LoginPage{


    constructor(page){


        this.Loginlbl = page.locator('.login-title');

        this.usernametxt = page.locator('#userEmail');

        this.userpassword = page.locator('#userPassword');

        this.loginbtn = page.locator('#login');


    }

    async LoginAssertion(){


        await expect(this.Loginlbl).toBeVisible();


    }

    async LoginCrediantials(username,password){


        await this.usernametxt.fill(username);
        
        await this.userpassword.fill(password);

        await this.loginbtn.click();
       


    }




}


module.exports = {LoginPage}