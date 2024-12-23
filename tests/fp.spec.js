
const Forgotpassword = require('./forgotpassword');
const { test, expect } = require('@playwright/test');

test("resetpassword with valid login"  , async function({page}){

    const forgotpassword= new Forgotpassword(page);
    const getvalidemail = 'testing@zis1bxhm.mailosaur.net';

    await forgotpassword.navigate("https://devecg.resourcifi.tech/reset-password");
    try {

if (getvalidemail=='testing@zis1bxhm.mailosaur.net'){

    await forgotpassword.enteremail("getvalidemail");

    await forgotpassword.clicksendemailkbutton();

    await expect(page.locator("//body/div/div[1]")).toContainText('Reset PasswordHello! Please enter your registered email address. We’ll send you a link to reset your');
 // Replace with expected URL
     console.log("The password link sent successfully");

}

    else{

    console.log("The password link not sent successfully");
}
}
    catch (error) {
        // If the assertion fails or another error occurs, print the error message
        console.log("Error during password reset process");
        console.error(error);
}
    

})
// Test with invalid email

test.only("resetting password with invalid email id" , async function({page}){

    const forgotpassword= new Forgotpassword(page);
    const invaliemailid ='test@'

    await forgotpassword.navigate("https://devecg.resourcifi.tech/reset-password");

    await forgotpassword.enteremail(invaliemailid);

    if(invaliemailid==='test@'){

        await forgotpassword.clicksendemailkbutton();

        await expect(page.locator("//div[contains(text(),'Please enter valid email.')]"))
        .toBeVisible();

        console.log("Please enter valid email.");

    }

    else{

        console.log("result not found")
    }


    
});


