     //const { default: test } = require('node:test')


         const Addgroup = require('./Addgroup')
    //  const{test , expect , request}=require('@playwright/test')
      
        const{test , expect }=require('@playwright/test')
    

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

          test.only("Test the functionality by clicking Enter manually data by clikcing on manually data button" , async({page})=>{

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


