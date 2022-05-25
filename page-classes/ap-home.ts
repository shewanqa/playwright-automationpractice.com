import { expect, Locator, Page} from '@playwright/test';

export class APHomePage{

    readonly page: Page;
    readonly loggedInUrl: string;
    readonly signInButton: Locator;
    
    constructor(page: Page){
        this.page = page;
        this.signInButton =  page.locator('text=Sign in');
        this.loggedInUrl = 'http://automationpractice.com/index.php?controller=my-account';        
    }

    public async clickOnSignIn(){
        this.signInButton.click();
    }

    public async isUserLoggedIn(){
        await expect(this.page).toHaveURL(this.loggedInUrl);

        //TODO 
        //More assertions to make sure user homepage is displayed correctly
    }   
    
}