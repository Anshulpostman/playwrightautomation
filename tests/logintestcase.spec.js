const{test, epect} = require('@playwright/test')

test('valid login test case' , async  ({page}) => {

    const login= await page.goto("https://devecg.resourcifi.tech/login")

    await page.locator("//input[contains(@placeholder,'Email Address')]").type("superadmin@gmail.com" );

    await page.locator("//input[@type='password']").type("superAdmin123");

    await page.locator("//span[normalize-space()='Log In']").click();

    const dashboardpage='https://devecg.resourcifi.tech/super/dashboard';

    const currentUrl='user needs to login';

    if(currentUrl===dashboardpage){

        console.log("dashboard page :", + dashboardpage )
    }

    else
    console.log("url is not corret:" +dashboardpage+ ',but got' +currentUrl)

})










