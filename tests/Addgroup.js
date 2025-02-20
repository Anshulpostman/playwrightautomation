class Addgroup{

    constructor(page){


        this.page=page;// initalize the page object;

        this.urlone='https://devecg.resourcifi.tech/login';
        this.emailinputAddress="//input[contains(@placeholder,'Email Address')]";
        this.passwordinput="//input[@type='password']";
        this.loginbutton="//button[@type='button']";

        this.groupmanagement="(//div[contains(text(),'Group Management')])[1]";
        this.addgroupofcompany="//div[contains(text(),'Add Group')]";
        this.cancelclick="//body/div/div/div/div/div/div/div/div[2]/div[1]";
        this.browseimage="//body/div/div/div/div/div/div/div/div[1]/div[2]/div[1]";
        this.groupname="//input[@placeholder='Enter Group Name']";
        this.addbutton="//div[normalize-space()='Add']";
        this.Enternameuser="//input[@placeholder='Enter Name']";
        this.emailaddress="//input[@placeholder='Enter Email']";
        this.updatecreate="//div[contains(text(),'Create')]";
        this.browseimage="//input[@type='file']";
        this.filePath="C:/Users/RNF-User/Documents/pic/image1.png";
        this.errormessagegroup="(//div[contains(text(),'This is a required field.')])[1]";
        this.addnavigateurl='https://devecg.resourcifi.tech/super/group';
        this.addcompanyinfo="(//div[contains(text(),'Add')])[2]";
        this.addcompnavigateurlgrp13="https://devecg.resourcifi.tech/super/group/list?id=76&grp=ID67888&grpname=grp13";
        
                //this.emptygroupmessage="//*[@id="modal_body"]/div/div[3]/div/div[2]/div/div";
        //this.emptyemailaddress="/html[1]/body[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[1]/div[2]/div[1]/div[5]/div[1]/div[1]/span[1]/div[1]/div[1]";
        
    }

             async navigate(urlone){
             await this.page.goto(this.urlone)
            }

          
          
            async dashboardnavigate(addnavigateurl){
              await this.page.goto(addnavigateurl)
             }
             async grp13dashboardurl(addcompnavigateurlgrp13){
              await this.page.goto(addcompnavigateurlgrp13);
          }
             
             

           async fillEmail(email) {
            if (!email) throw new Error('Email is required');
            await this.page.fill(this.emailinputAddress, email);
            await this.page.waitForTimeout(1000);
        }

        async usernamegrp(username){

          await this.page.fill(this.Enternameuser, username);
        }

        async entergrpemail(email) {
          if (!email) throw new Error('Email is required');
          await this.page.fill(this.emailaddress, email);
          await this.page.waitForTimeout(1000);
      }

            async fillPassword(password) {
            if (!password) throw new Error('Password is required');
            await this.page.fill(this.passwordinput, password);
        }    

           async passwordinputarea(){
            await this.page(this.passwordinput)
           }
      
          async clickloginbutton(){
          await this.page.click(this.loginbutton)
          }

          async clickgroupmanagement(){
          await this.page.click(this.groupmanagement)
          await this.page.waitForTimeout(1000);
          }

          async clickaddgroup(){
          await this.page.click(this.addgroupofcompany)
          await this.page.waitForTimeout(200);
          }

          async clickcancelbutton(){
            await this.page.click(this.cancelclick, { timeout: 60000 });
          }

          async browseimageclick(){
            await this.page.click(this.browseimage);
            await this.page.waitForTimeout(200);
          }

          async Entergroupname(groupName){
            await this.page.fill(this.groupname , groupName);
            //await this.page.waitForTimeout(200);
          }

          async clickAdd(addbutton){
            await this.page.fill(this.addbutton , addbutton);
            //await this.page.waitForTimeout(200);
          }

          async validEmailaddress(){
            await this.page.click(this.emailaddress);
          }

          async invalidEmailaddress(){
            await this.page.click(this.emailaddress);
          }

          async clickupdatecreate(){
            await this.page.click(this.updatecreate);
            await this.page.waitForTimeout(1000)
          }
          async clickAddcompanyinfo(){
            await this.page.click(this.addcompanyinfo);
            await this.page.waitForTimeout(1000)
          }
         
          async login  (email , password){

            await this.navigate(this.urlone);
            await this.fillEmail("superadmin@gmail.com" );
            await this.page.waitForTimeout(200);
            await this.fillPassword("superAdmin123");
            await this.page.waitForTimeout(200);
            await this.clickloginbutton();
            await this.page.waitForTimeout(200);

           }

           async companylogin(Email , paword){

            await this.navigate(this.urlone);
            await this.fillEmail("usercomp99@yopmail.com" );
            await this.page.waitForTimeout(200);
            await this.fillPassword("Anshul11@123");
            await this.page.waitForTimeout(200);
            await this.clickloginbutton();
            await this.page.waitForTimeout(200);




           }

          
           async uploadimage() {
            if (!this.filePath) throw new Error("File path is not defined");
            await this.page.setInputFiles(this.browseimage, this.filePath);
            await this.page.waitForTimeout(5000);
          
        }

        // async blankEmailaddress(){
        //   await this.page.click(this.emptyemailaddress);
        // }

        async blankgorupmessage(){
        await this.page.click(this.errormessagegroup);
        await this.page.waitForTimeout(10000);
        }
         
         

        }

        const{test , expect}= require('@playwright/test');
        const exp = require('constants');

        async function mandatoryfields(page){
        const mandatoryfields = await page.locator("//div[contains(text(),'Year is a required field.')]").isVisible()
        const TotalSpend=await page.locator("//div[contains(text(),'Total Spend is a required field.')]").isVisible()
        const TotalDBE = await page.locator("//div[contains(text(),'Total DBE is a required field.')]").isVisible()
        const TotalDBEPER=await page.locator("//div[contains(text(),'Total DBE % is a required field.')]").isVisible()
        const TotalMbespend=await page.locator("//div[contains(text(),'MBE Spend is a required field.')]").isVisible()
        const Mbeper=await page.locator("//div[contains(text(),'MBE % is a required field.')]").isVisible()
        const TotalMbedirectspend=await page.locator("//div[contains(text(),'MBE Total Direct Spend is a required field.')]").isVisible()
        const Totalsubspend=await page.locator("//div[contains(text(),'MBE Total Sub Spend is a required field.')]").isVisible()
        const TotalAmmericanAfricandirect=await page.locator("//div[contains(text(),'MBE (African American) Direct Spend is a required ')]").isVisible()
        const TotalAmericanAfricanSub=await page.locator("//div[contains(text(),'MBE (African American) Sub Spend is a required fie')]").isVisible()
        const TotalAsianpacificAmericandirect=await page.locator("//div[contains(text(),'MBE (Asian Pacific American) Direct Spend is a req')]").isVisible()
        const TotalAsianpacificAmericansub=await page.locator("//div[contains(text(),'MBE (Asian Pacific American) Direct Spend is a req')]").isVisible()
        const TotalNativeAmericandirect=await page.locator("//div[contains(text(),'MBE (Native American) Direct Spend is a required f')]").isVisible()
        const TotalNativeAmericansub=await page.locator("//div[contains(text(),'MBE (Native American) Sub Spend is a required fiel')]").isVisible()
        const MbeHispanicAmericandirect=await page.locator("//div[contains(text(),'MBE (Hispanic American) Direct Spend is a required')]").isVisible()
        const MbeHispanicAmericansub=await page.locator("//div[contains(text(),'MBE (Hispanic American) Sub Spend is a required fi')]").isVisible()
        const Directspendmbe=await page.locator("//div[contains(text(),'Direct Spend (WMBE) is a required field.')]").isVisible()
        const subspendmbe=await page.locator("//div[contains(text(),'Sub Spend (WMBE) is a required field.')]").isVisible()
        const Pdbedirect=await page.locator("//div[contains(text(),'PBDBE Direct Spend is a required field.')]").isVisible()
        const pdbesub=await page.locator("//div[contains(text(),'PBDBE Sub Spend is a required field.')]").isVisible()
        const totallgtbedirect=await page.locator("//div[contains(text(),'LGBTBE Direct Spend is a required field.')]").isVisible()
        const totalLGBTBESub=await page.locator("//div[contains(text(),'LGBTBE Sub Spend is a required field.')]").isVisible()
        const Dvbedirectspend=await page.locator("//div[contains(text(),'DVBE Direct Spend is a required field.')]").isVisible()
        const Dvbesubspend=await page.locator("//div[contains(text(),'DVBE Sub Spend is a required field.')]").isVisible()
        const totalother8adirect=await page.locator("//div[contains(text(),'Other 8 (a) Direct Spend is a required field.')]").isVisible()
        const totalother8asub=await page.locator("//div[contains(text(),'Other 8 (a) Sub Spend is a required field.')]").isVisible()
        
        //Direct/Subcontracting Information
        const Totaldirectspend=await page.locator("xpath=/html/body/div[1]/div[1]/div[2]/div/div/div/div[2]/div/div/div[4]/div[2]/div/div[1]/div[2]/div/div").isVisible()
        const Totaldirectper=await page.locator("//div[contains(text(),'Total Direct % is a required field.')]").isVisible()
        const Totaldirectsupplier=await page.locator("xpath=//div[contains(text(),'Total Direct # Suppliers is a required field.')]").isVisible()
        const SubcontractingTotalsubspend=await page.locator("xpath=/html/body/div[1]/div[1]/div[2]/div/div/div/div[2]/div/div/div[4]/div[2]/div/div[4]/div[2]/div/div").isVisible()
        const SubcontractingTotalsub=await page.locator("//div[contains(text(),'Total Sub # is a required field.')]").isVisible()
        const Subcontractingtotalsubper=await page.locator("//div[contains(text(),'Total Sub % is a required field.')]").isVisible()
        const newdiversesupplierdollar=await page.locator("//div[contains(text(),'New Diverse Suppliers $ is a required field.')]").isVisible()
        const newdiversesupplierhash=await page.locator("//div[contains(text(),'New Diverse Suppliers # is a required field.')]").isVisible()

        // Revenue Information

        const revenueunderonemillonhash=await page.locator("//div[contains(text(),'Rev - Under $1M -# is a required field.')]").isVisible()
        const revenueunderonemillondollar=await page.locator("//div[contains(text(),'Rev - Under $1M - $ is a required field.')]").isVisible()
        const revenueunderfivemillonhash=await page.locator("//div[contains(text(),'Rev - Under $5M -# is a required field.')]").isVisible()
        const revenueunderfivemillondollar=await page.locator("//div[contains(text(),'Rev - Under $5M - $ is a required field.')]").isVisible()
        const revenueundertenmillonhash=await page.locator("//div[contains(text(),'Rev - Under $10M -# is a required field.')]").isVisible()
        const revenueundertenmillonhdollar=await page.locator("//div[contains(text(),'Rev - Under $10M - $ is a required field.')]").isVisible()
        const revenueabove10millonhash=await page.locator("//div[contains(text(),'Rev - Above $10M -# is a required field.')]").isVisible()
        const revenueabove10millondollar=await page.locator("//div[contains(text(),'Rev - Above $10M - $ is a required field.')]").isVisible()
        const revenegrandtotalhash=await page.locator("//div[contains(text(),'Grand Total $ is a required field.')]").isVisible()
        const revenegrandtotaldollar=await page.locator("//div[contains(text(),'Grand Total # is a required field.')]").isVisible()

        //validate error message for Workforce/Board Diversity Information

        const WorkforceBoardDiversity=await page.locator("xpath=/html/body/div[1]/div[1]/div[2]/div/div/div/div[2]/div/div/div[6]/div[2]/div/div[1]/div[2]/div/div").isVisible()
        const workforcediversity=await page.locator("//div[contains(text(),'WORKFORCE AND BOARD DIVERSITY (# AND % OF WOMEN) i')]").isVisible()
        const workforcediversityhash=await page.locator("xpath=/html/body/div[1]/div[1]/div[2]/div/div/div/div[2]/div/div/div[6]/div[2]/div/div[3]/div[2]/div/div").isVisible()
        const totalboradofdirectors=await page.locator("//div[contains(text(),'Total number of boards of Directors is a required ')]").isVisible()

        //validate error message for mandatory field
        const mandatoryfieldsrequired = await page.locator("//div[contains(text(),'Please fill mandatory field!')]").isVisible()

        
        
        //validate error message for Year
               if(mandatoryfields)
              {
                expect(mandatoryfields).toBeTruthy();
                console.log("Year is a required field.");
              }


              else{
                console.log("Message is not");
              }

              //Validate for the Total Spend error message

              if(TotalSpend)
              {
                expect(TotalSpend).toBeTruthy();
                console.log("Total Spend is a required field.");
              }

              else{
                console.log("Total Spend Message is not visible correct");
              }

              //Validate for the Total DBE error message

              if(TotalDBE)
              {
                expect(TotalDBE).toBeTruthy();
                console.log("Total DBE is a required field.");
              }

              else{
                console.log("Total DBE Message is not visible correct");
              }

              //Validate for the Total DBE % error message
              if(TotalDBEPER)
              {
                expect(TotalDBEPER).toBeTruthy();
                console.log("Total DBE % is a required field.");
              }
              
              else{
                console.log("Total DBE % Message is not visible correct");  
              }

              //Validate for the Total MBE Spend error message

              if (TotalMbespend){
                expect(TotalMbespend).toBeTruthy();
                console.log("MBE Spend is a required field.")
              }
              else{
                console.log("MBE Spend Message is not visible correct");
              }
              //Validate for the Total MBE % error message
              if (Mbeper){
                expect(Mbeper).toBeTruthy();
                console.log("MBE % is a required field.")
              
              }
              else{
                console.log("MBE % Message is not visible correct");
              }

              //Validate for the Total MBE direct spend error message

              if(TotalMbedirectspend){
                expect(TotalMbedirectspend).toBeTruthy();
                console.log("MBE Total Direct Spend is a required field.")
              }

            else{
              console.log("MBE Total Direct Spend Message is not visible correct")
            }

            //Validate for the Total MBE sub spend error message
           
            if(Totalsubspend){
              expect(Totalsubspend).toBeTruthy();
              console.log("MBE Total Sub Spend is a required field.")
            }
            else{
              console.log("MBE Total Sub Spend Message is not visible correct")
            }

            //Validate for the Total American Direct spend error message

            if(TotalAmmericanAfricandirect){
              expect(TotalAmmericanAfricandirect).toBeTruthy();
              console.log("MBE (African American) Direct Spend is a required field.")
            }

            else{
                console.log("MBE (African American) Direct Spend Message is not visible correct")
            }

            //Validate for the Total American sub error message

            if(TotalAmericanAfricanSub){
              expect(TotalAmericanAfricanSub).toBeTruthy();
              console.log("MBE (African American) Sub Spend is a required field.")
            }
            
            else{
              console.log("MBE (African American) Sub Spend Message is not visible correct")
            }

            //Validate for the Total Asian pacific American Direct error message

            if(TotalAsianpacificAmericandirect){
              expect(TotalAsianpacificAmericandirect).toBeTruthy();
              console.log("MBE (Asian Pacific American) Direct Spend is a required field.")
            }
            else{
              console.log("MBE (Asian Pacific American) Direct Spend Message is not visible correct")
            }

            //Validate for the Total Asian pacific American sub error message

            if(TotalAsianpacificAmericansub){
              expect(TotalAsianpacificAmericansub).toBeTruthy();
              console.log("MBE (Asian Pacific American) Sub Spend is a required field.")
            }
            else{
              console.log("MBE (Asian Pacific American) Sub Spend Message is not visible correct")
            }
            
            //Validate for the Total Native American Direct error message

            if(TotalNativeAmericandirect){
              expect(TotalNativeAmericandirect).toBeTruthy();
              console.log("MBE (Native American) Direct Spend is a required field.")
            }
            else{
            console.log("MBE (Native American) Direct Spend Message is not visible correct")
            }

            //Validate for the Total Native American Sub error message

            if(TotalNativeAmericansub){
              expect(TotalNativeAmericansub).toBeTruthy();
              console.log("MBE (Native American) Sub Spend is a required field.")
            }

            else{
              console.log("MBE (Native American) Sub Spend Message is not visible correct")
            }

            //Validate for the Total MBE Hispanic American Direct error message

            if(MbeHispanicAmericandirect){
              expect(MbeHispanicAmericandirect).toBeTruthy();
              console.log("MBE (Hispanic American) Direct Spend is a required field.")
            }

            else{
              console.log("MBE (Hispanic American) Direct Spend Message is not visible correct")
            }
            
            //Validate for the Total MBE Hispanic American Sub error message

            if(MbeHispanicAmericansub){
              expect(MbeHispanicAmericansub).toBeTruthy();
              console.log("MBE (Hispanic American) Sub Spend is a required field.")
            }
            else{
              console.log("MBE (Hispanic American) Sub Spend Message is not visible correct")
            }

            //Validate for the Direct Spend WMBE error message
            if(Directspendmbe){
              expect(Directspendmbe).toBeTruthy();
              console.log("Direct Spend (WMBE) is a required field.")
            } 
            else{
              console.log("Direct Spend (WMBE) Message is not visible correct")
            }

            //Validate for the Sub Spend WMBE error message
            if(subspendmbe){
              expect(subspendmbe).toBeTruthy();
              console.log("Sub Spend (WMBE) is a required field.")
            }
            else{
              console.log("Sub Spend (WMBE) Message is not visible correct")
            }

            //Validate for the PBD Direct error message
            if(Pdbedirect){
              expect(Pdbedirect).toBeTruthy();
              console.log("PBDBE Direct Spend is a required field.")
            }
            else{
              console.log("PBDBE Direct Spend Message is not visible correct")
            }

            //Validate for the PBD Sub error message
            if(pdbesub){
              expect(pdbesub).toBeTruthy();
              console.log("PBDBE Sub Spend is a required field.")
            } 
            else{
              console.log("PBDBE Sub Spend Message is not visible correct")
            }

            //Validate for the Total LGBTBE Direct error message
            if(totallgtbedirect){
              expect(totallgtbedirect).toBeTruthy();
              console.log("LGBTBE Direct Spend is a required field.")
            } 
            else{
              console.log("LGBTBE Direct Spend Message is not visible correct")
            }
           
            //Validate for the Total LGBTBE Direct error message
            if(totalLGBTBESub)
            {
              expect(totalLGBTBESub).toBeTruthy();
              console.log("LGBTBE Sub Spend is a required field.")
            }
            else{
              console.log("LGBTBE Sub Spend Message is not visible correct")
            }
           // Validate for the Total DVBE Direct error message
           if(Dvbedirectspend){
            expect(Dvbedirectspend).toBeTruthy();
            console.log("DVBE Direct Spend is a required field.")
           }
           else{
            console.log("DVBE Direct Spend Message is not visible correct")
           }
           //validate for the Total DVBE Sub error message
           if(Dvbesubspend){
            expect(Dvbesubspend).toBeTruthy();
            console.log("DVBE Sub Spend is a required field.")
           }
           else{
            console.log("DVBE Sub Spend Message is not visible correct")
           }
            //Validate for the Total Other 8(a) Direct error message
            if(totalother8adirect){
              expect(totalother8adirect).toBeTruthy();
              console.log("Other 8 (a) Direct Spend is a required field.")
            } 
            else{
              console.log("Other 8 (a) Direct Spend Message is not visible correct")
            }

            //validate for the Total Other 8(a) Sub error message
            if(totalother8asub)
            {
              expect(totalother8asub).toBeTruthy();
              console.log("Other 8 (a) Sub Spend is a required field.")
            }
            else{
              console.log("Other 8 (a) Sub Spend Message is not visible correct")
            }

            //Validate for the Total Direct Spend error message
            if(Totaldirectspend){
              expect(Totaldirectspend).toBeTruthy();
              console.log("Total Direct Spend is a required field.")
            }
            else{
              console.log("Total Direct Spend Message is not visible correct")
            }

            //Validate for the Total Direct % error message
            if(Totaldirectper){
              expect(Totaldirectper).toBeTruthy();
              console.log("Total Direct % is a required field.")
            }
            else{
              console.log("Total Direct % Message is not visible correct")
            }
            //validate for the Total Direct Supplier error message
            if(Totaldirectsupplier){
              expect(Totaldirectsupplier).toBeTruthy();
              console.log("Total Direct # Suppliers is a required field.")
            }
            else{
              console.log("Total Direct # Suppliers Message is not visible correct")
            }
            
            //validate for the Total Subcontracting Total Sub Spend error message
            if(SubcontractingTotalsubspend){
              expect(SubcontractingTotalsubspend).toBeTruthy();
              console.log("Total Sub Spend is a required field.")
            }
            else{
              console.log("Total Sub Spend Message is not visible correct")
            }

            //validate for the Total Subcontracting Total Sub # error message
            if(SubcontractingTotalsub)
            {
              expect(SubcontractingTotalsub).toBeTruthy();
              console.log("Total Sub # is a required field.")
            }
            else{
              console.log("Total Sub # Message is not visible correct")
            }

            //Validate for the Total Subcontracting Total Sub % error message
            if(Subcontractingtotalsubper)
            {
              expect(Subcontractingtotalsubper).toBeTruthy();
              console.log("Total Sub % is a required field.")

            }
            else{
              console.log("Total Sub % Message is not visible correct")
            }

            //Validate for the New Diverse Supplier $ error message
            if(newdiversesupplierdollar){
              expect(newdiversesupplierdollar).toBeTruthy();
              console.log ("New Diverse Suppliers $ is a required field.")
            }
            else{
              console.log("New Diverse Suppliers $ Message is not visible correct")
            }
             
            //validate for the New Diverse Suppliers # error message

            if(newdiversesupplierhash){
              expect(newdiversesupplierhash).toBeTruthy();

              console.log("New Diverse Suppliers # is a required field.")
            }
            else{
              console.log("New Diverse Suppliers # Message is not visible correct")
            }

            //validate for the Revenue Under $1M # error message
            if(revenueunderonemillonhash){
              expect(revenueunderonemillonhash).toBeTruthy();
              console.log("Rev - Under $1M -# is a required field.")
            }
            else{
              console.log("Rev - Under $1M -# Message is not visible correct")
            }

            //validate for the Revenue Under $1M $ error message
            if(revenueunderonemillondollar){
              expect(revenueunderonemillondollar).toBeTruthy();
              console.log("Rev - Under $1M - $ is a required field.")
            }
            else{
              console.log("Rev - Under $1M - $ Message is not visible correct")
            }

            //validate for the Revenue Under $5M # error message
            if(revenueunderfivemillonhash)
            {
              expect(revenueunderfivemillonhash).toBeTruthy();
              console.log("Rev - Under $5M -# is a required field.")
            }
            else{
              console.log("Rev - Under $5M -# Message is not visible correct")
            }

            //Validate for the Revenue Under $5M $ error message
            if(revenueunderfivemillondollar){
              expect(revenueunderfivemillondollar).toBeTruthy();
              console.log("Rev - Under $5M - $ is a required field.")
            }
            else{
              console.log("Rev - Under $5M - $ Message is not visible correct")
            }

            //validate for the Revenue Under $10M # error message
            if(revenueundertenmillonhash){
              expect(revenueundertenmillonhash).toBeTruthy();
              console.log("Rev - Above $10M -# is a required field.")
            }
            else{
              console.log("Rev - Under $10M -# Message is not visible correct")
            }

            //validate for the Revenue Under $10M $ error message
            if(revenueundertenmillonhdollar){
              expect(revenueundertenmillonhdollar).toBeTruthy();
              console.log("Rev - Above $10M - $ is a required field.")
            }
            else{
              console.log("Rev - Under $10M - $ Message is not visible correct")
            }

            //Validate for the under $10M # error message
            if(revenueabove10millonhash){
              expect(revenueabove10millonhash).toBeTruthy();
              console.log("Rev - Above $10M -# is a required field.")
            } 
            else{
              console.log("Rev - Above $10M -# Message is not visible correct")
            }

            //Validate for the under $10M $ error message
            if(revenueabove10millondollar){
              expect(revenueabove10millondollar).toBeTruthy();
              console.log("Rev - Above $10M - $ is a required field.")
            }

            else{
              console.log("Rev - Above $10M - $ Message is not visible correct")
            }

            //Validate for the Grand Total $ error message
            if(revenegrandtotalhash){
              expect(revenegrandtotalhash).toBeTruthy();
              console.log("Grand Total $ is a required field.")
            }
            else{
              console.log("Grand Total $ Message is not visible correct")
            }

            //validate for the Grand Total # error message
            if(revenegrandtotaldollar){
              expect(revenegrandtotaldollar).toBeTruthy();
              console.log("Grand Total # is a required field.")
            }
            else{
              console.log("Grand Total # Message is not visible correct")
            }

            //Validate for the Workforce Board Diversity error message
            if(WorkforceBoardDiversity){
              expect(WorkforceBoardDiversity).toBeTruthy();
              console.log("9.1.2 Description of Diverse Suppliers with Majority Workforce in California (# OF DIVERSE SUPPLIERS IN CA) is a required field.");
            }
            else{
              console.log("9.1.2 Description of Diverse Suppliers with Majority Workforce in California (# OF DIVERSE SUPPLIERS IN CA) Message is not visible correct");
            }

            //Validate for the Workforce Diversity error message
            if(workforcediversity){
              expect(workforcediversity).toBeTruthy();
              console.log("WORKFORCE AND BOARD DIVERSITY (# AND % OF WOMEN) is a required field.");
            }
            else{
              console.log("WORKFORCE AND BOARD DIVERSITY (# AND % OF WOMEN) is a required field is not visible correct")
            }

            //validate for the WORKFORCE AND BOARD DIVERSITY error message

            if(workforcediversityhash){
              expect(workforcediversityhash).toBeTruthy();
              console.log("WORKFORCE AND BOARD DIVERSITY (# AND % OF PPL OF COLOR) is a required field.");
            }
            else{
              console.log("WORKFORCE AND BOARD DIVERSITY (# AND % OF PPL OF COLOR) is a required field.")
            }

            //validate for the Total number of boards of Directors error message
            if(totalboradofdirectors){
              expect(totalboradofdirectors).toBeTruthy();
              console.log("Total number of boards of Directors is a required field.");
            }
            else{
              console.log("Total number of boards of Directors is a required field is not visible correct");
            }

            //validate for the mandatory fields required error message
            if(mandatoryfieldsrequired)
            {
              expect(mandatoryfieldsrequired).toBeTruthy();
              console.log("Please fill mandatory field!");
            }

            else{
              console.log("Please fill mandatory field! Message is not visible correct");
            }

          } 
           
        
           //const{test , expect}= require('@playwright/test');
           //const{test , expect}= require('@playwright/test');
           
           //const exp = require('constants');
            async function fillmandatoryfields(page){

            const inputfeilds={

                             "year":{locator:"//input[@placeholder='Year']", value:"2024"},
                             "Total Spend":{locator:"//input[@placeholder='Enter total spend (ex-00.00)']" , value:"8000000"},
                             "Total DBE" : {locator:"//input[@placeholder='Enter total DBE (ex-00.00)']", value:"666666"},
                             "Total DBE %":{locator:"//input[@placeholder='Enter total DBE % (ex-00.00)']", value:"80"}, 
                             //MBE information
                             "MBE Spend":{locator:"//input[@placeholder='Spend for Minority Business Enterprises.']" , value:"7000"},
                              "MBE % ":{locator:"//input[@placeholder='Percentage of spend for MBEs.']" , value:"70"},
                              "MBE Total Direct Spend":{locator:"//input[@placeholder='Total Direct Spend for Minority Business Enterprises.']" , value:"80000"},
                              "MBE Total Sub Spend":{locator:"//input[@placeholder='Total Subcontracting Spend for Minority Business Enterprises.']", value:"99999"},
                              "MBE (African American) Spend":{locator:"//input[@placeholder='Spend for (African American) Minority Business Enterprises.']" , value:"44444"},
                              "MBE (African American) #":{locator:"//input[@placeholder='Number of spend for (African American) MBEs.']" , value:"4444"},
                              "MBE (African American) %":{locator : "//input[@placeholder='Percentage of spend for (African American) MBEs.']", value:"12"},
                              "MBE (African American) Direct Spend *":{locator:"//input[@placeholder='Direct Spend for (African American) Minority Business Enterprises.']", value:"5555"},
                              "MBE (African American) Sub Spend *":{locator:"//input[@placeholder='Sub Spend for (African American) Minority Business Enterprises.']", value:"222222"},
                              "MBE(Asian Pacific American) Spend":{locator:"//input[@placeholder='Spend for (Asian Pacific American) Minority Business Enterprises.']" , value:"222222"},
                              "MBE (Asian Pacific American) #":{locator:"//input[@placeholder='Number of spend for (Asian Pacific American) MBEs.']" , value:"22222"},
                              "MBE (Asian Pacific American) %":{locator:"//input[@placeholder='Percentage of spend for (Asian Pacific American) MBEs.']", value:"22"},
                              "MBE (Asian Pacific American) Direct Spend *":{locator:"//input[@placeholder='Direct Spend for (Asian Pacific American) Minority Business Enterprises.']" , value:"700000"},
                              "MBE (Asian Pacific American) Sub Spend *":{locator:"//input[@placeholder='Sub Spend for (Asian Pacific American) Minority Business Enterprises.']" , value:"60000"},
                              "MBE (Native American) Spend": {locator:"//input[@placeholder='Spend for (Native American) Minority Business Enterprises.']" , value:"30000"},
                              "MBE (Native American) #":{locator:"//input[@placeholder='Number of spend for (Native American) MBEs.']" , value:"3000"},
                              "MBE (Native American) %":{locator:"//input[@placeholder='Percentage of spend for (Native American) MBEs.']" , value:"10"},
                              "MBE (Native American) Direct Spend *":{locator:"//input[@placeholder='Direct Spend for (Native American) Minority Business Enterprises.']" , value:"30000"},
                              "MBE (Native American) Sub Spend *":{locator:"//input[@placeholder='Sub Spend for (Native American) Minority Business Enterprises.']" , value:"6000"},
                              "MBE (Hispanic American) Spend":{locator:"//input[@placeholder='Spend for (Hispanic American) Minority Business Enterprises.']" , value:"40000"},
                              "MBE (Hispanic American) #":{locator:"//input[@placeholder='Number of spend for (Hispanic American) MBEs.']" , value:"1111"},
                              "MBE (Hispanic American) %":{locator:"//input[@placeholder='Percentage of spend for (Hispanic American) MBEs.']" , value:"20"},
                              "MBE (Hispanic American) Direct Spend *":{locator:"//input[@placeholder='Direct Spend for (Hispanic American) Minority Business Enterprises.']" , value:"20000"},
                              "MBE (Hispanic American) Sub Spend *":{locator:"//input[@placeholder='Sub Spend for (Hispanic American) Minority Business Enterprises.']", value:"30000"},
                              //Diverse Group Information
                              "WMBE Spend":{locator:"//input[@placeholder='Spend for Women Minority Business Enterprises.']" , value:"3333333"},
                              "WMBE #":{Locator:"//input[@placeholder='Number of spend for WMBEs.']" , value:"2222"},
                              "WMBE %":{Locator:"//input[@placeholder='Number of spend for WMBEs.']" , value:"44"},
                              "Direct Spend (WMBE) *":{Locator:"//input[@placeholder='Direct Spend for Minority Women Business Enterprises.']" , value:"444444"},
                              "Sub Spend (WMBE) *":{Locator:"//input[@placeholder='Sub Spend for Minority Women Business Enterprises.']" , value:"22222"},
                              "WBE Spend":{Locator:"//input[@placeholder='Spend for Women Business Enterprises.']" , value:"2222"},
                              "WBE #":{Locator:"//input[@placeholder='Number of spend for WBEs.']" , value:"1111"},
                              "WBE %":{Locator:"//input[@placeholder='Percentage of spend for WBEs.']" , value:"15"},
                              "WBE Direct Spend *":{Locator:"//input[@placeholder='Direct Spend for Women Business Enterprises.']" , value:"7777777"},
                              "WBE Sub Spend *":{Locator:"//input[@placeholder='Subcontracting Spend for Women Business Enterprises.']" , value:"555555"},
                              "PBDBE Spend":{Locator:"//input[@placeholder='Spend for Person with Disabilities Business Enterprises.']" , value:"111111"},
                              "PBDBE #":{Locator:"//input[@placeholder='Number of spend for PBDBEs.']" , value:"3333"},
                              "PBDBE %":{Locator:"//input[@placeholder='Percentage of spend for PBDBEs.']" , value:"10"},
                              "PBDBE Direct Spend *":{Locator:"//input[@placeholder='Direct Spend for Person with Disabilities Business Enterprises.']" , value:"1111111"},
                              "PBDBE Sub Spend *":{Locator:"//input[@placeholder='Subcontracting Spend for Person with Disabilities Business Enterprises.']" , value:"22222"},
                              "LGBTBE Spend":{Locator:"//input[@placeholder='Spend for LGBT Business Enterprises.']" , value:"22222"},
                              "LGBTBE #":{Locator:"//input[@placeholder='Number of spend for LGBTBEs.']" , value:"2222"},
                              "LGBTBE %":{Locator:"//input[@placeholder='Percentage of spend for LGBTBEs.']" , value:"11"},
                              "LGBTBE Direct Spend *":{Locator:"//input[@placeholder='Direct Spend for LGBTBE']" , value:"8888888"},
                              "LGBTBE Sub Spend *":{Locator:"//input[@placeholder='Sub Spend for LGBTBE']" , value:"33333"},
                              "DVBE Spend":{Locator:"//input[@placeholder='Spend for Disabled Veteran Business Enterprises.']" , value:"99999"},
                              "DVBE #":{Locator:"//input[@placeholder='Number of spend for DVBEs.']" , value:"1111"},
                              "DVBE %":{Locator:"//input[@placeholder='Percentage of spend for DVBEs.']" , value:"11"},
                              "DVBE Direct Spend *":{Locator:"//input[@placeholder='Direct Spend for Disabled Veteran Business Enterprises.']" , value:"22222"},
                              "DVBE Sub Spend *":{Locator:"//input[@placeholder='Sub Spend for Disabled Veteran Business Enterprises.']" , value:"22222"},
                              "Other 8 (a) Spend":{Locator:"//input[@placeholder='Spend for other 8(a) small businesses.']" , value:"44444"},
                              "Other 8 (a) %":{Locator:"//input[@placeholder='Number of spend for other 8(a) small businesses.']" , value:"10"},
                              "Other 8 (a) #":{Locator:"//input[@placeholder='Percentage of spend for other 8(a) small businesses.']" , value:"3333"},
                              "Other 8 (a) Direct Spend *":{Locator:"//input[@placeholder='Direct Spend for other 8(a) small businesses.']" , value:"3333333"},
                              "Other 8 (a) Sub Spend *":{Locator:"//input[@placeholder='Sub Spend for other 8(a) small businesses.']" , value:"3333"},
                              //Direct/Subcontracting Information
                              "Total Direct Spend *":{locator:"//input[@placeholder='Total direct spending by the company.']",value:"2000000"},
                              "Total Direct % *":{locator:"//input[@placeholder='Percentage of direct spending.']",value:"12"},
                              "Total Direct # Suppliers *":{locator:"//input[@placeholder='Number of direct suppliers.']",value:"2222"},
                              "Total Sub Spend *":{locator:"//input[@placeholder='Total subcontractor spending.']",value:"222222"},
                              "Total Sub # *":{locator:"//input[@placeholder='Number of subcontractor spending.']",value:"2222"},
                              "Total Sub % *":{locator:"//input[@placeholder='Percentage of subcontractor spending.']",value:"13"},
                              "New Diverse Suppliers $ *":{locator:"//input[@placeholder='Spend for new diverse suppliers.']",value:"11111"},
                              "New Diverse Suppliers # *":{locator:"//input[@placeholder='Number of new diverse suppliers.']",value:"1222"},
                              //Revenue Reporting Information
                              "Rev - Under $1M -# *":{locator:"//input[@placeholder='Number of suppliers with revenue under $1M.']" , value:"2000"},
                              "Rev - Under $1M - $ *":{locator:"//input[@placeholder='Spend for suppliers with revenue under $1M.']" , value:"20000"},
                              "Rev - Under $5M -# *":{locator:"//input[@placeholder='Number of suppliers with revenue under $5M.']" , value:"2222"},
                              "Rev - Under $5M - $ *":{locator:"//input[@placeholder='Spend for suppliers with revenue under $5M.']" , value:"222222"},
                              "Rev - Under $10M -# *":{locator:"//input[@placeholder='Number of suppliers with revenue under $10M.']" , value:"2222"},
                              "Rev - Under $10M - $ *":{locator:"//input[@placeholder='Spend for suppliers with revenue under $10M.']" , value:"222222"},
                              "Rev - Above $10M -# *":{locator:"//input[@placeholder='Number of suppliers with revenue above $10M.']" , value:"2222"},
                              "Rev - Above $10M - $ *":{locator:"//input[@placeholder='Spend for suppliers with revenue above $10M.']" , value:"222222"},
                              "Grand Total $ *":{locator:"//input[@placeholder='Total spend across all categories.']" , value:"222222"},
                              "Grand Total # *":{locator:"//input[@placeholder='Total number of suppliers across all categories.']" , value:"2222"},
                              //Workforce/Board Diversity Information
     "9.1.2 Description of Diverse Suppliers with Majority Workforce in California (# OF DIVERSE SUPPLIERS IN CA) *":{locator:"//input[@placeholder='Number of diverse suppliers with a majority workforce in California.']", value:"20000"},
     "WORKFORCE AND BOARD DIVERSITY (# AND % OF WOMEN) * " :{locator:"//input[@placeholder='Number and percentage of women in the workforce and for the board.']", value:"12"},                     
     "WORKFORCE AND BOARD DIVERSITY (# AND % OF PPL OF COLOR) *":{locator:"//input[@placeholder='Number and percentage of people of color in the workforce and for the board.']", Value:"12"},
     "Total Number Of Boards Of Directors *":{locator:"//input[@placeholder='Total number of boards of Directors.']", value:"1000"}

            }

     for (const [field, data] of Object.entries(inputfeilds)) {
      const inputElement = page.locator(data.locator);
      await inputElement.fill(data.value);  // ✅ Corrected with async/await
      console.log(`✅ Entered '${data.value}' for: ${field}`);
  }
}
            
  

        
          // module.exports = Addgroup;
          // module.exports.mandatoryfields = mandatoryfields; // ✅ Correct way
          // module.exports={fillMandatoryFields}
          module.exports = {
            Addgroup,  // Export Class
            fillmandatoryfields,  // Export Function
            mandatoryfields  // Export Array
        };

    
  

        