const  {cancelcross}  = require('./Addcompany');
//const config = require('../config/environment'); 
const { Addinput } = require('./Clinput');
 const {Addgroup} = require('./Clinput');
 //const Addgroup=require('./Addgroup')
const Addcompany = require('./Addcompany');


const { test, expect } = require('@playwright/test');
const { ADDRGETNETWORKPARAMS } = require('dns');

//Test the functionality of inupt data magament
test("click on input data mangement" , async({page})=>{


    const inputdata= new Addinput(page);
   
     await inputdata.login();
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
   test("Test the validation message shows if user click on Add inpput field and Add input field is opened" , async ({page})=>{

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

       test("Test functionality to Add input field and verify that added field show in a page." , async({page})=>{

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

        test("test the Addinput fields in Diverse Groups Information successfully" ,  async ({page})=>{
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
       console.log("user enter information ot foundinging")

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

   // Test the functionality of cancel button and cross button to make sure that user cancel and click on cross button

   test("test the function of cancal and cross of Company Information" , async ({page})=>{
    
    const cancalbuttonofcompany = new Addinput(page);
    await cancalbuttonofcompany.login();
    await cancalbuttonofcompany.clickinputdatamangement();
    await cancalbuttonofcompany.clickAddinputfield();
    const cancelclickbutton=await page.locator("(//div[contains(text(),'Cancel')])[2]");
    const  crossclickbutton=await page.locator("#root > div.protectedContainer > div.main-content > div.content > div > div > div > div:nth-child(2) > div > div.headerAddCont > div.closeDiv > svg");
    if (await cancelclickbutton.isVisible()){
       await cancelclickbutton.click();
    }
      else if(crossclickbutton.isVisible()){
        await crossclickbutton.click();

      }

        else{
         throw new Error("both button is not working")

    }

    const Addinputsectionlocator=await page.locator("#root > div.protectedContainer > div.main-content > div.content > div > div > div > div:nth-child(2) > div > div.headerAddCont > div.titDesCont > div.title");
    const Addinputsectionhide=await Addinputsectionlocator.isHidden();

    if(Addinputsectionhide){
      console.log("cancel and cross button is working")
      expect(Addinputsectionhide).toBeTruthy();
    }

    else{
      console.log("cancel and cross button is not working")
      expect(Addinputsectionhide).toBeTruthy();
    }
   })
   // Test the functionality of cancel button and cross button to make sure that user cancel and click on cross button MBE information

  test("test the function of cancal and cross of MBE information" , async ({page})=>{
    
    const cancalbuttonofcompany = new Addinput(page);
    await cancalbuttonofcompany.login();
    await cancalbuttonofcompany.clickinputdatamangement();
    const collapseclick= await page.locator("//div[contains(text(),'Collapse')]");
    await page.waitForTimeout(1000);
    await collapseclick.click();
    const MBEexpandclick= await page.locator("//body/div/div/div/div/div/div/div/div/div/div[2]/div[1]/div[2]/div[1]");
    await MBEexpandclick.click();
    await page.waitForTimeout(1000);
    const MBEAddInputbutton =await page.locator("//div[contains(text(),'Add Input Fields')]");
    await MBEAddInputbutton.click();
    await page.waitForTimeout(1000);
    await cancelcross(page);
   })

   //// Test the functionality of cancel button and cross button to make sure that user cancel and click on cross button of Diverse Groups Information

   test("test the function of cancal and cross of Diverse Groups Information" , async ({page})=>{
    
    const cancalbuttonofdgi = new Addinput(page);
    await cancalbuttonofdgi.login();
    await cancalbuttonofdgi.clickinputdatamangement();
    const collapseclick= await page.locator("//div[contains(text(),'Collapse')]");
    await page.waitForTimeout(1000);
    await collapseclick.click();
    const dgiexpandclick= await page.locator("#modal_body > div:nth-child(3) > div > div.inptCommRight > div.inpTxtComm");
    await page.waitForTimeout(1000);
    await dgiexpandclick.click();
   
    
    const dgiAddInputbutton =await page.locator("//div[contains(text(),'Add Input Fields')]");
    await dgiAddInputbutton.click();
    await page.waitForTimeout(1000);
    await cancelcross(page);
   })


    //// Test the functionality of cancel button and cross button to make sure that user cancel and click on cross button of Direct/Subcontracting Information
   test("test the function of cancal and cross of Direct/Subcontracting Information" , async ({page})=>{
    
    const cancalbuttonofdsg = new Addinput(page);
    await cancalbuttonofdsg.login();
    await cancalbuttonofdsg.clickinputdatamangement();
    const collapseclick= await page.locator("//div[contains(text(),'Collapse')]");
    await page.waitForTimeout(1000);
    await collapseclick.click();
    const dsgexpandclick= await page.locator("#modal_body > div:nth-child(4) > div > div.inptCommRight > div.inpTxtComm");
    await page.waitForTimeout(1000);
    await dsgexpandclick.click();
   
    
    const dgiAddInputbutton =await page.locator("//div[contains(text(),'Add Input Fields')]");
    await dgiAddInputbutton.click();
    await page.waitForTimeout(1000);
    await cancelcross(page);
    
   })

    //// Test the functionality of cancel button and cross button to make sure that user cancel and click on cross button of Revenue Reporting Information
    test("test the function of cancal and cross of Revenue Reporting Information" , async ({page})=>{
    
      const cancalbuttonofRRI = new Addinput(page);
      await cancalbuttonofRRI.login();
      await cancalbuttonofRRI.clickinputdatamangement();
      const collapseclick= await page.locator("//div[contains(text(),'Collapse')]");
      await page.waitForTimeout(1000);
      await collapseclick.click();
      const RRIexpandclick= await page.locator("#modal_body > div:nth-child(5) > div > div.inptCommRight > div.inpTxtComm");
      await page.waitForTimeout(1000);
      await RRIexpandclick.click();
     
      
      const RRRAddInputbutton =await page.locator("//div[contains(text(),'Add Input Fields')]");
      await RRRAddInputbutton.click();
      await page.waitForTimeout(1000);
      await cancelcross(page);
     })

     //// Test the functionality of cancel button and cross button to make sure that user cancel and click on cross button of Workforce/Board Diversity Information
    test("test the function of cancal and cross of Workforce/Board Diversity Information" , async ({page})=>{
    
      const cancalbuttonofWDI = new Addinput(page);
      await cancalbuttonofWDI.login();
      await cancalbuttonofWDI.clickinputdatamangement();
      const collapseclick= await page.locator("//div[contains(text(),'Collapse')]");
      await page.waitForTimeout(1000);
      await collapseclick.click();
      const WDIexpandclick= await page.locator("#modal_body > div:nth-child(6) > div > div.inptCommRight > div.inpTxtComm");
      await page.waitForTimeout(1000);
      await WDIexpandclick.click();
     
      
      const WDIAddInputbutton =await page.locator("//div[contains(text(),'Add Input Fields')]");
      await WDIAddInputbutton.click();
      await page.waitForTimeout(1000);
      
      //await page.locator("#modal_body > div:nth-child(1) > div.inpCommFieldSection > div.addInpt > div:nth-child(2)").click();
      await cancelcross(page);
     })

     //Test the functionality of delete button of Company Information and click on confirm button
     //This needs to be tested when we add and then delete the field
     // I have write only two test cases and same way we write all the test cases for all the fields

     test("test the functionality of delete and confirm button of Company Information" , async ({page})=>{

      const deletebuttonofcompany = new Addinput(page);
      await deletebuttonofcompany.login();
      await deletebuttonofcompany.clickinputdatamangement();
      //await deletebuttonofcompany.clickAddinputfield();
      await page.waitForTimeout(1000);
      const avaiabletext =await page.locator("//div[contains(text(),'Anshultest one')]");
      
      await page.waitForTimeout(1000);
      const clickavailbletext=await avaiabletext.click();
      
      await page.waitForTimeout(1000);
      const deletebutton=await page.locator("#modal_body > div:nth-child(1) > div.inpCommFieldSection > div.contentForm > div:nth-child(8) > div:nth-child(2)");
      await page.waitForTimeout(5000);
      const deletebuttonvisible=await deletebutton.click();
      const deleteconfirm=await page.locator("//button[normalize-space()='Confirm']")
      const deleteconfirmbutton=await deleteconfirm.click();
      await page.waitForTimeout(1000);
      await page.locator("//div[contains(text(),'Save')]").click();
      await page.waitForTimeout(1000);
      const availabletext=await page.locator("//div[contains(text(),'Anshultest one')]").allTextContents();
      if(await availabletext!=="Anshultestone"){
        console.log("The expected is not found on the save page")
        expect(availabletext).toBeTruthy();
      }
      else{
        console.log("delete button is not working")
        
      }
})

  ////Test the functionality of delete button of Company Information and click on cancel
     //This needs to be tested when we add and then delete the field

     test("test the functionality of delete but cancel button of Company Information" , async ({page})=>{

      const deletebuttonofcompany = new Addinput(page);
      await deletebuttonofcompany.login();
      await deletebuttonofcompany.clickinputdatamangement();
      //await deletebuttonofcompany.clickAddinputfield();
      await page.waitForTimeout(1000);
      const avaiabletext =await page.locator("//div[contains(text(),'Anshultest')]");
      
      await page.waitForTimeout(1000);
      const clickavailbletext=await avaiabletext.click();
      
      await page.waitForTimeout(1000);
      const deletebutton=await page.locator("#modal_body > div:nth-child(1) > div.inpCommFieldSection > div.contentForm > div:nth-child(8) > div:nth-child(2)");
      await page.waitForTimeout(5000);
      const deletebuttonvisible=await deletebutton.click();
      const deleteconfirm=await page.locator("//button[normalize-space()='Cancel']")
      const deleteconfirmbutton=await deleteconfirm.click();
      await page.waitForTimeout(1000);
      await page.locator("//div[contains(text(),'Save')]").click();
      await page.waitForTimeout(1000);
      const availabletext=await page.locator("//div[contains(text(),'Anshultest')]").allTextContents();
      if(await availabletext=="Anshultest"){
        console.log("By cancel button the field is not deleted")
        expect(availabletext).toBeTruthy();
      }
      else{
        console.log("delete button is not working")
        
      }
    })

     

      


            

            

           


        
       




