import { expect, Locator, Page} from '@playwright/test';

export class APLoginPage{

    readonly page: Page;
    readonly userIdField: Locator;
    readonly userPasswordField: Locator;
    readonly userLoginButton: Locator;

    readonly username: string;
    readonly password: string;

    constructor(page: Page, username, password){
        this.page = page;
        this.userIdField = page.locator('#email');
        this.userPasswordField = page.locator('#passwd');
        this.userLoginButton = page.locator('#SubmitLogin');

        this.username = username;
        this.password = password;
    }

    private async enterUsername(){
        await this.userIdField.fill(this.username);        
    }

    private async enterPassword(){
        await this.userPasswordField.fill(this.password);        
    }

    private async clickLoginButton(){
        await this.userLoginButton.click();
    }

    public async login(){           
        await this.enterUsername();
        await this.enterPassword();
        await this.clickLoginButton();                
    }

    
}