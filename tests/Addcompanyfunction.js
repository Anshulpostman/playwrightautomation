const Addcom  = require('./Addcompanyfunction');

const{test , expect}= require('@playwright/test')

async function ECGcompvalidationmessage(page){

   //Validate for the Error message for Adding company information
    const usercompanynameerror= await page.locator("//div[contains(text(),'Company name')]").isVisible();
    const companycategoryerror= await page.locator("//div[contains(text(),'Category is required')]").isVisible();
    const compsizeerror=await page.locator("//div[contains(text(),'Size is required')]").isVisible();
    const  computilityerror=await page.locator("//div[contains(text(),'Utility is required')]").isVisible();
    const  basicfirstnameerror=await page.locator("//div[contains(text(),'First name is required')]").isVisible();
    const  basiclastnameerror=await page.locator("//div[contains(text(),'Last name is required')]").isVisible();
    const basicemailerrorinfo=await page.locator("//div[contains(text(),'Email is a required field.')]").isVisible();
    const basicstatuserror=await page.locator("//div[contains(text(),'Status is required')]").isVisible();
    const useraddress=await page.locator("//div[contains(text(),'Address is required')]").isVisible();
    const usercity=await page.locator("//div[contains(text(),'City is required')]").isVisible();
    const userstate=await page.locator("//div[contains(text(),'State is required')]").isVisible();
    const zipcodeerror=await page.locator("//div[contains(text(),'Zip code should have only 5 digits')]").isVisible();
    const  countryerror=await page.locator("//div[contains(text(),'Country is required')]").isVisible();
   
    
    //validate error message for Company
     if(usercompanynameerror)
    {
      expect(usercompanynameerror).toBeTruthy();
      console.log("Company name  is required");
    }

    else{
      console.log("Message is not");


    }

    //Validate for the category error message

    if(companycategoryerror)
      {
        expect(companycategoryerror).toBeTruthy();
        console.log("Category is required");
      }

      else{
        console.log("Category Message is not visible correct");
    }
    //Validate for the size error

    if(compsizeerror)
        {
          expect(compsizeerror).toBeTruthy();
          console.log("Size is required");
        }
  
        else{
          console.log("Size Message is not visible correct");
      }

      //Validate for the utility error

      if(computilityerror)
        {
          expect(computilityerror).toBeTruthy();
          console.log("Utility is required");
        }
  
        else{
          console.log("Utility Message is not visible correct");
      }
     
    // Validate for the basic firstname error 

    if(basicfirstnameerror)
        {
          expect(basicfirstnameerror).toBeTruthy();
          console.log("First name is required ");
        }
  
        else{
          console.log("First name Message is not visible correct");
      }

      //Validate the last name error

      if(basiclastnameerror)
        {
          expect(basiclastnameerror).toBeTruthy();
          console.log("Last name  is required");
        }
    
        else{
          console.log("Last name Message is not visible correct");
    
    
        }
        // Validate Email error
        if(basicemailerrorinfo)
        {
         expect(basicemailerrorinfo).toBeTruthy();
        console.log("Email  is required");
         }
        
         else{
        console.log("Email Address message is not visible correct");
        }
        
        // Validate status error
        if(basicstatuserror)
        {
        expect(basicstatuserror).toBeTruthy();
        console.log("Status is required");
        }
        else{
        console.log("Status message is not visible correct");
        }

        //Validate user error message
        if(useraddress)
        {
         expect(useraddress).toBeTruthy();
        console.log("Address is required");
         }
        else{
        console.log("Address message is not visible correct");
         }

         //validate city error message


         if(usercity)
            {
             expect(usercity).toBeTruthy();
            console.log("city is required");
             }
            else{
            console.log("City is required message is not visible correct");
             }

          //Vaidate State error message   


          if(userstate)
            {
             expect(userstate).toBeTruthy();
            console.log("State is required");
             }
            else{
            console.log("State is required message is not visible correct");
             }

        //Validate zip code error message

        
        if(zipcodeerror)
            {
             expect(zipcodeerror).toBeTruthy();
            console.log("Zipcode error is required");
             }
            else{
            console.log("Zip code error is required message is not visible correct");
             }

         //Validate countryerror message

         if(countryerror)
            {
             expect(countryerror).toBeTruthy();
            console.log("countryerror is required");
             }
            else{
            console.log("countryerror  is required message is not visible correct");
             

            }
          }
         
        //Enter message and submit information and checking validation message for phone number and select value from dropdown.
        
        async function ECGcompanyfillform(page){
        const Firstname=await page.locator("//input[@placeholder='Enter Company Name']").fill("Test Anshul");
        await page.waitForTimeout(1000);
        const category=await page.locator("//div//div//div//div//div//div//div//div[3]//select[1]").selectOption({label : "Utility"});
        await page.waitForTimeout(1000);
        const companysize=await page.locator("//div[4]//select[1]").selectOption({label : "Small"});
        await page.waitForTimeout(1000);
        const typeofutility=await page.locator("//body//div//div//div//div//div//div//div[1]//div[1]//div[5]//select[1]").selectOption({label : "Gas"});
        await page.waitForTimeout(1000);
        const userfirstname=await page.locator("//input[@placeholder='Enter First Name']").fill("Vs");
        await page.waitForTimeout(1000);
        const userlastname=await page.locator("//input[@placeholder='Enter Last Name']").fill("user");
        await page.waitForTimeout(1000);
        const validemail = await page.locator("//input[@placeholder='Enter Email Address']").fill("vsuser@zis1bxhm.mailosaur.net");
        await page.waitForTimeout(1000);
        // const invalidemail=await page.locator("//input[@placeholder='Enter email address']").fill("a99@")
        // const blankemail =await page.locator("//input[@placeholder='Enter email address']").fill("");
        // await page.waitForTimeout(1000);
        const phonenumber=await page.locator("//input[@placeholder='Enter Phone Number']").fill("7777777777")
        // const invalidphonenumber=await page.locator("//input[@placeholder='Enter phone number']").fill("66666666")
        // await page.waitForTimeout(1000);
        const selectstatus=await page.locator("//div//div//div//div//div//div[2]//div[1]//div[5]//select[1]").selectOption({label : "Active"});
        await page.waitForTimeout(1000);
        const enteraddress=await page.locator("//input[@placeholder='Enter Address']").fill("logixx cyber park");
        await page.waitForTimeout(1000);
        const cityname=await page.locator("//input[@placeholder='Enter City Name']").fill("Noida");
        await page.waitForTimeout(1000);
        const statename=await page.locator("//input[@placeholder='Enter State']").fill("UP");
        await page.waitForTimeout(1000);
        const zipcodenumber=await page.locator("//input[@placeholder='Enter Zip Code']").fill("11001")
        await page.waitForTimeout(1000);
        const country=await page.locator("//input[@placeholder='United States']");
       //
}

         async function Actionofeditgroup(page){

         const grp13=await page.locator("//p[normalize-space()='Anshul Testing Group']").click();
         
         const Actionclick=await page.locator("//tbody/tr[1]/td[8]/div[1]/div[1]/div[2]//*[name()='svg']").click();
         const editactionclick=await page.locator("//div[normalize-space()='Edit Company']").click();
         //await page.waitForTimeout(1000);
         await page.locator("//input[@placeholder='Enter Company Name']").fill('');
         await page.locator("//input[@placeholder='Enter Company Name']").fill('Name 27');
         await page.waitForTimeout(1000);
         await page.locator("//div//div//div//div//div//div//div//div[3]//select[1]").selectOption({label : "CCA"});
         await page.waitForTimeout(1000);
         const updatebutton=await page.locator("(//div[contains(text(),'Update')])[2]").click();
         
         //const clikedbutton=await page.locator("(//div[contains(text(),'Update')])[2]").clikedbutton('clicked')
         console.log("update functionality is working correct")

}


module.exports = { Addcom , ECGcompvalidationmessage ,ECGcompanyfillform, Actionofeditgroup,  };



