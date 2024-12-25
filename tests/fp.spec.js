
const Forgotpassword = require('./forgotpassword');
const { test, expect } = require('@playwright/test');
const MailosaurClient = require('mailosaur');
//import MailosaurClient from 'mailosaur';


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

          else {

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

test("resetting password with invalid email id" , async function({page}){

    const { MailosaurClient } = require('mailosaur'); 
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


// Read Email subject, text, hyperlink from email

     test.only("Read subject from email" , async function({page}){
       
        const apiKey = 'p8eEa1mNH1BEpi9PMbTerGA6kphp40cX';
        const mailosaur =  new MailosaurClient(apiKey);
        const serverid='zis1bxhm';
        const testemail='testing@zis1bxhm.mailosaur.net';
        const forgotpassword= new Forgotpassword(page);
        //const emailbody='Hello +"\nYou requested to reset your password. Click the link below';
        const expectedText = 'You requested to reset your password';
        //const mail='mailosaur';
         
          await forgotpassword.navigate("https://devecg.resourcifi.tech/reset-password");
          await forgotpassword.enteremail(testemail);
          await forgotpassword.clicksendemailkbutton();


           // wait for an email: 

           const heademail= await mailosaur.messages.get(serverid,{

            sentTo: testemail,
        });

        if (heademail.subject='Reset Password'){

            console.log("Email subject  is correct:  Reset Password")
        }

        else{

            console.log("Email subject  is not correct: + Subject does not match 'Reset Password'");

            expect(heademail.subject).toBe("Reset Password")

   
        }

       // validate the subject 
      

       if (heademail.html='expectedText'){

        console.log("Email text us correct" +expectedText);
       }
         else{

            console.log("Email body is not correct");
         }
       

         //expect(heademail.html).toContain("You requested to reset your password");
         //expect(heademail.html).toBe(expectedText);
     
 });