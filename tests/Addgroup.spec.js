    const Addgroup = require('./forgotpassword')
    const{test , expect}= require('@playwright/test')

    test("Add group " , async ({page})=>{

    const addgroup = new Addgroup(page);
    const emailaddress='testing@zis1bxhm.mailosaur.net';
    const pwd='Anshul@12345678'
    const dashboardurl='https://devecg.resourcifi.tech/super/dashboard'
    const currenturl='https://devecg.resourcifi.tech/super/dashboard';

    await addgroup.navigate("https://devecg.resourcifi.tech/login");
    await addgroup.fillEmail("testing@zis1bxhm.mailosaur.net");
    await addgroup.fillPassword("Anshul@12345678");
    await addgroup.clickloginbutton();
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
            const pwd='Anshul@12345678'
            const cancelbutton='https://devecg.resourcifi.tech/super/dashboard'
            const currenturl='https://devecg.resourcifi.tech/super/dashboard';
            const dashboardurl='https://devecg.resourcifi.tech/super/dashboard';
        
            await addgroup.navigate("https://devecg.resourcifi.tech/login");
            await addgroup.fillEmail("testing@zis1bxhm.mailosaur.net");
            await addgroup.fillPassword("Anshul@12345678");
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
        // verify the validation message shows correct if we user click on create without upload anything.

           test.only("verify all mandatory message" , async ({page})=>{
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

        




   