
const Forgotpassword = require('./forgotpassword');
const { test, expect } = require('@playwright/test');
const MailosaurClient = require('mailosaur');
//const MailosaurClient = require('mailosaur');
//import MailosaurClient from 'mailosaur';


test("resetpassword with valid login"  , async function({page}){
    const apiKey = 'p8eEa1mNH1BEpi9PMbTerGA6kphp40cX';
    const mailosaur =  new MailosaurClient(apiKey);
    const serverid='zis1bxhm';
    const forgotpassword= new Forgotpassword(page);
    const getvalidemail = 'vsuser@zis1bxhm.mailosaur.net';

    await forgotpassword.navigate("https://devecg.resourcifi.tech/reset-password");
    try {

          if (getvalidemail=='vsuser@zis1bxhm.mailosaur.net'){

    await forgotpassword.enteremail("getvalidemail");

    await forgotpassword.clicksendemailkbutton();

    
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
    const apiKey = 'p8eEa1mNH1BEpi9PMbTerGA6kphp40cX';
    const mailosaur =  new MailosaurClient(apiKey);
    const serverid='zis1bxhm';
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

     test("Read subject from email" , async function({page}){
       
        const apiKey = 'p8eEa1mNH1BEpi9PMbTerGA6kphp40cX';
        const mailosaur =  new MailosaurClient(apiKey);
        const serverid='zis1bxhm';
        const testemail='testing@zis1bxhm.mailosaur.net';
        const forgotpassword= new Forgotpassword(page);
        //const emailbody='Hello +"\nYou requested to reset your password. Click the link below';
        const expectedText = 'Reset Password';
 
        //const mail='mailosaur';
         
          await forgotpassword.navigate("https://devecg.resourcifi.tech/reset-password");
          await forgotpassword.enteremail("vsuser@zis1bxhm.mailosaur.net");
          await forgotpassword.clicksendemailkbutton();


          const heademail=mailosaur.messages.get(serverid,{
     
      
          });
      
        if (heademail.subject='Reset Passsword'){
      
          console.log("Email subject  is correct:" + heademail.subject)
          expect(heademail.subject).toContain("Reset Passsword");
      }
      
        else{
          console.log("Email subject is not correct");
        }
      
        const bodytext=mailosaur.messages.get(serverid,{
           
          });
});

        // Test functionality of reading body for email

        
     test("Read body of email" , async function({page}){
       
      const apiKey = 'p8eEa1mNH1BEpi9PMbTerGA6kphp40cX';
      const mailosaur =  new MailosaurClient(apiKey);
      const serverid='zis1bxhm';
      const testemail='testing@zis1bxhm.mailosaur.net';
      const forgotpassword= new Forgotpassword(page);
      //const emailbody='Hello +"\nYou requested to reset your password. Click the link below';
      const expectedText = 'Reset Password';

      //const mail='mailosaur';
       
        await forgotpassword.navigate("https://devecg.resourcifi.tech/reset-password");
        await forgotpassword.enteremail("vsuser@zis1bxhm.mailosaur.net");
        await forgotpassword.clicksendemailkbutton();


        const bodytext=mailosaur.messages.get(serverid,{
     
        });
        if (bodytext.text=("\n Hello,")+
         ("\n You requested to reset your password. Click the link below:,")+
         ("\https://devecg.resourcifi.tech/change-pass?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjAwLCJlbWFpbCI6InZzdXNlckB6aXMxYnhobS5tYWlsb3NhdXIubmV0IiwiaWF0IjoxNzM4MDcyNzgwLCJleHAiOjE3MzgwNzM2ODB9.7gAsDoWPAzkHVqG9SILKEXGbsckpOGLcOsJnIpBYjSo,")+
    ("\nIf you did not request this, ignore this email.,"))
     {

    console.log("Email body text is correct:" + bodytext.text)
    expect(bodytext.text).toContain("Hello");
    }
    else{
      console.log("Email body text is not correct");
    }

})

     // Test the functionality by clicking on the link and reset password


     test("Read body of email and resetpwd" , async function({page}){
       
      const apiKey = 'p8eEa1mNH1BEpi9PMbTerGA6kphp40cX';
      const mailosaur =  new MailosaurClient(apiKey);
      const serverid='zis1bxhm';
      const testemail='vuser@zis1bxhm.mailosaur.net';
      const forgotpassword= new Forgotpassword(page);
      //const emailbody='Hello +"\nYou requested to reset your password. Click the link below';
      const expectedText = 'Reset Password';
      const email=mailosaur.messages.get(serverid,{
        
   
      });
      //const mail='mailosaur';
       
        await forgotpassword.navigate("https://devecg.resourcifi.tech/reset-password");
        await forgotpassword.enteremail("vsuser@zis1bxhm.mailosaur.net");
        await forgotpassword.clicksendemailkbutton();


        
        const bodyHtml = email.html?.body || email.text?.body;
        if (!bodyHtml) {
            throw new Error("No email body found");
        }
        console.log("Email Body:", bodyHtml);
    
        // Step 4: Extract the reset link using regex
        const resetLink = bodyHtml.match(/https?:\/\/[^\s]+/)[0];
        console.log("Extracted Reset Link:", resetLink);
    
        // Step 5: Navigate to the reset link
        await page.goto(resetLink);
    
        // Step 5: Fill in the new password
        const newPasswordField = await page.locator("input[placeholder='| Enter Password']");
        await newPasswordField.fill("Anshul@12345");
    
        const confirmPasswordField = await page.locator("input[placeholder='| Re-Enter Password']");
        await confirmPasswordField.fill("Anshul@12345");
    
        // Step 6: Click the reset password button
        const resetPasswordButton = await page.locator("//span[normalize-space()='Reset Password']");
        await resetPasswordButton.click();
    
        // Step 7: Verify success
        const successMessage = await page.locator("text='Your password has been reset successfully'");
        expect(await successMessage.isVisible()).toBeTruthy();
        console.log("User was able to change the password successfully.");
    });
      

   
    
        
    
