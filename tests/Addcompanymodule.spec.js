const  {ECGcomp}  = require('./Addcompanyfunction');

//console.log('Imported Addcompanyfun:', Addcompanyfun);
const Addcom=require('./Addcom');
//const Addgroup=require('./Addcom')
const{test , expect}= require('@playwright/test')




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

    test.only("Verify all validation message" , async  ({page})=>{
        
        const newaddcom= new Addcom(page);
        await newaddcom.login();
        await newaddcom.clickgroupmanagement();
        const grp13=await page.locator("//p[normalize-space()='grp13']").click();
        await page.waitForTimeout(1000);
        await newaddcom.clickAddcompanybutton();
        await newaddcom.clickAddcompanyinfo();
        
        await ECGcomp(page);
        
        
              
  
  
                
            
            
})
