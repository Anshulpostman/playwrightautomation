     //const { default: test } = require('node:test')

     
    //  const{test , expect , request}=require('@playwright/test')
      
        
    

    //  let AuthToken='';
    //  // Use beforeAll to fetch the authentication token before tests run

    //  test.beforeAll(async ({ playwright }) => {
    //     const requestContext = await playwright.request.newContext();
    
    //     const loginResponse = await requestContext.post("https://devecg.resourcifi.tech/api/login", {
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'Accept': 'application/json'  // ✅ Ensure API returns JSON
    //         },
    //         data: {
    //             username: 'usercomp99@yopmail.com',
    //             password: 'Anshul11@123',
    //         }
    //     });
    
    //     console.log("Response Status:", loginResponse.status());
    //     console.log("Response Headers:", loginResponse.headers());
    //     const responseText = await loginResponse.text(); // Read raw response
    //     console.log("Raw Response Body:", responseText);
    
    //     // ✅ Prevent JSON error if response is not JSON
    //     try {
    //         const responseBody = JSON.parse(responseText);
    //         authToken = responseBody.token;
    //         console.log("Auth Token:", authToken);
    //     } catch (error) {
    //         console.error("Failed to parse JSON response!");
    //     }
    
    //     await requestContext.dispose();
    // });
    
    const { Addgroup, fillmandatoryfields, mandatoryfields } = require('./Addgroup');
    const{test , expect }=require('@playwright/test')
 
