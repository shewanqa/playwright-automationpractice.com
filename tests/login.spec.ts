import { test, expect } from '@playwright/test';
import { APLoginPage } from '../page-classes/ap-login';
import { APHomePage } from '../page-classes/ap-home';

test.beforeEach(async ({ page }) => {
    //await page.goto('http://automationpractice.com/index.php?controller=authentication&back=my-account');
    await page.goto('http://automationpractice.com/index.php');
});


test.describe('Application Login functionality', () => {
    test('A user can login with valid credentials', async ({ page }) => {
                
        const LoginPage = new APLoginPage(page, 'shewanwilson@gmail.com', 'automation83');
        const HomePage = new APHomePage(page);
        
        // Click on Sign In
        await HomePage.clickOnSignIn();

        // Call login function
        await LoginPage.login();
        
        // Check URL of home page
        await HomePage.isUserLoggedIn();

    });

});