const  {ECGcomp}  = require('./Addcompanyfunction');
const  {Actionofeditgroup}  = require('./Addcompanyfunction');

//console.log('Imported Addcompanyfun:', Addcompanyfun);
const Addcom=require('./Addcom');
//const Addgroup=require('./Addcom')
const{test , expect}= require('@playwright/test');
const exp = require('constants');




test("click on Add company button" , async ({page})=>{
    const newaddcomp=new Addcom(page);
    await newaddcomp.login();
    await newaddcomp.clickgroupmanagement();
    const grp13=await page.locator("//p[normalize-space()='grp13']").click();
    //const Addcomp=page.locator("//div[contains(text(),'Add Company')]");
    await newaddcomp.clickAddcompanybutton();
    console.log("user able to click on Add company")

    });

    //To be verify all vaidation message if any of the fields is not entered.

    test("Verify all validation message" , async  ({page})=>{
        
        const newaddcom= new Addcom(page);
        await newaddcom.login();
        await newaddcom.clickgroupmanagement();
        const grp13=await page.locator("//p[normalize-space()='grp13']").click();
        await page.waitForTimeout(1000);
        await newaddcom.clickAddcompanybutton();
        await newaddcom.clickAddcompanyinfo();
        
        await ECGcomp(page);
})

  
//Test to validate form fill successfully with all fields

     
     test("fill form successfully" , async({page})=>{

        const newaddcom= new Addcom(page);
        await newaddcom.login();
        await newaddcom.clickgroupmanagement();
        const grp13=await page.locator("//p[normalize-space()='grp13']").click();
        const id=76;
        const grpid="ID67888";
        const grpname="grp13";
        await page.waitForTimeout(1000);
        await newaddcom.clickAddcompanybutton();
        const urlcomapny="https://devecg.resourcifi.tech/super/group/list?id=76&grp=ID67888&grpname=grp13";
        
        await ECGcomp(page);
        await newaddcom.clickAddcompanyinfo();
        await page.waitForTimeout(1000);

        if(urlcomapny){

            expect(urlcomapny).toContain(grpname);
            console.log("correcturl:"+urlcomapny)
        }
        else{
            console.log("user not redirect to correct url")
        }

        //await newaddcom.grp13dashboardurl();
        const newcompadd= await page.waitForSelector('text=Name 21', { timeout: 10000 });
        const textIsVisible = await page.locator('text=Name 21').first().isVisible();
        if(textIsVisible)
       {
          expect(textIsVisible).toBeTruthy();
          console.log("Testcase passed")
        }

        else{

           console.log("Test case failed")
        }
    
    })

    //Edit Test functionality of a company, change inactive to Active and inactive to Active

    test("Testing edit functionality" , async({page})=>{
        await page.setViewportSize({ width: 1536, height: 864 }); // Full HD resolution


        const newedit= new Addcom(page);
         await newedit.login();
         await newedit.clickgroupmanagement();
          await Actionofeditgroup();
        })    

         //Test the logout  for confirm functionality

         test("test the logout functionality" , async ({page})=>{
         const newlogout = new Addcom(page);
         await newlogout.login();
         await page.locator("//body/div/div/div/div[3]/div[1]/div[2]/div[1]").click();
         await page.locator("//li[normalize-space()='Log Out']").click();
         await page.waitForTimeout(5000);
         const logoutpopupconfirm= await page.locator("//button[normalize-space()='Confirm']").click();
         const urllogout="https://devecg.resourcifi.tech/login";
         await page.waitForURL(urllogout);
        
         if (page.url()===urllogout){
            expect(page.url()).toBe(urllogout)
            console.log("userloggedout successfully");
         }
         else
         {
          console.log("user not loggedout successfully");

           }

        })

        ////Test the logout  for cancel  functionality

        test.only("test the cancel functionality" , async ({page})=>{
            const newlogout = new Addcom(page);
            await newlogout.login();
            await page.locator("//body/div/div/div/div[3]/div[1]/div[2]/div[1]").click();
            await page.locator("//li[normalize-space()='Log Out']").click();
            await page.waitForTimeout(5000);

        const logoutpopupcancel=  await page.locator("(//button[normalize-space()='Cancel'])[1]").click();
        const urlnotloggout="https://devecg.resourcifi.tech/super/dashboard";
        await page.waitForURL(urlnotloggout)
        if (page.url()===urlnotloggout){
        expect(page.url()).toBe(urlnotloggout)
        console.log("user remains on same page successfully");
         }
        else{

            console.log("Cancel button is not working successfully");
        }
    })
            


   



    
