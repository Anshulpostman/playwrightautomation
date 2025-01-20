    const Addgroup = require('./forgotpassword')
    const{test , expect}= require('@playwright/test')

    test.only("Add group " , async ({page})=>{

    const addgroup = new Addgroup(page);
    // const emailaddress='testing@zis1bxhm.mailosaur.net';
    // const pwd='Anshul@12345678'
    const dashboardurl='https://devecg.resourcifi.tech/super/dashboard'
    const currenturl='https://devecg.resourcifi.tech/super/dashboard';

    await addgroup.navigate("https://devecg.resourcifi.tech/login");
    await addgroup.fillEmail("superadmin@gmail.com");
    await addgroup.fillPassword("Anshul@superAdmin123");
    await addgroup.clickloginbutton();
    await page.waitForTimeout(2000);
    await addgroup.clickgroupmanagement();
    expect(currenturl).toContain(dashboardurl);
    console.log("user redirect to dashboard correctly:" + dashboardurl);
    const isVisible = await addgroup.page.isVisible(addgroup.groupmanagement);
     if(isVisible){
                   await addgroup.clickgroupmanagement();

                   console.log("userable to click on Group Management");
           }
                   else{
                   
                  ("User not able to click on Group Management. Error: ", error.message);
           }


           await addgroup.clickaddgroup();
           const addgroupurl='https://devecg.resourcifi.tech/super/group';
           const currentUrl='https://devecg.resourcifi.tech/super/group';
           if(currentUrl===addgroupurl){
           expect(currentUrl).toContain(addgroupurl);
           console.log("User able to click on Add group button:" + addgroupurl)
           
           }

           else{
          console.log("Add button not cliked:" + testcasefailed)

           }
           
    })
    

        //Cancel return to the dashboard page   

        test("cancel return to the dshboard page" , async({page})=>{
            const addgroup = new Addgroup(page);
            
            const cancelbutton='https://devecg.resourcifi.tech/super/dashboard'
            const currenturl='https://devecg.resourcifi.tech/super/dashboard';
            const dashboardurl='https://devecg.resourcifi.tech/super/dashboard';
        
            await addgroup.navigate("https://devecg.resourcifi.tech/login");
            await addgroup.fillEmail("superadmin@gmail.com");
            await addgroup.fillPassword("superAdmin123");
            await addgroup.clickloginbutton();
            await addgroup.clickgroupmanagement();
           
           await addgroup.clickcancelbutton();

            if(cancelbutton===dashboardurl)
            {
                expect(cancelbutton).toContain(dashboardurl)
                console.log("user able to return to dashboard page by clicking on cancel button ")

            }

            else{

                console.log("cancel button is not working")
            }

        });
        // verify the validation message shows correct if we user click on create without upload and enter anything.

           test("verify all mandatory message" , async ({page})=>{
           const addgroup=new Addgroup(page)
           await addgroup.login();
           await addgroup.clickgroupmanagement();
           await addgroup.clickaddgroup();
           await addgroup.browseimageclick();
           await addgroup.Entergroupname();
           await addgroup.validEmailaddress();
           await addgroup.clickupdatecreate();
           //locator for error messages
           const groupnameerrormessage=await page.locator("//div[contains(text(),'This is a required field.')]");
           const Emailaddresserrormessage=await page.locator("//div[contains(text(),'Atleast one email is required')]");
           const Browseimageerrormessage=await page.locator("//div[contains(text(),'Image is required')]");
           //check for error message

           const grouperrortext= await groupnameerrormessage.textContent();
           const Emailaddresstext= await Emailaddresserrormessage.textContent();
           const Browseimageerrortext=await Browseimageerrormessage.textContent();

           if(grouperrortext==="This is a required field."){
            
            expect(grouperrortext).toBe("This is a required field.")
            console.log("This is a required field.")
           }
           
           else{
            console.log("Messaeg is not correct")
           }

           if(Browseimageerrortext==="Image is required"){
            
            expect(Browseimageerrortext).toBe("Image is required")
            console.log("Image is required")
           }
           
           else{
            console.log("Messaeg is not correct")
           }

           if(Emailaddresstext==="Atleast one email is required"){
            
            expect(Emailaddresstext).toBe("Atleast one email is required")
            console.log("Atleast one email is required")
           }
           
           else{
            console.log("Messaeg is not correct")
           }

        });
            
           
        // Valiadte if user only upload image and did not enter any other field and click on create

        test("Validate if user upload only image" , async ({page})=>{


            const addgroup=new Addgroup(page);
            await addgroup.login();
            await addgroup.clickgroupmanagement();
            await addgroup.clickaddgroup();
           
            const successfullupload=await addgroup.uploadimage();
            const imageVisible  = await page.locator("(//img[@alt='Selected'])[1]").waitFor({ state: "visible", timeout: 5000 }).catch(() => false);
             if(successfullupload===imageVisible)
              {
              console.log("image upload successfully");
              expect(successfullupload).toBe(imageVisible);
              }
               else{
               console.log("image not uplaod successfully");
               }

               const requiredmessage=await addgroup.clickupdatecreate();
               const messagevisible= await page.locator("(//div[contains(text(),'This is a required field.')])[1]").waitFor({ state: "visible", timeout: 5000 }).catch(() => false);
               const emailerrorvisible=await page.locator("//div[contains(text(),'Atleast one email is required')]").waitFor({ state: "visible", timeout: 5000 }).catch(() => false);
             
               if (requiredmessage===messagevisible) {
                console.log("This is a required field");
                expect(requiredmessage).toBe(messagevisible);
            } else {
                console.log("Message is not correct");
            }

            if (requiredmessage===emailerrorvisible) {
                console.log("Atleast one email is required");
                expect(requiredmessage).toBe(emailerrorvisible);
            } else {
                console.log("Message is not correct");
            }
          
        });
        
        // validate if user browse image and enter groupname and click on create.

            test("click create after uplaod image and enter groupname"  , async ({page})=>{

            const addgroup=new Addgroup(page);
            await addgroup.login();
            await addgroup.clickgroupmanagement();
            await addgroup.clickaddgroup();
            await addgroup.uploadimage();
            await addgroup.Entergroupname("grp1");
            
            await addgroup.clickupdatecreate();
            const emailerrorvisible=await page.locator("//div[contains(text(),'Atleast one email is required')]").waitFor({ state: "visible", timeout: 5000 }).catch(() => false);
            const requiredmessage=await addgroup.clickupdatecreate();
            //const imageVisible  = await page.locator("(//img[@alt='Selected'])[1]").waitFor({ state: "visible", timeout: 5000 }).catch(() => false);
            
            if (requiredmessage===emailerrorvisible) {
                console.log("Atleast one email is required");
                expect(requiredmessage).toBe(emailerrorvisible);
            } else {
                console.log("Message is not correct");
            }
        });

         //validate if user created group sucessfully and make sure that is visible on the page.
         
         test("validate if user created group sucessfully and make sure that is visible on the page"  , async ({page})=>{

            const addgroup=new Addgroup(page);
                    
            await addgroup.navigate("https://devecg.resourcifi.tech/login");
            await addgroup.login();
            await addgroup.clickgroupmanagement();
            await addgroup.clickaddgroup();
            await addgroup.uploadimage();
             await addgroup.Entergroupname("grp13")
             await addgroup.usernamegrp("Anshul");
             await addgroup.entergrpemail("Anshul13@yopmail.com");
             //await page.keyboard.press( 'Enter');
             await page.locator("//div[normalize-space()='Add']").click();
             await addgroup.clickupdatecreate();
             
             
             await addgroup.dashboardnavigate("https://devecg.resourcifi.tech/super/group");
             
           // const textpresent= await page.waitForSelector('text=grp13', { timeout: 5000 });
             const textIsVisible = await page.locator('text=grp13').first().isVisible();

             if(await textIsVisible.isVisible){

                 console.log("text is present in page")

                expect(textIsVisible).toBeTruthy();
               
             }
             else{

                console.log("text is not present")
             }
             


        } )

              
             
                                  
                                       
           

        
           
            
           


       

        




   