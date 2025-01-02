class Forgotpassword{

    constructor(page){

    this.page=page;

    this.Resetpassword="//a[normalize-space()='Reset Password']";
    this.reseturl="https://devecg.resourcifi.tech/reset-password";
    this.emailinput="//input[contains(@placeholder,'Email Address')]";
    this.sendemailbutton="//span[normalize-space()='Send Email']";
    this.successmessage="//body/div/div[1]";
    
   // Example of an invalid email format
   
  }
 
 
       async navigate(url){
       await this.page.goto(url)
   
   }

   async enteremail(email) {
    if (!email) {
        throw new Error('Email is undefined or incorrect');
    }
    await this.page.fill(this.emailinput, email);
}
  
      async clicksendemailkbutton() {
      await this.page.click(this.sendemailbutton);
     
  }

        async getsuccessmessage(){
        return await this.page.textContent(this.successmessage);
  }

         async getvalidemail(){
         await this.page(this.validEmail)
      
  }
}


// Define class for Add 

  class Addgroup{

    constructor(page){


        this.page=page;// initalize the page object;

        this.urlone='https://devecg.resourcifi.tech/login';
        this.emailinputAddress="//input[contains(@placeholder,'Email Address')]";
        this.passwordinput="//input[@type='password']";
        this.loginbutton="//button[@type='button']";

        this.groupmanagement="//div[contains(text(),'Group Management')]";
        this.addgroupofcompany="//div[contains(text(),'Add Group')]";
        this.cancelclick="//body/div/div/div/div/div/div/div/div[2]/div[1]";
        this.browseimage="//body/div/div/div/div/div/div/div/div[1]/div[2]/div[1]";
        this.groupname="//input[@placeholder='Enter group name']";
        this.emailaddress="//input[@placeholder='Enter your email address (Press Enter to add additional email addresses)']";
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

             async navigate(url){
             await this.page.goto(url)
            }

            async dashboardnavigate(addnavigateurl){
              await this.page.goto(addnavigateurl)
             }
             async grp13dashboardurl(addcompnavigateurlgrp13){
              await this.page.goto(addcompnavigateurlgrp13)
             }

           async fillEmail(email) {
            if (!email) throw new Error('Email is required');
            await this.page.fill(this.emailinputAddress, email);
            await this.page.waitForTimeout(1000);
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
            await this.page.waitForTimeout(200);
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
        
          
        
    
  


  


module.exports = Forgotpassword;
module.exports=Addgroup;

