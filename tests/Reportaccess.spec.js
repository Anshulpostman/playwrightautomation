const{test , expect}=require('@playwright/test')
const { Addgroup } = require('./Addgroup');

test("test the functionality by clicking on 1A generate report", async({page})=>{

    const reportaccess=new Addgroup(page);
    await reportaccess.login();
    await page.waitForTimeout(1000);
    await page.locator("//div[normalize-space()='Report Access']").click();
   
    await page.locator("xpath=/html/body/div[1]/div[1]/div[3]/div[2]/div/div[2]/div[1]/table/tbody/tr[6]/td[5]/div/div").click();
    
    await page.locator("//div[normalize-space()='View Group']").click();
   
     await page.locator("//div[contains(text(),'Generate Report')]").click();
  //await page.locator("//body[1]/div[3]/div[3]/div[1]/div[3]/select[1]").waitFor();
    await page.locator("//body//div[@role='presentation']//div//div[3]//select[1]").selectOption({label:"2025"});
    
   
    await page.locator("//div[5]//select[1]").selectOption({label:"Report 1A Large"});
    await page.locator("//button[normalize-space()='Generate']").click();
   
    const table1a=await page.locator("//p[normalize-space()='Table 1A']").getByText("Table 1A")
    const tablestored=await table1a.innerText();
    if(await tablestored.includes("Table 1A")){
        console.log("report generate successfully"+tablestored)
        expect(tablestored).toBe("Table 1A")
    }
    else{

        console.log("Report is not generate successfully")
    }
})

     test("test the functionality by clicking on 2 A generate report", async({page})=>{

    const reportaccess=new Addgroup(page);
    await reportaccess.login();
    await page.waitForTimeout(1000);
    await page.locator("//div[normalize-space()='Report Access']").click();
   
    await page.locator("xpath=/html/body/div[1]/div[1]/div[3]/div[2]/div/div[2]/div[1]/table/tbody/tr[6]/td[5]/div/div").click();
    
    await page.locator("//div[normalize-space()='View Group']").click();
   
   await page.locator("//div[contains(text(),'Generate Report')]").click();
   //await page.locator("//body[1]/div[3]/div[3]/div[1]/div[3]/select[1]").waitFor();
   await page.locator("//body//div[@role='presentation']//div//div[3]//select[1]").selectOption({label:"2025"});
    
   
    await page.locator("//div[5]//select[1]").selectOption({label:"Report 2A TotalSpend"});
    await page.locator("//button[normalize-space()='Generate']").click();
   
    const table1a=await page.locator("//div[contains(text(),'No Record Found !')]").getByText("No Record Found !")
    const tablestored=await table1a.innerText();
    if(await tablestored.includes("No Record Found !")){
        console.log("report is Blank"+tablestored)
        expect(tablestored).toBe("No Record Found !")
    }
    else{

        console.log("Report is not generate successfully")
    }
})

   // Test the functionality to make sure that cancel button redirect to correct page
    test("Test the functionality to make sure that cancel button redirect to correct page" , async({page})=>{
   const reportaccess=new Addgroup(page);
    await reportaccess.login();
    await page.waitForTimeout(1000);
    await page.locator("//div[normalize-space()='Report Access']").click();
   
    await page.locator("xpath=/html/body/div[1]/div[1]/div[3]/div[2]/div/div[2]/div[1]/table/tbody/tr[6]/td[5]/div/div").click();
    
    await page.locator("//div[normalize-space()='View Group']").click();
    await page.locator("//div[contains(text(),'Generate Report')]").click();
    await page.locator("//button[normalize-space()='Cancel']").click();
    await page.waitForLoadState("domcontentloaded"); 
    
    const currenturl=page.url()
    const expectedurl="https://devecg.resourcifi.tech/super/report/list?id=128&grp=ID88958&grpname=Reports+donot+delete";
    if(currenturl===expectedurl){
        console.log("user redirect to correct page" + currenturl)
        expect(currenturl).toBe(expectedurl)
    }
    else{
         
        console.log("user not redirecting to correct page")
    }


    })
   
    // Test the functionality of Superadmin lock report the same report locked on th end user side.
    test("Test the functionality of Superadmin lock report the same report locked on th end user side" , async({page})=>{

    const reportaccess=new Addgroup(page);
    await reportaccess.login();
    await page.waitForTimeout(1000);
    await page.locator("//div[normalize-space()='Report Access']").click();
    await page.locator("//tbody/tr[1]/td[5]/div[1]/div[1]/div[2]//*[name()='svg']").click();
    await page.locator("//div[normalize-space()='View Group']").click();
    await page.locator("//tbody/tr[2]/td[8]/div[1]/div[1]/div[2]//*[name()='svg']").click();
    await page.waitForTimeout(1000);
    await page.locator("//div[normalize-space()='Lock Report']").click();
    const confirm=await page.locator("//button[normalize-space()='Confirm']").click();
    
   
    const InActive= page.locator("//div[contains(text(),'Locked')]");
   
    const Inactivesave= await InActive.innerText("Locked");
    if(Inactivesave==="Locked"){

        console.log("Lock the report successfully"+Inactivesave)
    
    expect(Inactivesave).toBe("Locked")
    }

    else{
        console.log("Lock report is not working")
    }
     

    
    // Open a new window properly
    
    const{chromium}=require('playwright');
    const browser = await chromium.launch({ headless: false }); // Launch new browser

   const newcontext=await browser.newContext();
   const newPage = await newcontext.newPage();
   await newPage.goto("https://devecg.resourcifi.tech/login");

   const newReportAccess = new Addgroup(newPage);
   await newReportAccess.companylogin();
   

   const ActiveParent=await page.locator("xpath=/html/body/div[1]/div[1]/div[2]/div/div/div[2]/div/div")
   const Activechild=await page.getByText('Locked');
   const ActiveText = await Activechild.textContent();

   if (ActiveText) {
     console.log("Expected:", Inactivesave);
     console.log("Actual:", ActiveText.trim());
   
     if (Inactivesave.trim() === ActiveText.trim()) {
       console.log("✅ Status changed successfully");
       expect(Inactivesave).toBeTruthy();
       expect(ActiveText.trim()).toBeTruthy();
     } else {
       console.log("❌ Status not updated correctly");
     }
   } else {
     console.error("❌ Failed to fetch ActiveText (element might be missing)");
   }
})