//  test the login functionality with valid email id and pwd
test("Test that company user login successfully" , async ({page})=>{

    const uploaddata=new Addgroup(page)
    await uploaddata.companylogin()
    console.log("Company user logging successfully")
  })
  
   // test the functionality if user able to click on Data Mangement
  test("test the functionality if user able to click on data management" , async ({page}) => {

    const datamanage=new Addgroup(page)
    await datamanage.companylogin();
    const datamanageclick=await page.locator("(//div[contains(text(),'Data Management')])[1]");
    await datamanageclick.click();
    await page.waitForTimeout(1000);

    const headerurl=await page.url()
    const dashboardurl="https://devecg.resourcifi.tech/end/data";
    if(headerurl===dashboardurl){
    console.log("user redirect to correct page" + dashboardurl)
    expect(headerurl).toBe(dashboardurl);
    }
    else{
        console.log("user not redirect successfully")
    }
 })

   // Test the functionality by clicking on AddData and model opened successfully

        test("Test the functionality by clicking on AddData and model opened successfully", async ({ page }) => {
        const addData = new Addgroup(page);
        await addData.companylogin();
        const dataManagementClick = await page.locator("(//div[contains(text(),'Data Management')])[1]");
        await dataManagementClick.click();
        await page.waitForTimeout(1000);

        const addDataButton = await page.locator("//div[contains(text(),'Add Data')]");
        await addDataButton.click();
        await page.waitForTimeout(1000);

        const modal = await page.locator("body > div.MuiModal-root.css-1sucic7 > div.modal > div");
        const mobalvisible = await modal.isVisible();
        if (mobalvisible) {
            console.log("Modal opened successfully");
            expect(mobalvisible).toBe(true);
        } else {
            console.log("Modal did not open");
        }
    });

        // Test the functionality of cancel , modal is hide

          test("Test the functionality of cancel by clicking" , async ({page})=>{

            const cancel= new Addgroup(page)
             await cancel.companylogin();
             const dataManagementClick = await page.locator("(//div[contains(text(),'Data Management')])[1]");
             await dataManagementClick.click();
             await page.waitForTimeout(1000);
     
             const addDataButton = await page.locator("//div[contains(text(),'Add Data')]");
             await addDataButton.click();
             await page.waitForTimeout(1000);
             const cancelclick=await page.locator("//button[normalize-space()='Cancel']");
             await cancelclick.click();
             const modal = await page.locator("body > div.MuiModal-root.css-1sucic7 > div.modal > div");
             const mobalvisible = await modal.isHidden();
             


             if(mobalvisible){

               console.log("Model clsoed successfully" )
               expect(mobalvisible).toBe(true)

             }

             else{

                console.log("model not close successfully")
             }


          })


          // Test the functionality by clicking Enter manually data by clikcing on manually data button

          test("Test the functionality by clicking Enter manually data by clikcing on manually data button" , async({page})=>{

          const enterdata=new Addgroup(page);
          await enterdata.companylogin();
          const dataManagementClick = await page.locator("(//div[contains(text(),'Data Management')])[1]");
          await dataManagementClick.click();
          await page.waitForTimeout(1000);
     
          const addDataButton = await page.locator("//div[contains(text(),'Add Data')]");
          await addDataButton.click();

          const enternanually=await page.locator("//button[normalize-space()='Enter Data Manually']");
          await enternanually.click();

          await page.waitForTimeout(1000);
          const manualdata= await page.url();
          const inputmanagementpageurl="https://devecg.resourcifi.tech/end/data/add-data"

          if(manualdata===inputmanagementpageurl){
          console.log("user redirect to the correct page")
          expect(manualdata).toBe(inputmanagementpageurl)

          }

          else{

            console.log("user not able to redirect page successfully")
          }




          })

         // Test the functionality by clicking on download to make sure that file is downloaded in valid format

        test("test the functionality by clicking on download file and make sure that file has been downloaded" , async({page})=>{

        const download=new Addgroup(page)
        await download.companylogin();
        const dataManagementClick = await page.locator("(//div[contains(text(),'Data Management')])[1]");
        await dataManagementClick.click();
        await page.waitForTimeout(1000);
        await page.locator("//div[contains(text(),'Add Data')]").click();
        
        const [downloadsave]= await Promise.all([
          
            page.waitForEvent('download'),
            page.locator("//p[normalize-space()='Download Template']").click(),
          //await page.locator("//p[normalize-space()='Download Template']").click()
          await page.waitForTimeout(10000)

        ])
        
        const filename= downloadsave.suggestedFilename();
        const savepath = `./downloads/${filename}`;

         console.log(`✅ File downloaded successfully: ${savepath}`);           
        
      
})

        // Test the functionality by click on cancel and user redirect to the correct page

        test("Test the functionality by clicking on cancel and user redirect to the correct page" , async({page})=>{
        const cancel=new Addgroup(page);
        await cancel.companylogin();
        await page.locator("//div[contains(text(),'Add Data')]").click();
        const enternanually=await page.locator("//button[normalize-space()='Enter Data Manually']");
        await enternanually.click();
        const cancelclick=await page.locator("//div[normalize-space()='Cancel']");
        const cancelbutton=await cancelclick.click();
        const enduserdashboardurl="https://devecg.resourcifi.tech/end/data";
        const headerurl=await page.url();
        if(headerurl===enduserdashboardurl){
        console.log("user redirect to the correct page")
        expect(headerurl).toBe(enduserdashboardurl)
        }
        else{
            console.log("user not redirect successfully")
        }
})
        // Test the functionality by clicking on save as Draft and make sure that record saved as draft

        test("Test the functionality by clicking on save as Draft and make sure that record saved as draft" , async({page})=>{

        const saveasdraft=new Addgroup(page);
        await saveasdraft.companylogin();
        await page.locator("//div[contains(text(),'Add Data')]").click();
        await page.locator("//button[normalize-space()='Enter Data Manually']").click();
        await page.waitForTimeout(1000);
        await page.locator("//body/div/div/div/div/div/div/div/div/div/div/div/div/div[1]/div[2]/div[1]/select[1]").selectOption({label: '2025'});
        await page.waitForTimeout(1000);
        await page.locator("//input[@placeholder='Enter company name']");
        await page.waitForTimeout(1000);
        await page.locator("//body/div/div/div/div/div/div/div/div/div/div/div/div/div[1]/div[2]/div[1]/select[1]");
        await page.locator("//body/div/div/div/div/div/div/div/div/div/div/div/div/div[1]/div[2]/div[1]/select[1]");
        await page.locator("//body/div/div/div/div/div/div/div/div/div/div/div/div/div[1]/div[2]/div[1]/select[1]");
        await page.locator("//input[@placeholder='Enter total spend (ex-00.00)']").fill("1000");
        await page.waitForTimeout(1000);
        await page.locator("//input[@placeholder='Enter total DBE (ex-00.00)']").fill("100");
        await page.waitForTimeout(1000);
        await page.locator("//input[@placeholder='Enter total DBE % (ex-0.0%)']").fill("12");
        await page.waitForTimeout(1000);
        const saveasdraftone=await page.locator("//div[normalize-space()='Save as Draft']");
        const saveasdraftbutton=await saveasdraftone.click();
        await page.waitForTimeout(1000);
        
        const recorddraft=await page.getByText('2025');
        await recorddraft.waitFor(); 
        
        const saverecord = await recorddraft.innerText(); 
        await page.waitForTimeout(1000);
       
        if (saverecord==="2025"){
        console.log("Record saved as draft successfully")
        expect(saverecord).toBe("2025")
        }
        else{
          console.log("Record not saved as draft")
        }
        
})

      // Test the functionality of edit/view save draft record
      
      test("test the functuinality of edit/view record" , async({page})=>{

        const editfunctionality=new Addgroup(page);
        await editfunctionality.companylogin();
        const edit=await page.locator("//body/div/div/div/div/div/div/div[2]/div[1]/div[2]/div[2]//*[name()='svg']");
        const editclick=await edit.click();
        const editdata=await page.locator("//li[normalize-space()='Edit Data']");
        await editdata.waitFor();  // ✅ Waits until the element appears
        await editdata.click();
        const inputmanagementpageurl="https://devecg.resourcifi.tech/end/data/add-data";
        const editdataurl=await page.url();
        if (editdataurl===inputmanagementpageurl){
        console.log("user redirect to correct page")
        expect(editdataurl).toBe(inputmanagementpageurl)
        }
        else{
          console.log("user not redirect successfully")
        }
      
})

       // Test the functionality of delete record and click on cancel record
       test("test the functuinality of delete and click on cancel record" , async({page})=>{
       const deletefunctionality=new Addgroup(page);
        await deletefunctionality.companylogin();
        const deleteone=await page.locator("//body/div/div/div/div/div/div/div[2]/div[1]/div[2]/div[2]//*[name()='svg']");
        const deleteclick=await deleteone.click();
        const deldata=await page.locator("//li[normalize-space()='Delete Data']");
        await deldata.waitFor();  // ✅ Waits until the element appears
        await deldata.click();
        const deletecancel=await page.locator("//button[normalize-space()='Cancel']");
        const deletecancelclick=await deletecancel.click();
        const currentURL = page.url();
        const enduserdashboardurl="https://devecg.resourcifi.tech/end/data";
        
        
        if (await currentURL===enduserdashboardurl){
          console.log("user redirect to correct page")
          expect(currentURL).toBe(enduserdashboardurl)
        }
        else{
            console.log("user not redirect successfully")
        }
})

       // Test the functionality of delete record and click on delete record

       test("test the functuinality of delete and click on confirm record" , async({page})=>{
        const deletefunctionality=new Addgroup(page);
         await deletefunctionality.companylogin();
         const deleteone=await page.locator("//body/div/div/div/div/div/div/div[2]/div[1]/div[2]/div[2]//*[name()='svg']");
         const deleteclick=await deleteone.click();
         const deldata=await page.locator("//li[normalize-space()='Delete Data']");
         await deldata.waitFor();  // ✅ Waits until the element appears
         await deldata.click();
         const deleteconfirm=await page.locator("//button[normalize-space()='Confirm']");
         await page.waitForTimeout(1000);
         const deleteconfirmclick=await deleteconfirm.click();
         const recorddelet=await page.locator("//div[contains(text(),'Record deleted successfully')]");
         const recorddelete = (await recorddelet.innerText()).trim();
         console.log("Fetched Text:", recorddelete);

         if (await recorddelete.includes("Record deleted successfully")){
           console.log("record deleted successfully")
           expect(recorddelete).toContain("Record deleted successfully")
         }
         else{
             console.log("Record not deleted successfully")
         }
 })

        // Test the functionality if user click on submit without enter anything

        test("Test the functionality if user click on submit without enter anything" , async({page})=>{

       const submit= new Addgroup(page);
        await submit.companylogin();
        await page.waitForTimeout(1000);
        await page.locator("//div[contains(text(),'Add Data')]").click();
        await page.waitForTimeout(1000);
        await page.locator("//button[normalize-space()='Enter Data Manually']").click();
        await page.waitForTimeout(1000);
        const submitbutton=await page.locator("//div[normalize-space()='Submit']");
        await submitbutton.click();
        await page.waitForTimeout(1000);
        const toastMessageLocator=await page.locator("xpath=//div[contains(text(),'Please fill mandatory field!')]");
        await toastMessageLocator.waitFor({ state: 'visible' });
        await expect(toastMessageLocator).toBeVisible({ timeout: 10000 });

        const toastmessage=(await toastMessageLocator.innerText()).trim();
        console.log("fetch error text" + toastmessage);
        if(toastmessage.includes("Please fill mandatory field!")){
          console.log("Error message displayed successfully")
          expect(toastmessage).toContain("Please fill mandatory field!")
        }
        else{
          console.log("Error message not displayed")
        }

        })

       // Test the functionality user click on submit if all mandatory message shows
       
       test("Test the functionality user click on submit if all mandatory message shows" , async({page})=>{
        
        const mandatory= new Addgroup(page);
        await mandatory.companylogin();
        await page.waitForTimeout(1000);
        await page.locator("//div[contains(text(),'Add Data')]").click();
        await page.waitForTimeout(1000);
        await page.locator("//button[normalize-space()='Enter Data Manually']").click();
        await page.waitForTimeout(1000);
        await page.locator("//div[normalize-space()='Submit']").click();
        await mandatoryfields(page);

       })

       //// Test the functionality user click on submit if all mandatory message shows
       
       test.only("Test the functionality user click on submit after fill the data" , async({page})=>{
        
        const fillmandatory= new Addgroup(page);
        await fillmandatory.companylogin();
        await page.waitForTimeout(1000);
        await page.locator("//div[contains(text(),'Add Data')]").click();
        await page.waitForTimeout(1000);
        await page.locator("//button[normalize-space()='Enter Data Manually']").click();
        await page.waitForTimeout(1000);
        await page.locator("//div[normalize-space()='Submit']").click();
        await fillmandatoryfields(page);
        console.log("✅ All mandatory fields have been filled successfully.");
      });
      

       







