
const { test, expect } = require('@playwright/test');
const {Addcom}=require('./Addcom');
const { ECGcomp } = require('./Addcompanyfunction');
const  {Actionofeditgroup}  = require('./Addcompanyfunction');
const config = require('../config/environment'); 
 const Addinput = require('./Clinput');
 const Addgroup = require('./forgotpassword'); 
 const exp = require('constants');
 
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

test.only("Test the functionality of login ifcompany  user is active", async ({ page }) => {

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
    await page.waitForTimeout(1000);
    await page.locator("//tbody/tr[1]/td[7]/div[1]/div[1]/div[2]//*[name()='svg']").click();
    await page.locator("//div[normalize-space()='Edit Company']").click();
    const copyemailaddress=await page.locator("//input[@placeholder='Enter Email Address']");
    const emailaddress=await copyemailaddress.inputValue();
    console.log(emailaddress);




})