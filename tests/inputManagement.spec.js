const config = require('../config/environment'); 
 const Addinput = require('./Clinput');
const Addgroup = require('./forgotpassword');
const Addcom = require('./Addcom');
//const Addinput = require('./Clinput'); // Correct import
const { test, expect } = require('@playwright/test');

//Test the functionality of inupt data magament
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

//        // Test functionality to Add input field and verify that added field show in a page.

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


//        //Test the cancel button 
//        // This is test case failed

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

//         // Test the save button functionality
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

//         // Test the Add input fields MBE Information
  
        test("Test the add functionality of MBE" , async ({page})=>{

            const MBEsection = new Addinput(page);
            await page.setViewportSize({width : 1536 , height: 864 })
            await MBEsection.login();
            await MBEsection.clickinputdatamangement();

            
            
          const collapseclick= await page.locator("//div[contains(text(),'Collapse')]");
          await page.waitForTimeout(1000);
          await collapseclick.click();
          
           
           const MBEexpandclick= await page.locator("//body/div/div/div/div/div/div/div/div/div/div[2]/div[1]/div[2]/div[1]");
           await MBEexpandclick.click();
           const MBEAddInputbutton =await page.locator("//div[contains(text(),'Add Input Fields')]");
           await MBEAddInputbutton.click();
           await page.locator("#modal_body > div:nth-child(2) > div.input_group_input > select").selectOption({label : "Numeric"});
            const mbefieldname= await page.locator("//input[@placeholder='Enter Field Name']");
            await mbefieldname.waitFor({ state: 'visible' }); 
            await mbefieldname.type("Anshul doing test");
            
            const mbeplaceholder=await page.locator("//input[@placeholder='Enter placeholder name']");
            await mbeplaceholder.type("Enter Anshul as a placeholder name as a testing testing");
            await page.waitForTimeout(1000)
            await page.locator("//div[normalize-space()='Add']").click();
            await page.waitForTimeout(1000)
            await page.locator("//div[contains(text(),'Save')]").click();
            await page.waitForTimeout(10000)
            
            const MBEsectionsavefieldvalue=await mbefieldname.allTextContents();
            const MBEsectionsaveplaceholdervalue=await mbeplaceholder.allTextContents();
           if(MBEsectionsavefieldvalue && MBEsectionsaveplaceholdervalue){
            console.log("Field is added successfully on a page")
            expect(MBEsectionsavefieldvalue).toBeTruthy
            expect(MBEsectionsaveplaceholdervalue ).toBeTruthy
        }
            
          else{
                 console.log("filed is not added");
                  
        }
      
        })

        // test the Addinput fields in Diverse Groups Information successfully

        test("test the functionality Diverse Groups Information" ,  async ({page})=>{
        const DGIinfrmation = new Addinput(page);
        await DGIinfrmation.login();
        await DGIinfrmation.clickinputdatamangement();
        const collapseclick= await page.locator("//div[contains(text(),'Collapse')]");
        await page.waitForTimeout(1000);
        await collapseclick.click();
        const Diversegroup =await page.locator("(//div[contains(text(),'Expand')])[3]");
        await Diversegroup.click();
        await page.locator("//div[contains(text(),'Add Input Fields')]").click();
        await page.locator("#modal_body > div:nth-child(2) > div.input_group_input > select").selectOption({label: "Date Picker"});
      
        const diversefieldname=await page.locator("//input[@placeholder='Enter Field Name']");
        
        await diversefieldname.type("Diverse Groups Information");
        const diverseplaceholder = await page.locator("//input[@placeholder='Enter placeholder name']");
        await diverseplaceholder.type("mm-dd-yyyy");
        await page.waitForTimeout(1000);
        await page.locator("//div[normalize-space()='Add']").click();
        await page.waitForTimeout(1000);
        await page.locator("//div[contains(text(),'Save')]").click();
        await page.waitForTimeout(1000);
        const fieldvaluetexthold=await diversefieldname.allTextContents('Diverse Groups Information');
        const placeholervaluehold=await diverseplaceholder.allTextContents('dd-mm-yyyy');
       //for debugging..
        console.log("Field Value:", fieldvaluetexthold);
        console.log("Placeholder Value:", placeholervaluehold);
        if (fieldvaluetexthold && placeholervaluehold){
        console.log("field value is showing correctly");
        expect(fieldvaluetexthold).toBeTruthy();
        expect(placeholervaluehold).toBeTruthy();
         }

         else{
           console.log("user enter information ot found")

         }
})

      // Test the functionality Direct/Subcontracting Information

      test("test the functionality Direct/Subcontracting Information" ,  async ({page})=>{
        const Subcontractinfrmation = new Addinput(page);
        await Subcontractinfrmation.login();
        await Subcontractinfrmation.clickinputdatamangement();
        const collapseclick= await page.locator("//div[contains(text(),'Collapse')]");
        await page.waitForTimeout(1000);
        await collapseclick.click();
        const DSgcontract =await page.locator("(//div[contains(text(),'Expand')])[2]");
        await DSgcontract.click();
        await page.locator("//div[contains(text(),'Add Input Fields')]").click();
        await page.locator("#modal_body > div:nth-child(2) > div.input_group_input > select").selectOption({label: "Dropdown"});
        const dsgfieldname=await page.locator("//input[@placeholder='Enter Field Name']");
       await dsgfieldname.type("Direct/Subcontracting Information");
        const dsgeplaceholder = await page.locator("//input[@placeholder='Enter placeholder name']");
        await dsgeplaceholder.type("enter dropdown field");

        await page.locator("//input[@placeholder='Input 1']").type("value1")
        await page.locator("//div[normalize-space()='Add field']").click();
         //await dsgaddfiledbutton.type("enter dsc info")
         await page.waitForTimeout(1000);
        const Addclick= await page.locator("//input[@placeholder='Input 2']").type("value 2")
        await page.waitForTimeout(1000);
        
        await page.waitForTimeout(1000);
        await page.locator("//div[normalize-space()='Add']").click();
        await page.waitForTimeout(1000);
        await page.locator("//div[contains(text(),'Save')]").click();
        await page.waitForTimeout(1000);
        const fieldvaluetextholddsg=await dsgeplaceholder.allTextContents('enter dropdown field');
        const placeholervalueholddsg=await dsgeplaceholder.allTextContents('dd-mm-yyyy');
       //for debugging..
        // console.log("Field Value:", fieldvaluetexthold);
        // console.log("Placeholder Value:", placeholervaluehold);
        if (fieldvaluetextholddsg && placeholervalueholddsg){
        console.log("field value is showing correctly");
        expect(fieldvaluetextholddsg).toBeTruthy();
        expect(placeholervalueholddsg).toBeTruthy();
         }

         else{
           console.log("user enter information ot found")

         }
})


   // Test the functionality Revenue Reporting Information


   test("test the functionality Revenue Reporting Information" ,  async ({page})=>{
    const Revenueinfrmation = new Addinput(page);
    await Revenueinfrmation.login();
    await Revenueinfrmation.clickinputdatamangement();
    const collapseclick= await page.locator("//div[contains(text(),'Collapse')]");
    await page.waitForTimeout(1000);
    await collapseclick.click();
    const Reevenuereporting =await page.locator("(//div[contains(text(),'Expand')])[5]");
    await Reevenuereporting.click();
    await page.waitForTimeout(1000);
    await page.locator("#modal_body > div:nth-child(5) > div.inpCommFieldSection > div.addInpt > div:nth-child(2)").click();
    await page.locator("#modal_body > div:nth-child(2) > div.input_group_input > select").selectOption({label: "Boolean"});
    const Revnuefieldname=await page.locator("//input[@placeholder='Enter Field Name']");
    await Revnuefieldname.type("Revenue Reporting Information test the functionality");
    const revenueplaceholder = await page.locator("//input[@placeholder='Enter placeholder name']");
    await revenueplaceholder.type("enter dropdown field for revenue");
    await page.waitForTimeout(1000);
    await page.waitForTimeout(1000);
    await page.locator("(//div[normalize-space()='Add'])[1]").click();
    await page.waitForTimeout(1000);
    await page.locator("//div[contains(text(),'Save')]").click();
    await page.waitForTimeout(1000);
    const fieldvaluetextholddsg=await Revnuefieldname.allTextContents();
    const placeholervalueholddsg=await revenueplaceholder.allTextContents();
  
    if (fieldvaluetextholddsg && placeholervalueholddsg){
    console.log("field value is showing correctly");
    expect(fieldvaluetextholddsg).toBeTruthy();
    expect(placeholervalueholddsg).toBeTruthy();
     }

     else{
       console.log("user enter information ot found")

     }
})


   // Test the functionality Workforce/Board Diversity Information

   test("test the functionality Workforce/Board Diversity Information" ,  async ({page})=>{
    const workforce = new Addinput(page);
    await workforce.login();
    await workforce.clickinputdatamangement();
    const collapseclick= await page.locator("//div[contains(text(),'Collapse')]");
    await page.waitForTimeout(1000);
    await collapseclick.click();
    const workforcereporting =await page.locator("#modal_body > div:nth-child(6) > div > div.inptCommRight > div.inpTxtComm");
    await workforcereporting.click();
    
    await page.waitForTimeout(1000);
    await page.locator("#modal_body > div:nth-child(6) > div.inpCommFieldSection > div.addInpt > div:nth-child(2)").click();
    await page.locator("#modal_body > div:nth-child(2) > div.input_group_input > select").selectOption({label: "Alphabet"});
    const workforcefieldname=await page.locator("//input[@placeholder='Enter Field Name']");
    await workforcefieldname.type(" Workforce/Board Diversity Information test the functionality");
    const workforceplaceholder = await page.locator("//input[@placeholder='Enter placeholder name']");
    await workforceplaceholder.type("Workforce/Board Diversity Information functionality");
    await page.waitForTimeout(1000);
    await page.waitForTimeout(1000);
    await page.locator("//div[normalize-space()='Add']").click();
    await page.waitForTimeout(1000);
    await page.locator("//div[contains(text(),'Save')]").click();
    await page.waitForTimeout(1000);
    const fieldvaluetextholddsg=await workforcefieldname.allTextContents();
    const placeholervalueholddsg=await workforceplaceholder.allTextContents();
  
    if (fieldvaluetextholddsg && placeholervalueholddsg){
    console.log("field value is showing correctly");
    expect(fieldvaluetextholddsg).toBeTruthy();
    expect(placeholervalueholddsg).toBeTruthy();
     }

     else{
       console.log("user enter information ot found")

     }
})


     

      


            

            

           


        
       




