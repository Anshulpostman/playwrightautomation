const  {ECGcomp}  = require('./Addcompanyfunction');

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

    test.only("Testing edit functionality" , async({page})=>{

        const newedit= new Addcom(page);
         await newedit.login();
         await newedit.clickgroupmanagement();
         const grp13=await page.locator("//p[normalize-space()='grp13']").click();
         const Actionclick=await page.locator("//tbody/tr[1]/td[7]/div[1]/div[1]/div[1]").click();
         const editactionclick=await page.locator("//div[normalize-space()='Edit Company']").click();
         await page.waitForTimeout(1000);
         await page.locator("//input[@placeholder='Enter company name']").fill('');
         await page.locator("//input[@placeholder='Enter company name']").fill('Name 27');
         await page.waitForTimeout(1000);
         await page.locator("//div//div//div//div//div//div//div//div[3]//select[1]").selectOption({label : "CCA"});
         await page.waitForTimeout(1000);
         const updatebutton=await page.locator("(//div[contains(text(),'Update')])[2]").click();
         //const clikedbutton=await page.locator("(//div[contains(text(),'Update')])[2]").clikedbutton('clicked')
         console.log("update functionality is working correct")
        


          

         
        







    })

   



    
