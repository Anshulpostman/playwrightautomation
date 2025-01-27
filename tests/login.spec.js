const{test, epect, expect} = require('@playwright/test');
const exp = require('constants');
//valid login and password
test('valid login test case' , async  ({page}) => {

    const login= await page.goto("https://devecg.resourcifi.tech/login")

    await page.locator("//input[contains(@placeholder,'Email Address')]").type("superadmin@gmail.com" );

    await page.locator("//input[@type='password']").type("superAdmin123");

    await page.locator("//span[normalize-space()='Log In']").click();

    const dashboardpage='https://devecg.resourcifi.tech/super/dashboard';

    const currentUrl="user login successfully";

    if(dashboardpage===currentUrl){

        console.log("dashboard page :", + currentUrl )
    }

    else
    console.log("url is corret:"   +currentUrl)

})

  
//login with invaid Email id and valid password
  test("Invalid email and valid password" , async function({page}){

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

test("login with valid email id and invalid password" , async function({page}){

    await page.goto("https://devecg.resourcifi.tech/login");

    await page.locator("//input[contains(@placeholder,'Email Address')]").type("superadmin@gmail.com");

    await page.locator("//input[@type='password']").type("superrAdmin123");

    await page.locator("//span[normalize-space()='Log In']").click();

    const erroremailloactor= await page.locator("//div[contains(text(),'Invalid email or password')]")

    const messageloactor=await erroremailloactor.textContent();
    if 

        (messageloactor==="Invalid email or password"){

            console.log("test case: password is not correct")
        }

            else{ 

                console.log("Test case: password is valid")

            }


    expect(messageloactor).toBe("Invalid email or password");


})

//login with blank email and password.

  test("login with blank email id and valid password" , async function({page}){

    await page.goto("https://devecg.resourcifi.tech/login");

    await page.locator("//input[contains(@placeholder,'Email Address')]");

    await page.locator("//input[@type='password']").type("superrAdmin123");

    await page.locator("//span[normalize-space()='Log In']").click();

    const Emailmessage= await page.locator("//div[contains(text(),'Email is a required field.')]");

    const Emailerrormessage= await Emailmessage.textContent();

    if 
       (Emailerrormessage==="Email is a required field."){

       console.log("validation message is :" +Emailerrormessage )
       }
    
       else{

        console.log("Test case failed:" )

       }

       expect(Emailerrormessage).toBe("Email is a required field.")
    

  })

  ////login with valid email and blank password.


  test("login with valid email id and blank  password" , async function({page}){



    await page.goto("https://devecg.resourcifi.tech/login");

    await page.locator("//input[contains(@placeholder,'Email Address')]").type("superadmin@gmail.com");

    await page.locator("//input[@type='password']");

    await page.locator("//span[normalize-space()='Log In']").click();

    const passwordmessage= await page.locator("//div[contains(text(),'Password cannot be empty.')]");

    const passworderrormessage= await passwordmessage.textContent();

    if 
       (passworderrormessage==="Password cannot be empty."){

       console.log("validation message is :" +passworderrormessage )
       }
    
       else{

        console.log("Test case failed:" )

       }

       expect(passworderrormessage).toBe("Password cannot be empty.");
    

    });






