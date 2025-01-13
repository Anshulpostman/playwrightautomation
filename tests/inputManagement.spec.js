
//const {inputsectionMBE} =require('./Clinput')

const Addcom = require('./Addcom');
const {Addinput} = require('./Clinput');
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

       test("Add an input field" , async({page})=>{

            const Addfunctionality=new Addinput(page);
            await Addfunctionality.login();
            await Addfunctionality.clickinputdatamangement();
            await page.waitForTimeout(10000);
            await Addfunctionality.clickAddinputfield();
            const feildtype= await page.locator("#modal_body > div:nth-child(2) > div.input_group_input > select").selectOption({label : "Alphabet"});
            const Addfieldname=await page.locator("//input[@placeholder='Enter Field Name']");
            await Addfieldname.type('Anshultestone');
            const placeholeder=await page.locator("//input[@placeholder='Enter placeholder name']");
            await placeholeder.type("Enter new test one");
            await page.locator("//div[normalize-space()='Add']").click();
            await page.locator("//div[contains(text(),'Save')]").click();
            //await page.waitForTimeout(10000);
            const isAddfieldnameadded=await Addfieldname.allTextContents();
            const isplaceholderadded=await placeholeder.allTextContents();
           if(isAddfieldnameadded && isplaceholderadded){
               expect(isAddfieldnameadded).toBeTruthy();
               expect(isplaceholderadded ).toBeTruthy();
            console.log("Field is added successfully on a page")
                  }
                  else{
                  console.log("filed is not added");
           }
       })


       //Test the cancel button 
       // This is test case failed

       test("test the cancel button functionality" , async ({page})=>{

            const cancelbutton= new Addinput(page);
            await cancelbutton.login();
            await cancelbutton.clickinputdatamangement();
            const cancelclick=await page.locator("//div[contains(text(),'Cancel')]");
            const clickcancel= await cancelclick.click();
            const reloadpage=await page.reload();

            if(reloadpage.reload)
            {
                  expect(reloadpage).reloadpage();
                  console.log("cancel button is workig");
            }

            else{

                  console.log("cancel button is not working")
            }

})

        // Test the save button functionality
        test("test the save button functionality" , async ({page})=>{

            const savebuton = new Addinput(page);
            await savebuton.login();
            await savebuton.clickinputdatamangement();
            const saveclick= await page.locator("//div[contains(text(),'Save')]")
            const savebutton= await saveclick.click();
            const message=await page.locator("/html/body/div[1]/div[2]/div/div/div[1]/div/div/div[2]");
            const messagevalidate= await message.getByText("Saved Successfully");
            if(await messagevalidate.isVisible)
            {

                expect(messagevalidate).toBeTruthy();
                console.log("save button working correctly")
            }

            else{

                  console.log("savebutton is not working")
            }
        })

        // Test the Add input fields MBE Information
  
        test.only("Test the add functionality of MBE" , async ({page})=>{

            const MBEsection = new Addinput(page);
            await MBEsection.login();
            
      //       await MBEsection.clickinputdatamangement();
      //       await page.locator("#modal_body > div:nth-child(2) > div > div.inptCommRight > div:nth-child(2) > svg").click();
      //       const feildtype= await page.locator("#modal_body > div:nth-child(2) > div.input_group_input > select").selectOption({label : "Alphabet"});
      //       const Addfieldname=await page.locator("//input[@placeholder='Enter Field Name']");
      //       await Addfieldname.type('Anshultestone');
      //       const placeholeder=await page.locator("//input[@placeholder='Enter placeholder name']");
      //       await placeholeder.type("Enter new test one");
      //       await page.locator("//div[normalize-space()='Add']").click();
      //       await page.locator("//div[contains(text(),'Save')]").click();
      //       //await page.waitForTimeout(10000);
      //       const isAddfieldnameadded=await Addfieldname.allTextContents();
      //       const isplaceholderadded=await placeholeder.allTextContents();
      //      if(isAddfieldnameadded && isplaceholderadded){
      //          expect(isAddfieldnameadded).toBeTruthy();
      //          expect(isplaceholderadded ).toBeTruthy();
      //       console.log("Field is added successfully on a page")
      //             }
      //             else{
      //             console.log("filed is not added");
      //      }
       })


        
       




