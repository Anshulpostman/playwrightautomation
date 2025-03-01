const { expect } = require('@playwright/test');
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
            await this.fillEmail("infoone@yopmail.com" );
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
         
         

        

       
        
        async  mandatoryfields(page){
          console.log("Checking mandatory fields...");
        const locators = ["//div[contains(text(),'Year is a required field.')]",
                          "//div[contains(text(),'Total Spend is a required field.')]",
                          "//div[contains(text(),'Total DBE is a required field.')]",
                          "//div[contains(text(),'Total DBE % is a required field.')]",
        "//div[contains(text(),'MBE Spend is a required field.')]",
        "//div[contains(text(),'MBE % is a required field.')]",
        "//div[contains(text(),'MBE Total Direct Spend is a required field.')]",
        "//div[contains(text(),'MBE Total Sub Spend is a required field.')]",
       "//div[contains(text(),'MBE (African American) Direct Spend is a required ')]",
        "//div[contains(text(),'MBE (African American) Sub Spend is a required fie')]",
        "//div[contains(text(),'MBE (Asian Pacific American) Direct Spend is a req')]",
        "//div[contains(text(),'MBE (Asian Pacific American) Direct Spend is a req')]",
        "//div[contains(text(),'MBE (Native American) Direct Spend is a required f')]",
       "//div[contains(text(),'MBE (Native American) Sub Spend is a required fiel')]",
        "//div[contains(text(),'MBE (Hispanic American) Direct Spend is a required')]",
        "//div[contains(text(),'MBE (Hispanic American) Sub Spend is a required fi')]",
        "//div[contains(text(),'Direct Spend (WMBE) is a required field.')]",
        "//div[contains(text(),'Sub Spend (WMBE) is a required field.')]",
        "//div[contains(text(),'PBDBE Direct Spend is a required field.')]",
        "//div[contains(text(),'PBDBE Sub Spend is a required field.')]",
        "//div[contains(text(),'LGBTBE Direct Spend is a required field.')]",
        "//div[contains(text(),'LGBTBE Sub Spend is a required field.')]",
        "//div[contains(text(),'DVBE Direct Spend is a required field.')]",
       "//div[contains(text(),'DVBE Sub Spend is a required field.')]",
       "//div[contains(text(),'Other 8 (a) Direct Spend is a required field.')]",
        "//div[contains(text(),'Other 8 (a) Sub Spend is a required field.')]",
        
        //Direct/Subcontracting Information
        "xpath=/html/body/div[1]/div[1]/div[2]/div/div/div/div[2]/div/div/div[4]/div[2]/div/div[1]/div[2]/div/div",
        "//div[contains(text(),'Total Direct % is a required field.')]",
        "xpath=//div[contains(text(),'Total Direct # Suppliers is a required field.')]",
        "xpath=/html/body/div[1]/div[1]/div[2]/div/div/div/div[2]/div/div/div[4]/div[2]/div/div[4]/div[2]/div/div",
        "//div[contains(text(),'Total Sub # is a required field.')]",
        "//div[contains(text(),'Total Sub % is a required field.')]",
        "//div[contains(text(),'New Diverse Suppliers $ is a required field.')]",
      "//div[contains(text(),'New Diverse Suppliers # is a required field.')]",

        // Revenue Information

        "//div[contains(text(),'Rev - Under $1M -# is a required field.')]",
        "//div[contains(text(),'Rev - Under $1M - $ is a required field.')]",
        "//div[contains(text(),'Rev - Under $5M -# is a required field.')]",
        "//div[contains(text(),'Rev - Under $5M - $ is a required field.')]",
        "//div[contains(text(),'Rev - Under $10M -# is a required field.')]",
        "//div[contains(text(),'Rev - Under $10M - $ is a required field.')]",
        "//div[contains(text(),'Rev - Above $10M -# is a required field.')]",
       "//div[contains(text(),'Rev - Above $10M - $ is a required field.')]",
        "//div[contains(text(),'Grand Total $ is a required field.')]",
        "//div[contains(text(),'Grand Total # is a required field.')]",

        //validate error message for Workforce/Board Diversity Information

        "xpath=/html/body/div[1]/div[1]/div[2]/div/div/div/div[2]/div/div/div[6]/div[2]/div/div[1]/div[2]/div/div",
        "//div[contains(text(),'WORKFORCE AND BOARD DIVERSITY (# AND % OF WOMEN) i')]",
       "xpath=/html/body/div[1]/div[1]/div[2]/div/div/div/div[2]/div/div/div[6]/div[2]/div/div[3]/div[2]/div/div",
      "//div[contains(text(),'Total number of boards of Directors is a required ')]",

        //validate error message for mandatory field
       "//div[contains(text(),'Please fill mandatory field!')]"
        ]

        
        
        //validate error message for Year
              // Use Promise.all to improve performance
        const results = await Promise.all(locators.map(async (locator) => {
          return {
              locator,
              isVisible: await this.page.locator(locator).isVisible()
          };
      }));

      // Log and validate each required field
      results.forEach(({ locator, isVisible }) => {
          if (isVisible) {
              console.log(`❗ Missing field detected: ${locator}`);
              expect(isVisible).toBeTruthy();
          }
      });

      return results.some(({ isVisible }) => isVisible); // Return true if any field is missing
  }


        
           
        
           //const{test , expect}= require('@playwright/test');
           //const{test , expect}= require('@playwright/test');
           
           //const exp = require('constants');
            async  fillmandatoryfields(page){

            const inputFields ={

                             "Year *":{locator:"//body/div/div/div/div/div/div/div/div/div/div/div/div/div[1]/div[2]/div[1]/select[1]", value:"2001"},
                             
                             "Total Spend *":{locator:"//input[@placeholder='Enter total spend (ex-00.00)']", value:"80000"},
                              "Total DBE *" :{locator:"//input[@placeholder='Enter total DBE (ex-00.00)']", value:"666666"},
                             "Total DBE % *":{locator:"//input[@placeholder='Enter total DBE % (ex-0.0%)']", value:"80"}, 
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
                              
                              "WMBE Spend":{locator:"//input[@placeholder='Spend for Women Minority Business Enterprises.']" , value:"3333333"},
                              "WMBE #":{locator:"//input[@placeholder='Number of spend for WMBEs.']" , value:"2000"},
                              "WMBE %":{locator:"//input[@placeholder='Percentage of spend for WMBEs.']" , value:"44"},
                              "Direct Spend (WMBE) *":{locator:"//input[@placeholder='Direct Spend for Minority Women Business Enterprises.']" , value:"444444"},
                              "Sub Spend (WMBE) *":{locator:"//input[@placeholder='Sub Spend for Minority Women Business Enterprises.']" , value:"22222"},
                              "WBE Spend":{locator:"//input[@placeholder='Spend for Women Business Enterprises.']" , value:"2222"},
                              "WBE #":{locator:"//input[@placeholder='Number of spend for WBEs.']" , value:"1111"},
                              "WBE %":{locator:"//input[@placeholder='Percentage of spend for WBEs.']" , value:"15"},
                              "WBE Direct Spend *":{locator:"//input[@placeholder='Direct Spend for Women Business Enterprises.']" , value:"7777777"},
                              "WBE Sub Spend *":{locator:"//input[@placeholder='Subcontracting Spend for Women Business Enterprises.']" , value:"555555"},
                              "PBDBE Spend":{locator:"//input[@placeholder='Spend for Person with Disabilities Business Enterprises.']" , value:"111111"},
                              "PBDBE #":{locator:"//input[@placeholder='Number of spend for PBDBEs.']" , value:"3333"},
                              "PBDBE %":{locator:"//input[@placeholder='Percentage of spend for PBDBEs.']" , value:"10"},
                              "PBDBE Direct Spend *":{locator:"//input[@placeholder='Direct Spend for Person with Disabilities Business Enterprises.']" , value:"1111111"},
                              "PBDBE Sub Spend *":{locator:"//input[@placeholder='Subcontracting Spend for Person with Disabilities Business Enterprises.']" , value:"22222"},
                              "LGBTBE Spend":{locator:"//input[@placeholder='Spend for LGBT Business Enterprises.']" , value:"22222"},
                              "LGBTBE #":{locator:"//input[@placeholder='Number of spend for LGBTBEs.']" , value:"2222"},
                              "LGBTBE %":{locator:"//input[@placeholder='Percentage of spend for LGBTBEs.']" , value:"11"},
                              "LGBTBE Direct Spend *":{locator:"//input[@placeholder='Direct Spend for LGBTBE']" , value:"8888888"},
                              "LGBTBE Sub Spend *":{locator:"//input[@placeholder='Sub Spend for LGBTBE']" , value:"33333"},
                              "DVBE Spend":{locator:"//input[@placeholder='Spend for Disabled Veteran Business Enterprises.']" , value:"99999"},
                              "DVBE #":{locator:"//input[@placeholder='Number of spend for DVBEs.']" , value:"1111"},
                              "DVBE %":{locator:"//input[@placeholder='Percentage of spend for DVBEs.']" , value:"11"},
                              "DVBE Direct Spend *":{locator:"//input[@placeholder='Direct Spend for Disabled Veteran Business Enterprises.']" , value:"22222"},
                              "DVBE Sub Spend *":{locator:"//input[@placeholder='Sub Spend for Disabled Veteran Business Enterprises.']" , value:"22222"},
                              "Other 8 (a) Spend":{locator:"//input[@placeholder='Spend for other 8(a) small businesses.']" , value:"44444"},
                              "Other 8 (a) %":{locator:"//input[@placeholder='Number of spend for other 8(a) small businesses.']" , value:"10"},
                              "Other 8 (a) #":{locator:"//input[@placeholder='Percentage of spend for other 8(a) small businesses.']" , value:"3333"},
                              "Other 8 (a) Direct Spend *":{locator:"//input[@placeholder='Direct Spend for other 8(a) small businesses.']" , value:"3333333"},
                              "Other 8 (a) Sub Spend *":{locator:"//input[@placeholder='Sub Spend for other 8(a) small businesses.']" , value:"3333"},
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
     "WORKFORCE AND BOARD DIVERSITY (# AND % OF PPL OF COLOR) *":{locator:"//input[@placeholder='Number and percentage of people of color in the workforce and for the board.']", value:"11111"},
     "Total Number Of Boards Of Directors *":{locator:"//input[@placeholder='Total number of boards of Directors.']", value:"1000"}
            }
          
            
          
          

     for (const [field, data] of Object.entries(inputFields )) {
      const inputElement = page.locator(data.locator);
      if (data.locator.includes("select")) { 
        // ✅ Use selectOption for dropdowns
        await inputElement.selectOption({ label: data.value });
    } else {
        // ✅ Use fill() for text inputs
        await inputElement.fill(data.value);
    }
  
    console.log(`✅ Entered '${data.value}' for: ${field}`);
}
            

 
        

  
            }
            
  
          }
        
         
         
            module.exports = Addgroup; 
          
        

    
  

        