// Test the functionality of Superadmin lock report the same report locked on th end user side.
test.only("Test the functionality of Superadmin unlock report the same report unlocked on th end user side" , async({page})=>{

    const reportaccess=new Addgroup(page);
    await reportaccess.login();
    await page.waitForTimeout(1000);
    await page.locator("//div[normalize-space()='Report Access']").click();
    await page.locator("//tbody/tr[1]/td[5]/div[1]/div[1]/div[2]//*[name()='svg']").click();
    await page.locator("//div[normalize-space()='View Group']").click();
    await page.locator("//tbody/tr[2]/td[8]/div[1]/div[1]/div[2]//*[name()='svg']").click();
    await page.waitForTimeout(1000);
    await page.locator("//div[normalize-space()='Unlock Report']").click();
    await page.locator("//button[normalize-space()='Confirm']").click();
    const Active= page.locator("(//div[contains(text(),'Active')])[2]")
    const activesave= await Active.innerText("Active");
    if(activesave==="Active"){

        console.log("Active the report successfully"+activesave)
    
    expect(activesave).toBe("Active")
    }

    else{
        console.log("Active report is not working")
    }
   //Open a new window properly
    
    const{chromium}=require('playwright');
    const browser = await chromium.launch({ headless: false }); // Launch new browser

   const newcontext=await browser.newContext();
   const newPage = await newcontext.newPage();
   await newPage.goto("https://devecg.resourcifi.tech/login");

   const newReportAccess = new Addgroup(newPage);
   await newReportAccess.companylogin();
   

   const ActiveParent=await page.locator("(//button[normalize-space()='Active'])[1]")
   const Activechild=await page.getByText('Active')
   const ActiveText =  (await Activechild.first().textContent()).trim();

   if (ActiveText) {
     console.log("Expected:", activesave);
     console.log("Actual:", ActiveText.trim());
   
     if (activesave.trim() === ActiveText.trim()) {
       console.log("✅ Active from unlock Status changed successfully");
       expect(activesave).toBeTruthy();
       expect(ActiveText.trim()).toBeTruthy();
     } else {
       console.log("❌ Status not updated correctly");
     }
   } else {
     console.error("❌ Failed to fetch ActiveText (element might be missing)");
   }
})
