
const Addinput = require('./Clinput');
//const { Addinput } = require('./forgotpassword'); // Ensure you're importing Addinput correctly
const { test, expect } = require('@playwright/test');






// Test the functionality of inupt data magament
test("click on input data mangement" , async({page})=>{

    const inputdata= new Addinput(page);
     await inputdata.login();
     await page.waitForTimeout(10000);

     await inputdata.clickinputdatamangement();
     await page.waitForTimeout(10000);
     const inputurl=await page.url();
     if(inputurl==='https://devecg.resourcifi.tech/super/input')
     {
        expect(inputurl).toContain("https://devecg.resourcifi.tech/super/input")
        console.log("input button is working");
     }
     else{

           console.log("iput button is not working")
     }

})

 // Test the validation message shows if user click on Add inpput field and Add input field is opened.  
   test("test validation message" , async ({page})=>{

      const inputdata= new Addinput(page);
      await inputdata.login();
      await inputdata.clickinputdatamangement();
      const Addinputfieldone=await inputdata.clickAddinputfield();
      await page.waitForTimeout(10000)
     
      const Addinpittextfiledtwo=await inputdata.clickAddtextfield();
      await page.waitForTimeout(10000)
      
      if(Addinpittextfiledtwo){

            expect(Addinpittextfiledtwo).toContain("Add Input Field")
            console.log("Add input field is working and open the fields for adding data.")

      }

      else{
            console.log("Addinput field is not working")
      }

    })

    // Test the functionality if validation message shows.

    test("test functionality of show validation message while adding input field" , async({page})=>{

        const validationmessage= new Addinput(page);
        await validationmessage.login();
        await validationmessage.clickinputdatamangement();
        await validationmessage.clickAddinputfield();
        const Add=await page.locator("//div[normalize-space()='Add']").click();
        
        const Addfieldname=await page.locator("//div[contains(text(),'Field Name is required')]");
        const fieldnamevisible=await Addfieldname.textContent();
        const placeholeder=await page.locator("//div[contains(text(),'Placeholder is required')]");
        const isVisibleplaceholeder=await placeholeder.textContent();
        

        if(isVisibleplaceholeder|| fieldnamevisible.includes("Field Name is required" , "Placeholder is required")){

            expect(fieldnamevisible || isVisibleplaceholeder).toContain("Field Name is required" ,"Placeholder is required" )

            
            console.log("validtion message showing:" + fieldnamevisible , isVisibleplaceholeder);

        }

        else{

            console.log("validatio message is not shoiwng")
        }
            
})

       // Test functionality to Add input field and verify that added field show in a page.

       test.only("Add an input field" , async({page})=>{

            const Addfunctionality=new Addinput(page);
            await Addfunctionality.login();
            await Addfunctionality.clickinputdatamangement();
            await page.waitForTimeout(10000);
            const feildtype= await page.locator("/html/body/div[1]/div[1]/div[3]/div[2]/div/div/div/div[2]/div/div[2]/div[2]/div[1]/select").click().selectOption({label : "Boolean"});
            await page.waitForTimeout(10000);
            const Addfiledtypeonpage=await page.feildtype.isvisible();
            const Addfieldname=await page.locator("//div[contains(text(),'Field Name is required')]").type("Fieldnametest");
            const placeholeder=await page.locator("//div[contains(text(),'Placeholder is required')]").type("Enter place holder one");
            const Add=await page.locator("//div[normalize-space()='Add']").click();
            if(feildtype.isvisible){

                  expect("feildtype").toBeTruthy();
                  console.log("Field is added successfully on a page")
                  
            }

            else{
                  console.log("filed is not added")
            }




       })