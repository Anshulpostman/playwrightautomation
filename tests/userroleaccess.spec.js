
const { test, expect } = require('@playwright/test');
const {Addcom}=require('./Addcom');
const { ECGcomp } = require('./Addcompanyfunction');
const  {Actionofeditgroup}  = require('./Addcompanyfunction');
const config = require('../config/environment'); 
 const Addinput = require('./Clinput');
 const Addgroup = require('./forgotpassword'); 
 const exp = require('constants');
 const MailosaurClient = require('mailosaur');
//const Addinput = require('./Clinput'); // Correct im


test("test the functionality verify that sub-admin prsenet and login with sub-admin", async ({ page }) => {
   
    const subadmin= new Addcom(page);
    await subadmin.login();
    await page.waitForTimeout(1000);
    await subadmin.clickgroupmanagement();
    await page.waitForTimeout(1000);
    const companylistpage=await page.locator("//p[normalize-space()='Anshul Testing Group']").click();
    const statusA='Active';
    const companyname='D';
    const statusI='Inactive';
    const company='CCA';

    const active=await page.locator("(//div[contains(text(),'Active')])[1]");
    const activeread= await active.textContent();
    const inactive=await page.locator("//div[contains(text(),'Inactive')]");
    const inactiveread= await inactive.textContent();

     if (statusA==activeread){
         console.log("The company is active and user able to login with companyuser");
         expect(statusA).toContain("Active");
       }
      else{
           console.log("The company is not present");
      }

       if (statusI==inactiveread){
         console.log("The company is inactive and user not able to login with companyuser");
         expect(statusI).toContain("Inactive");
       }
        else{
          console.log("The company is not present");
       }
    })

    //Test the functionality of Add company and then edit and copy email address and login successfuly if user is active

test("Test the functionality of login ifcompany  user is active", async ({ page }) => {
  const apiKey = 'p8eEa1mNH1BEpi9PMbTerGA6kphp40cX';
  const mailosaur =  new MailosaurClient(apiKey);
  const serverid='zis1bxhm';
 
    const addcompany= new Addcom(page);
    await addcompany.login();
    await page.waitForTimeout(1000);
    await addcompany.clickgroupmanagement();
    await page.waitForTimeout(1000);
    await page.locator("//p[normalize-space()='Anshul Testing Group']").click();
    await page.waitForTimeout(1000);
    //await page.locator("//div[contains(text(),'Add Company')]").click();
    await addcompany.clickAddcompanybutton();
    await page.waitForTimeout(1000);
    await ECGcomp(page);
    await page.waitForTimeout(1000);
    await addcompany.clickAddcompanyinfo();
    //wait for an email to be sent
  
    const heademail=mailosaur.messages.get(serverid,{
     
      
    });

  if (heademail.subject='Welcome! You’ve been added to the company management system'){

    console.log("Email subject  is correct:" + heademail.subject)
    expect(heademail.subject).toContain("Welcome! You’ve been added to the company management system");
}

  else{
    console.log("Email subject is not correct");
  }

  const bodytext=mailosaur.messages.get(serverid,{
     
    });

   if (bodytext.text=("\n Hello, vs user',")+
    ("\n You have been registered as a company manager for group Anshul Testing Group.',")+
    ("\n Your temporary password is: (xZ^bcLBjA)',")+
    ("\n Please click here to create your password.',")+
    ("\n Note: This link will expire in 1 hour.',")+
    ("\n Please click here to create your password.',")+
    ("\n nNote: This link will expire in 1 hour.',") ){

    console.log("Email body text is correct:" + bodytext.text)
    expect(bodytext.text).toContain("\n Hello, vs user',");
    }
    else{
      console.log("Email body text is not correct");
    }

})

//Test the functionality copy password and click on the link and reset password

test.only("Test the functionality of copy password and click on the link and reset password", async ({ page }) => {
     
  const apiKey = 'p8eEa1mNH1BEpi9PMbTerGA6kphp40cX';
  const mailosaur =  new MailosaurClient(apiKey);
  const serverid='zis1bxhm';

  const addcompany= new Addcom(page);
    await addcompany.login();
    await page.waitForTimeout(1000);
    await addcompany.clickgroupmanagement();
    await page.waitForTimeout(1000);
    await page.locator("//p[normalize-space()='Anshul Testing Group']").click();
    await page.waitForTimeout(1000);
    //await page.locator("//div[contains(text(),'Add Company')]").click();
    await addcompany.clickAddcompanybutton();
    await page.waitForTimeout(1000);
    await ECGcomp(page);
    await page.waitForTimeout(1000);
    await addcompany.clickAddcompanyinfo();
    
     // Declare searchCriteria with a subject or other metadata (no body search possible directly)
  const searchCriteria = {
    receivedAfter: new Date().toISOString() // Optional: Search for recent emails
  };

  // Retrieve the email based on the search criteria
  let bodytextread;
  try {
    console.log("Searching for email...");
    bodytextread = await mailosaur.messages.get(serverid, searchCriteria, { timeout: 30000 });
    console.log("Email found: ", bodytextread);
  } catch (error) {
    console.error("Error retrieving email: ", error);
  }
   
    const emailbody=bodytextread?.text;
    if (emailbody) {
      
    const passwordRegex = /Your temporary password is:\s*([\w^().!]+)/;
    const passwordMatch = emailbody.match(passwordRegex);

    if (passwordMatch) {
        const password = passwordMatch[1];
        console.log("Extracted password: " + password);

        const linkregex=  /Please click here to create your password:\s*([\w^().!]+)/;
        const linkMatch = emailbody.match(linkregex);

        if (linkMatch) {
            const clickherelink = linkMatch[1];
            console.log("Extracted link: " + clickherelink);
        

        // Step 5: Navigate to the link and use the password
        await page.goto(clickHereLink);
        console.log('Navigated to the link.');

          // Step 6: Paste the dynamic password into the text box
          await page.fill('//*[@id="temp_password"]', dynamicPassword); // Adjust the selector as needed
          await page.getByPlaceholder(" Enter Password").fill("Anshul11@123");
          await page.getByPlaceholder(" Confirm Password").fill("Anshul11@123");
          console.log('Password pasted into the form.');
          console.log('New Password pasted into the form.');
          console.log('Confirm Password pasted into the form.');

             // Step 7: Submit the form
        await page.locator("//span[normalize-space()='Reset Password']").click(); // Adjust the selector as needed
        console.log('Form submitted.');
    }

    else{
      console.log("Failed to extract 'click here' link from the email.");
    }

   } else{

    console.log("Email body text is not correct");
  }


    }

})