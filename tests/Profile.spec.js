const{test , expect} = require('@playwright/test');
//const Addcom  = require('./Addcompanyfunction');


const {Addcompany}=require('./Addcompany');
const config = require('../config/environment');
const Addinput = require('./Clinput');
const Addgroup = require('./forgotpassword');
const exp = require("constants")
/** @type {import('@playwright/test').Locator} */

//Test the functionality of try to changing name and email id of my profile of Super admin
test("Test the functionality of changing name and email id of my profile of Super admin", async ({ page }) => {

    const profile= new Addcompany(page);
    await profile.login();
    await page.waitForTimeout(1000);
    await page.locator("//body/div/div/div/div/div/div[1]/div[1]/div[2]//*[name()='svg']").click();
    await page.locator("//li[normalize-space()='My Profile']").click();
    await page.waitForTimeout(1000);
    const name=await page.locator("input[placeholder='Enter First Name']").isEditable();
   
    const lastname=await page.locator("//input[@placeholder='Enter Last Name']").isEditable();
   
    const email=await page.locator("//input[@placeholder='Enter email address']").isEditable();
   
    if (!name && !lastname && !email){
        console.log("Edit functionality is not allowed from superadmin");
        expect(name).toBeFalsy()
        expect(lastname).toBeFalsy()
        expect(email).toBeFalsy();
    }

    else{

        console.log("Edit functionality is allowed from superadmin");
        expect(name).toBeTruthy()
        expect(lastname).toBeTruthy()
        expect(email).toBeTruthy();
    }


})

  // Test the functionality of changing name and email id of subadmin of my profile 

  test("test the functionality of changing name and email id of subadmin my profile  company user", async ({ page }) => {
    
    const subadminprofile= new Addcompany(page);
    //await subadminprofile.login();
    await subadminprofile.navigate();
   // await page.waitForTimeout(1000);
    await page.getByPlaceholder("Email Address").fill("cusertwo@yopmail.com");
    await page.getByPlaceholder("Password").fill("Anshul11@1234");
    const click=await page.locator("//span[normalize-space()='Log In']");
    const clicklogin=await click.click();
    await page.waitForTimeout(1000);
    await page.locator("//body//div//div//div//div//div//div//div//div[contains(text(),'cusertwo')]").click();
    await page.locator("//li[normalize-space()='My Profile']").click();
    await page.waitForTimeout(1000);
    const firstnameedit=await page.locator("//input[contains(@placeholder,'Enter Name')]");
    const firstnameupdate=await firstnameedit.fill("cusertwo");
    const email=await page.locator("//input[@placeholder='Enter email address']").isEditable();
    await page.locator("//button[normalize-space()='Save']").click();
    await page.pause();
    await page.waitForTimeout(1000);
    if (!email){
        console.log("Edit functionality is not allowed for  sub-admin");
        expect(email).toBeFalsy();
    }

    else{

        console.log("Edit functionality of email is not allowed from sub-admin user");
        expect(email).toBeTruthy();
    }
    const updatedFirstName = await firstnameedit.inputValue();
    console.log("Updated First Name:", updatedFirstName);
   
    if(updatedFirstName==="cusertwo"){
        console.log("The name is changed successfully" +updatedFirstName);
        expect(updatedFirstName).toBe("cusertwo");
    }

    else{
        console.log("The name is not changed successfully" +updatedFirstName);
        expect(updatedFirstName).not.toBe("cusertwo");
    }

})

    // Test the functionality of changing name and email id of company user of my profile.

    test("Test changing name and email in My Profile", async ({ page }) => {
    
        const subadminprofile = new Addcompany(page);
        await subadminprofile.navigate();
        
        // Login
        await page.getByPlaceholder("Email Address").fill("infoone@yopmail.com");
        await page.getByPlaceholder("Password").fill("Anshul11@123");
        await page.getByRole('button', { name: 'Log In' }).click();
    
        // Navigate to My Profile
        await page.waitForSelector("//*[name()='svg']");
        await page.locator("//body/div/div/div/div/div/div[1]/div[1]/div[2]//*[name()='svg']").click();
        await page.locator("//li[normalize-space()='My Profile']").click();
    
        // Fill Name Fields with Extra Interaction
        const firstnameEdit = page.locator("//input[@placeholder='Enter First Name']");
        await firstnameEdit.fill("compuser1");
        await firstnameEdit.press('Tab'); // Move focus
    
        const lastnameEdit = page.locator("//input[@placeholder='Enter Last Name']");
        await lastnameEdit.fill("UserAnshul");
        await lastnameEdit.press('Tab'); // Move focus
    
        // Save & Wait for Backend Response
        const saveButton = page.locator("//button[normalize-space()='Save']");
        await expect(saveButton).toBeVisible();
        await expect(saveButton).toBeEnabled();
        await saveButton.click({ force: true });
        await page.waitForSelector("//div[contains(text(),'Profile updated successfully')]", { timeout: 10000 });

        
        await page.waitForResponse(response => response.url().includes('/save-profile') && response.status() === 200);
    
        // Re-fetch and Verify
        const updatedFirstName = page.locator("//input[@placeholder='Enter First Name']");
        const updatedLastName = page.locator("//input[@placeholder='Enter Last Name']");
        
        await expect(updatedFirstName).toHaveValue("compuser1");
        await expect(updatedLastName).toHaveValue("UserAnshul");
    
        console.log("✅ First Name changed successfully");
        console.log("✅ Last Name changed successfully");
    });
    
        
            
    
       
        // await page.waitForTimeout(1000);
        // if (!email){
        //     console.log("Email edit functionality is not allowed for company user");
        //     expect(email).toBeTruthy();
        // }
    
        // else{
    
        //     console.log("Edit functionality is allowed from company user");
        //     expect(email).toBeTruthy();
        // }
        
        

        // Test the functionality of cancel button after by clicking on changing password of company user

        test("Test the functionality of cancel after click on change password company user", async ({ page }) => {
    
            const companypwdfun= new Addcompany(page);
            //await subadminprofile.login();
            await companypwdfun.navigate();
           // await page.waitForTimeout(1000);
           await page.getByPlaceholder("Email Address").fill("infoone@yopmail.com");
           await page.getByPlaceholder("Password").fill("Anshul11@123");
           const click=await page.locator("//span[normalize-space()='Log In']");
           const clicklogin=await click.click();
           await page.waitForTimeout(1000);
           await page.locator("//body/div/div/div/div/div/div[1]/div[1]/div[2]//*[name()='svg']").click();
           await page.locator("//li[normalize-space()='My Profile']").click();
           await page.locator("//button[normalize-space()='Change Password']").click();
           const caneclbuttonclick=await page.locator("//button[normalize-space()='Cancel']");
             
             
              if (await caneclbuttonclick.isVisible()){
                 await caneclbuttonclick.click();

                 const cancelmodal=await page.locator("//body/div[@role='presentation']/div[3]").isHidden();
                 if (cancelmodal){
                     console.log("The cancel button is working fine");
                     expect(cancelmodal).toBeTruthy();
                 }
                 else{
                     console.log("The cancel button is not working fine");
                     expect(cancelmodal).toBeFalsy();
                 }
                }

                 else{
                     console.log("The cancel button is not visible");
                 }

     })       // Test the validation message if user click on change password without entering anything
                 test("Test the functionality of validation meesage shows if user not enter anything ", async ({ page }) => {
    
                 const companypwdfun= new Addcompany(page);
                //await subadminprofile.login();
                 await companypwdfun.navigate();
                 // await page.waitForTimeout(1000);
                await page.getByPlaceholder("Email Address").fill("infoone@yopmail.com");
                await page.getByPlaceholder("Password").fill("Anshul11@123");
                const click=await page.locator("//span[normalize-space()='Log In']");
                const clicklogin=await click.click();
                await page.waitForTimeout(1000);
                await page.locator("//body/div/div/div/div/div/div[1]/div[1]/div[2]//*[name()='svg']").click();
                await page.locator("//li[normalize-space()='My Profile']").click();
                await page.locator("//button[normalize-space()='Change Password']").click();
               
                const changepasswordbutton=await page.locator("//button[@type='button'][normalize-space()='Change Password']");
                
                if (await changepasswordbutton.isVisible()){
                    await changepasswordbutton.click();
                    
                   const erroroldpwd=await page.locator("//div[contains(text(),'Old Password is required')]");
                   if(erroroldpwd.isVisible()){
                    const errortext=await erroroldpwd.textContent();
                          console.log("The error message is visible for old password" +errortext);
                            expect(errortext).toContain("Old Password is required");
                        }else{
                            console.log("The error message is not visible Old Password");
                        }

                        const errornewpwd=await page.locator("//div[contains(text(),'Password cannot be empty.')]");

                        if (errornewpwd.isVisible()){
                            const errortext=await errornewpwd.textContent();
                            console.log("The error message is visible for new password" +errortext);
                            expect(errortext).toContain("Password cannot be empty.");
                    }

                    else{

                        console.log("The error message is not visible New Password");
                    }
                   
                     const errorconfirmpwd=await page.locator("//div[contains(text(),'Both fields are required.')]");

                        if (errorconfirmpwd.isVisible() ){
                            const errortext=await errorconfirmpwd.textContent();
                            console.log("The error message is visible for confirm password" +errortext);
                            expect(errortext).toContain("Both fields are required.");
                        }
                 else{
                     console.log("The error message is not visible for all the fields");
                 }
            

                }
            })
                
        // Test the functionality if user enter correct old password and click on submit.

        test("Test the functionality if user correct enter old password and click on submit.", async ({ page }) => {
        const companypwdfun= new Addcompany(page);
        await companypwdfun.navigate();
        //login with company user
        await page.getByPlaceholder("Email Address").fill("infoone@yopmail.com");
        await page.getByPlaceholder("Password").fill("Anshul11@123");
        const click=await page.locator("//span[normalize-space()='Log In']");
        const clicklogin=await click.click();
        await page.waitForTimeout(1000);
        await page.locator("//body/div/div/div/div/div/div[1]/div[1]/div[2]//*[name()='svg']").click();
        await page.locator("//li[normalize-space()='My Profile']").click();
        await page.locator("//button[normalize-space()='Change Password']").click();

        // Enter old password and click on submit
        const oldpwd=await page.locator("//input[@placeholder='Enter old password']");
        const oldpwdenter=await oldpwd.fill("Anshul11@123");
        
        //click on change password
        const changepasswordbutton=await page.locator("//button[@type='button'][normalize-space()='Change Password']");
        await changepasswordbutton.click();
        
        //new password error message
        const errornewpwd=await page.locator("//div[contains(text(),'Password cannot be empty.')]");
        await errornewpwd.isVisible();
        const errornewpwdtext=await errornewpwd.textContent();
        
        
        //confirm password error message
        const errorconfirmpwd=await page.locator("//div[contains(text(),'Both fields are required.')]");
        await errorconfirmpwd.isVisible();
        const errorconfirmpwdtext=await errorconfirmpwd.textContent();
        
        
        //await page.waitForTimeout(1000);
        await expect(errornewpwdtext).toBe("Password cannot be empty.");
        console.log("The error message is visible for new password" +errornewpwdtext);
        await expect(errorconfirmpwdtext).toBe("Both fields are required.");
        console.log("The error message is visible for confirm password" +errorconfirmpwdtext);
       
    })


    // test the functionlity of by entering correct old pwd and new but not confirm pwd

    test("Test the functionality of by entering correct old pwd and new pwd but not confirm pwd", async ({ page }) => {
        const companypwdfun= new Addcompany(page);
        await companypwdfun.navigate();
        //login with company user
        await page.getByPlaceholder("Email Address").fill("infoone@yopmail.com");
        await page.getByPlaceholder("Password").fill("Anshul11@123");
        const click=await page.locator("//span[normalize-space()='Log In']");
        const clicklogin=await click.click();
        await page.waitForTimeout(1000);
        await page.locator("//body/div/div/div/div/div/div[1]/div[1]/div[2]//*[name()='svg']").click();
        await page.locator("//li[normalize-space()='My Profile']").click();
        await page.locator("//button[normalize-space()='Change Password']").click();

        // Enter old password and click on submit
        const oldpwd=await page.locator("//input[@placeholder='Enter old password']");
        const oldpwdenter=await oldpwd.fill("Anshul11@123");
       // Enter new password
        const newpwd=await page.locator("//input[@placeholder='Enter new password']");
        const newpwdenter=await newpwd.fill("Anshul11@123");
        
        //click on change password
        const changepasswordbutton=await page.locator("//button[@type='button'][normalize-space()='Change Password']");
        await changepasswordbutton.click();
        
        //new password error message
        // const errornewpwd=await page.locator("//div[contains(text(),'Password cannot be empty.')]");
        // await errornewpwd.isVisible();
        // const errornewpwdtext=await errornewpwd.textContent();
        
        
        //confirm password error message
        const errorconfirmpwd=await page.locator("//div[contains(text(),'Both fields are required.')]");
        await errorconfirmpwd.isVisible();
        const errorconfirmpwdtext=await errorconfirmpwd.textContent();
        
        
        //await page.waitForTimeout(1000);
      
        await expect(errorconfirmpwdtext).toBe("Both fields are required.");
        console.log("The error message is visible for confirm password" +errorconfirmpwdtext);
       
    })

    //Test the functionality if new and confirm password is not same

    test("Test the functionality if new and confirm password is not same", async ({ page }) => {
        const companypwdfun= new Addcompany(page);
        await companypwdfun.navigate();
        //login with company user
        await page.getByPlaceholder("Email Address").fill("infoone@yopmail.com");
        await page.getByPlaceholder("Password").fill("Anshul11@123");
        const click=await page.locator("//span[normalize-space()='Log In']");
        const clicklogin=await click.click();
        await page.waitForTimeout(1000);
        await page.locator("//body/div/div/div/div/div/div[1]/div[1]/div[2]//*[name()='svg']").click();
        await page.locator("//li[normalize-space()='My Profile']").click();
        await page.locator("//button[normalize-space()='Change Password']").click();
         // Enter old password and click on submit
         const oldpwd=await page.locator("//input[@placeholder='Enter old password']");
         const oldpwdenter=await oldpwd.fill("Anshul11@123");
        // Enter new password
         const newpwd=await page.locator("//input[@placeholder='Enter new password']");
         await newpwd.fill("Anshul11@1234");
        // Enter confirm password
          const confipwd=await page.locator("//input[@placeholder='Confirm new password']");
          await confipwd.fill("Anshul@12345");
            //click on change password
        const changepasswordbutton=await page.locator("//button[@type='button'][normalize-space()='Change Password']");
        await changepasswordbutton.click();


       const errortxtforconfirmpwd=await page.locator("//div[contains(text(),'Passwords do not match.')]");
        await  errortxtforconfirmpwd.isVisible();
        const erroemessage=await errortxtforconfirmpwd.textContent();
        await expect(erroemessage).toBe("Passwords do not match.");
        console.log("The error message is visible for confirm password" +erroemessage);

}) 

    //test the functionality if user able to change password successfully// it is not working due to token issue
        test("test the functionality of change password successfully" , async ({page})=> {
        const successfulllogin = new Addcompany(page)
        await successfulllogin.navigate();
        await page.getByPlaceholder("Email Address").fill("infoone@yopmail.com");
        await page.getByPlaceholder("Password").fill("Anshul11@123");
        const click=await page.locator("//span[normalize-space()='Log In']");
        const clicklogin=await click.click();
        await page.waitForTimeout(1000);
        await page.locator("//body/div/div/div/div/div/div[1]/div[1]/div[2]//*[name()='svg']").click();
        await page.locator("//li[normalize-space()='My Profile']").click();
        await page.locator("//button[normalize-space()='Change Password']").click();
         // Enter old password and click on submit
         const oldpwd=await page.locator("//input[@placeholder='Enter old password']");
         const oldpwdenter=await oldpwd.fill("Anshul11@123");
        // Enter new password
         const newpwd=await page.locator("//input[@placeholder='Enter new password']");
         await newpwd.fill("Anshul@12345");
        // Enter confirm password
          const confipwd=await page.locator("//input[@placeholder='Confirm new password']");
          await confipwd.fill("Anshul@12345");
        // Click on change password
        const changepasswordbutton=await page.locator("//button[@type='button'][normalize-space()='Change Password']");
        await changepasswordbutton.click();
        //await page.pause()
        await page.waitForTimeout(1000);

        const passwordchange=await page.locator("//div[contains(text(),'Authorization token is missing or invalid')]");
        const messagepwdchange=await passwordchange.textContent();
        expect(messagepwdchange).toBe("Authorization token is missing or invalid")
        console.log("The message is"+messagepwdchange)
})

   // Test the functionality if company user enter correct old pwd , new and confirm different password.
    
   test("test the functionality if old is correct, new and confirm pwd is different" , async ({page})=> {
    const successfulllogin = new Addcompany(page)
    await successfulllogin.navigate();
    await page.getByPlaceholder("Email Address").fill("infoone@yopmail.com");
    await page.getByPlaceholder("Password").fill("Anshul11@123");
    const click=await page.locator("//span[normalize-space()='Log In']");
    const clicklogin=await click.click();
    await page.waitForTimeout(1000);
    await page.locator("//body/div/div/div/div/div/div[1]/div[1]/div[2]//*[name()='svg']").click();
    await page.locator("//li[normalize-space()='My Profile']").click();
    await page.locator("//button[normalize-space()='Change Password']").click();
     // Enter old password and click on submit
     const oldpwd=await page.locator("//input[@placeholder='Enter old password']");
     const oldpwdenter=await oldpwd.fill("Anshul11@123");
    // Enter new password
     const newpwd=await page.locator("//input[@placeholder='Enter new password']");
     await newpwd.fill("Anshul@1234");
    // Enter confirm password
      const confipwd=await page.locator("//input[@placeholder='Confirm new password']");
      await confipwd.fill("Anshul@12346");
    // Click on change password
    const changepasswordbutton=await page.locator("//button[@type='button'][normalize-space()='Change Password']");
    await changepasswordbutton.click();
    //await page.pause()
    await page.waitForTimeout(1000);

    const passwordchange=await page.locator("//div[contains(text(),'Passwords do not match.')]");
    const messagepwdchange=await passwordchange.textContent();
    if(messagepwdchange){
    expect(messagepwdchange).toBe("Passwords do not match.");
    console.log("Passwords do not match."+messagepwdchange)
    }
    else{
        console.log("this functionaliy is not working")

    }
})

  // Test functionality with wrong old pwd with correct new and confirm pwd// it is not working due to token issue

  test("test the functionality with wrong old and new and confirm pwd is same" , async ({page})=> {
    const successfulllogin = new Addcompany(page)
    await successfulllogin.navigate();
    await page.getByPlaceholder("Email Address").fill("infoone@yopmail.com");
    await page.getByPlaceholder("Password").fill("Anshul11@123");
    const click=await page.locator("//span[normalize-space()='Log In']");
    const clicklogin=await click.click();
    await page.waitForTimeout(1000);
    await page.locator("//body/div/div/div/div/div/div[1]/div[1]/div[2]//*[name()='svg']").click();
    await page.locator("//li[normalize-space()='My Profile']").click();
    await page.locator("//button[normalize-space()='Change Password']").click();
     // Enter old password and click on submit
     const oldpwd=await page.locator("//input[@placeholder='Enter old password']");
     const oldpwdenter=await oldpwd.fill("Anshul11@1234");
    // Enter new password
     const newpwd=await page.locator("//input[@placeholder='Enter new password']");
     await newpwd.fill("Anshul@123");
    // Enter confirm password
      const confipwd=await page.locator("//input[@placeholder='Confirm new password']");
      await confipwd.fill("Anshul@123");
    // Click on change password
    const changepasswordbutton=await page.locator("//button[@type='button'][normalize-space()='Change Password']");
    await changepasswordbutton.click();
    //await page.pause()
    await page.waitForTimeout(1000);

    const passwordchange=await page.locator("//div[contains(text(),'Authorization token is missing or invalid')]");
    const messagepwdchange=await passwordchange.textContent();
    expect(messagepwdchange).toBe("Authorization token is missing or invalid")
    console.log("The message is"+messagepwdchange)
})


     


       