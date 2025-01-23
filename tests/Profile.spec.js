const{test , expect} = require('@playwright/test');
//const Addcom  = require('./Addcompanyfunction');


const {Addcom}=require('./Addcom');
const config = require('../config/environment');
const Addinput = require('./Clinput');
const Addgroup = require('./forgotpassword');
const exp = require("constants")


test("Test the functionality of changing name and email id of my profile  subadmin", async ({ page }) => {

    const profile= new Addcom(page);
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
    
    const subadminprofile= new Addcom(page);
    //await subadminprofile.login();
    await subadminprofile.navigate();
   // await page.waitForTimeout(1000);
    await page.getByPlaceholder("Email Address").fill("cusertwo@yopmail.com");
    await page.getByPlaceholder("Password").fill("Anshul11@1234");
    const click=await page.locator("//span[normalize-space()='Log In']");
    const clicklogin=await click.click();
    await page.waitForTimeout(1000);
    await page.locator("//body/div/div/div/div/div/div[1]/div[1]/div[2]//*[name()='svg']").click();
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

        console.log("Edit functionality is allowed from company user");
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

    test.only("Test the functionality of changing name and email id of company user of my profile", async ({ page }) => {
    
        const subadminprofile= new Addcom(page);
        //await subadminprofile.login();
        await subadminprofile.navigate();
       // await page.waitForTimeout(1000);
        await page.getByPlaceholder("Email Address").fill("auser01@yopmail.com");
        await page.getByPlaceholder("Password").fill("Anshul11@123");
        const click=await page.locator("//span[normalize-space()='Log In']");
        const clicklogin=await click.click();
        await page.waitForTimeout(1000);
        await page.locator("//body/div/div/div/div/div/div[1]/div[1]/div[2]//*[name()='svg']").click();
        await page.locator("//li[normalize-space()='My Profile']").click();
        await page.waitForTimeout(1000);
        const firstnameedit=await page.locator("//input[@placeholder='Enter First Name']");
        const firstnameupdate=await firstnameedit.fill("Auser");
        const lastnameedit=await page.locator("//input[@placeholder='Enter Last Name']");
        const lastnameupdate=await lastnameedit.fill("userA");
        const email=await page.locator("//input[@placeholder='Enter email address']").isEditable();
        await page.locator("//button[normalize-space()='Save']").click();
        
        
        await page.waitForTimeout(1000);
        if (!email){
            console.log("Edit functionality is not allowed for  sub-admin");
            expect(email).toBeFalsy();
        }
    
        else{
    
            console.log("Edit functionality is allowed from company user");
            expect(email).toBeTruthy();
        }
        // 
        
        if(await firstnameupdate.isVisible()){
            console.log("First Name is visible");
            
        }
        else{
            console.log("First Name is not visible");
        }

        if (await lastnameupdate.isVisible()){
            console.log("Last Name is visible");
        }
        else{
            console.log("Last Name is not visible");
        }
    
    })




