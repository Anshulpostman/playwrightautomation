const{test, epect, expect} = require('@playwright/test');
const exp = require('constants');
//valid login and password
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

  //login with invaid Email id and valid password
  test.only("Invalid email and valid password" , async function({page}){

    await page.goto("https://devecg.resourcifi.tech/login")

    await page.locator("//input[contains(@placeholder,'Email Address')]").type("superradmin@gmail.com" );

    await page.locator("//input[@type='password']").type("superAdmin123");

    await page.locator("//span[normalize-space()='Log In']").click();

   //const BEmail='Emai id is not correct';

   const errorlocator = page.locator("//div[contains(text(),'Invalid email or password')]");

    const errormessage = await errorlocator.isVisible();

   if (errormessage===errorlocator)
    {
       console.log("Test case passed: " + errorlocator )
    }

       else
       { 
        
        console.log("Test case failed: Error message is not displayed for invalid password")
      }
    
      expect(errormessage).toBe(false);
      
})

// Login with valid email id and invalid password










