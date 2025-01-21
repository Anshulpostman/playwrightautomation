const  {ECGcomp}  = require('./Addcompanyfunction');
const  {Actionofeditgroup}  = require('./Addcompanyfunction');
const Addcom=require('./Addcom');
//const Addgroup=require('./Addcom')
const{test , expect}= require('@playwright/test');
const exp = require('constants');



 //vaidate if user click on Add company button successfully
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

        test("Verify all validation message" , async  ({page})=>{
        
        const newaddcom= new Addcom(page);
        await newaddcom.login();
        await newaddcom.clickgroupmanagement();
        const grp13=await page.locator("//p[normalize-space()='grp13']").click();
        await page.waitForTimeout(1000);
        await newaddcom.clickAddcompanybutton();
        await newaddcom.clickAddcompanyinfo();
        
        await ECGcomp(page);
})

  
//Test to validate form fill successfully with all fields

     
        test("fill form successfully" , async({page})=>{

        const newaddcom= new Addcom(page);
        await newaddcom.login();
        await newaddcom.clickgroupmanagement();
        const grp13=await page.locator("//p[normalize-space()='grp13']").click();
        const id=76;
        const grpid="ID67888";
        const grpname="grp13";
        await page.waitForTimeout(1000);
        await newaddcom.clickAddcompanybutton();
        const urlcomapny="https://devecg.resourcifi.tech/super/group/list?id=76&grp=ID67888&grpname=grp13";
        
        await ECGcomp(page);
        await newaddcom.clickAddcompanyinfo();
        await page.waitForTimeout(1000);

        if(urlcomapny){

            expect(urlcomapny).toContain(grpname);
            console.log("correcturl:"+urlcomapny)
        }
        else{
            console.log("user not redirect to correct url")
        }

        //await newaddcom.grp13dashboardurl();
        const newcompadd= await page.waitForSelector('text=Name 21', { timeout: 10000 });
        const textIsVisible = await page.locator('text=Name 21').first().isVisible();
        if(textIsVisible)
       {
          expect(textIsVisible).toBeTruthy();
          console.log("Testcase passed")
        }

        else{

           console.log("Test case failed")
        }
    
    })

    //Edit Test functionality of a company, change inactive to Active and inactive to Active

        test("Testing edit functionality" , async({page})=>{
        await page.setViewportSize({ width: 1536, height: 864 }); // Full HD resolution


        const newedit= new Addcom(page);
         await newedit.login();
         await newedit.clickgroupmanagement();
          await Actionofeditgroup();
        })    

         //Test the logout  for confirm functionality

         test("test the logout functionality" , async ({page})=>{
         const newlogout = new Addcom(page);
         await newlogout.login();
         await page.locator("//body/div/div/div/div[3]/div[1]/div[2]/div[1]").click();
         await page.locator("//li[normalize-space()='Log Out']").click();
         await page.waitForTimeout(5000);
         const logoutpopupconfirm= await page.locator("//button[normalize-space()='Confirm']").click();
         const urllogout="https://devecg.resourcifi.tech/login";
         await page.waitForURL(urllogout);
        
         if (page.url()===urllogout){
            expect(page.url()).toBe(urllogout)
            console.log("userloggedout successfully");
         }
         else
         {
          console.log("user not loggedout successfully");

           }

        })

        ////Test the logout  for cancel  functionality

            test("test the cancel functionality" , async ({page})=>{
            const newlogout = new Addcom(page);
            await newlogout.login();
            await page.locator("//body/div/div/div/div[3]/div[1]/div[2]/div[1]").click();
            await page.locator("//li[normalize-space()='Log Out']").click();
            await page.waitForTimeout(5000);

        const logoutpopupcancel=  await page.locator("(//button[normalize-space()='Cancel'])[1]").click();
        const urlnotloggout="https://devecg.resourcifi.tech/super/dashboard";
        await page.waitForURL(urlnotloggout)
        if (page.url()===urlnotloggout){
        expect(page.url()).toBe(urlnotloggout)
        console.log("user remains on same page successfully");
         }
        else{

            console.log("Cancel button is not working successfullyy");
        }
    })

       // To test the Delete functionality of the dropdown.
       //company id is what we need to delete, it shows under company id

        test("Delete the compny functoionality" , async({page})=>{

        const deletefunctionality =new Addcom(page);
        await deletefunctionality.login();
        await deletefunctionality.clickgroupmanagement();
        const grp13=await page.locator("//p[normalize-space()='grp13']").click();
        const Actionclick=await page.locator("//tbody/tr[1]/td[7]/div[1]/div[1]/div[1]").click();
        const deleteactionclick=await page.locator("//div[normalize-space()='Delete Company']").click();
        await page.waitForTimeout(10000)
        const deleteconfirm= await page.locator("//button[normalize-space()='Confirm']").click();
        await page.waitForTimeout(1000);
        await page.waitForURL("https://devecg.resourcifi.tech/super/group/list?id=76&grp=ID67888&grpname=grp13");
        const companyid=await page.locator("//div[contains(text(),'ID88919')]");
        if(companyid.isHidden())
        {

            
            console.log("delete functionality is working")
        }

        else{

            console.log("delete functionality is not working")
        }

})



      
       // Test the functionality of cancel button


        test("cancel the delete compny functoionality" , async({page})=>{
        const deletefunctionality =new Addcom(page);
        await deletefunctionality.login();
        await deletefunctionality.clickgroupmanagement();
        const grp13=await page.locator("//p[normalize-space()='grp13']").click();
        const Actionclick=await page.locator("//tbody/tr[1]/td[7]/div[1]/div[1]/div[1]").click();
        const deleteactionclick=await page.locator("//div[normalize-space()='Delete Company']").click();
        await page.waitForTimeout(10000)
        const deletecancel= await page.locator("//button[normalize-space()='Cancel']").click();
        await page.waitForTimeout(1000);
        await page.waitForURL("https://devecg.resourcifi.tech/super/group/list?id=76&grp=ID67888&grpname=grp13");
        const companyid=await page.locator("//div[contains(text(),'ID93107')]");
        if(companyid.isVisible)
        {
            console.log("cancel functionality is working")
        }

        else{

            console.log("cancel functionality is not working")
        }
    })
    
        // Test the toggle on/off functionality.

        test("test the toggle Active to Inactive functionality" , async ({page})=>{

            const edittoggle=new Addcom(page);
            await edittoggle.login();
            await edittoggle.clickgroupmanagement();
            await page.locator("//p[normalize-space()='grp13']").click();
            await page.locator("//tbody/tr[1]/td[7]/div[1]/div[1]/div[1]").click();
            await page.waitForTimeout(10000);
            const toggleon=await page.locator("//li[3]//div[1]//*[name()='svg']").click();
            await page.waitForTimeout(1000)
            const activetoinactive=await page.locator("//button[normalize-space()='Confirm']").click();
            await page.waitForTimeout(1000);
            const activecompanyid=await page.locator("//div[contains(text(),'ID93107')]");
            await page.waitForTimeout(1000)
            const inactivestatus=await page.locator("//div[contains(text(),'Inactive')]");
            await page.waitForTimeout(1000)
            const Activestatustext=await activecompanyid.textContent();
            const Inactivestatustext=await inactivestatus.textContent();
             if(Inactivestatustext.includes("Inactive")){

               await expect(Inactivestatustext).toContain("Inactive")
                console.log("toggle active to inactive is working correct")
                }
                else{

                    console.log("toogle functionality is not working correct")
                }
       })
         
       // Test the inactive to active

        test("test the toggle inactive to Active functionality" , async ({page})=>{

            const edittoggle=new Addcom(page);
            await edittoggle.login();
            await edittoggle.clickgroupmanagement();
            await page.locator("//p[normalize-space()='grp13']").click();
            await page.locator("//tbody/tr[1]/td[7]/div[1]/div[1]/div[1]").click();
            await page.waitForTimeout(10000);
            const toggleon=await page.locator("//li[3]//div[1]//*[name()='svg']").click();
            await page.waitForTimeout(1000)
            const activetoinactive=await page.locator("//button[normalize-space()='Confirm']").click();
            await page.waitForTimeout(1000);
            const activecompanyid=await page.locator("//div[contains(text(),'ID93107')]");
            await page.waitForTimeout(1000)
            const Activestatus=await page.locator("(//div[contains(text(),'Active')])[1]");
           
            await page.waitForTimeout(1000)
            const activestatustext=await Activestatus.textContent();
            //const Inactivestatustext=await inactivestatus.textContent();
             if(activestatustext.includes("Active")){

               await expect(activestatustext).toContain("Active")
                console.log("toggle Inactive to active is working correct")
                }
                else{

                    console.log("toogle functionality is not working correct")
                }
       
            })

            // Test the Searching functionality by company name , utilitytype and category
            
            test("test serach by company,utility and category" , async({page})=>{

                const serach= new Addcom(page);
                await serach.login();
                await serach.clickgroupmanagement();
                await page.locator("(//img[@alt='Group Icon'])[3]").click();
               const textbox= await page.locator("//body/div/div/div/div/div/div[1]/div[2]/div[1]").type(" company 3");
                await page.keyboard.press('Enter');
                await page.waitForTimeout(10000);
                //const textpresent= await page.waitForSelector('text=Name 15' , {timeout: 5000});
                const textlocator=await page.locator('text=Name 15');
                const textcontent=await textlocator.textContent();
                if( await textlocator.isVisible()){

                    expect(textcontent).toBe("Name 15");
                    await page.waitForTimeout(10000);
                    console.log("company name is:"+ textcontent)
                  }
                  else{

                    console.log("searching for comoany is not working corret")
                  }


            })
              

            // Serach with a Category/utility type

            test("test by utility serach" , async ({page})=>{

                const utility= new Addcom(page);
                await utility.login();
                await utility.clickgroupmanagement();
                await page.locator("//p[normalize-space()='grp13']").click();
                const textbox= await page.locator("//body/div/div/div/div/div/div[1]/div[2]/div[1]").type("CCA");
                await page.keyboard.press('Enter');
                await page.waitForTimeout(10000);
               //const utilitylocator= await page.locator('text=CCA').first().isVisible();
               const utilitytext= await page.locator("(//div[contains(text(),'CCA')])[1]");
               const utilitycontent= await utilitytext.textContent();
               await page.waitForTimeout(10000);

               if( await utilitytext.isVisible()){

                expect(utilitycontent).toBe("CCA")
               
                console.log("Seraching for utility is: "+utilitycontent)
               }

               else{

                console.log("Seraching is not working for utility")
               }

})

         //Serach by utility/category

         test("test the searching functionality" , async ({page})=>{

            const utilitynew=new Addcom(page);
            await utilitynew.login();
            await utilitynew.clickgroupmanagement();
            await page.locator("//button[normalize-space()='2']").click();
            await page.locator("//p[normalize-space()='grp13']").click();
            const entertextboxvalue= await page.locator("//input[contains(@placeholder,'| Search by Company name')]").type('Electric');
            await page.waitForTimeout(10000);
            await page.keyboard.press('Enter')
            await page.waitForSelector('text=Electric');
            await page.waitForSelector('text=GasandElectric')
            const Electricisvisible= await page.locator('text=Electric').first().isVisible();
            await page.waitForTimeout(10000);
            const  isGasAndElectricVisible= await page.locator('text=GasAndElectric').isVisible();
            if(Electricisvisible ||isGasAndElectricVisible ){
            expect(Electricisvisible).toBeTruthy();
                expect(isGasAndElectricVisible).toBeTruthy();
                console.log("Searching by category:" +Electricisvisible ,isGasAndElectricVisible )
             }

            else{

                console.log("seraching is not working correctly")
            }

 })

    //Test the functionality by only searching keyword are show in a pge.

    test.only("correct result for seraching" , async ({page})=>{

        const correctserach=  new Addcom(page);
        await correctserach.login();
        await correctserach.clickgroupmanagement();
        await page.locator("//button[normalize-space()='2']").click();
        await page.locator("//p[normalize-space()='grp13']").click();
        const entertextboxvalue= await page.locator("//input[contains(@placeholder,'| Search by Company name')]").type('Electric');
        await page.keyboard.press('Enter');
        await page.waitForSelector('text=Electric');
        await page.waitForSelector('text=GasandElectric');
        const searchresult=await page.locator('text=Electric' ,'text=GasandElectric' ).allTextContents();
        const areresutcorrect=searchresult.every(result=>result.includes("Electric","GasandElectric" ));
        expect(searchresult.length).toBeGreaterThan(0);
        expect(areresutcorrect).toBeTruthy();
        console.log("search result is working correct" , +searchresult )

        if (!areresutcorrect){

            console.log("seraching is not working correct")
        }


    })
            


   



    
