const Addgroup = require("./forgotpassword");
const{test , expect}= require('@playwright/test')

async function ECGcomp(page){


    const usercompanynameerror= await page.locator("//div[contains(text(),'Company name')]").isVisible();
    const companycategoryerror= await page.locator("//div[contains(text(),'Category is required')]").isVisible();
    const compsizeerror=await page.locator("//div[contains(text(),'Size is required')]").isVisible();
    const  computilityerror=await page.locator("//div[contains(text(),'Utility is required')]").isVisible();
    const  basicfirstnameerror=await page.locator("//div[contains(text(),'First name is required')]").isVisible();
    const  basiclastnameerror=await page.locator("//div[contains(text(),'Last name is required')]").isVisible();
    const basicemailerrorinfo=await page.locator("//div[contains(text(),'Email is a required field.')]").isVisible();
    const basicstatuserror=await page.locator("//div[contains(text(),'Status is required')]").isVisible();
    const useraddress=await page.locator("//div[contains(text(),'Address is required')]").isVisible();
    const usercity=await page.locator("//input[@placeholder='Enter city name']").isVisible();
    const userstate=await page.locator("//input[@placeholder='Enter state']").isVisible();
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


module.exports = { ECGcomp };


