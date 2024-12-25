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


// Define class for Add group
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
    }

            async navigate(url){
            await this.page.goto(url)
           }

           async fillEmail(email) {
            if (!email) throw new Error('Email is required');
            await this.page.fill(this.emailinputAddress, email);
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
          }

          async clickaddgroup(){
          await this.page.click(this.addgroupofcompany)
          }

          async clickcancelbutton(){
            await this.page.click(this.cancelclick, { timeout: 60000 });
          }

          async browseimageclick(){
            await this.page.click(this.browseimage);
          }

          async Entergroupname(){
            await this.page.click(this.groupname);
          }

          async validEmailaddress(){
            await this.page.click(this.emailaddress);
          }

          async invalidEmailaddress(){
            await this.page.click(this.emailaddress);
          }

          async clickupdatecreate(){
            await this.page.click(this.updatecreate);
          }
         
          async login  (email , password){

            await this.navigate(this.urlone);
            await this.fillEmail("testing@zis1bxhm.mailosaur.net");
            await this.fillPassword("Anshul@12345678");
            await this.clickloginbutton();
            
            
          }
         
        }
    
  


  


module.exports = Forgotpassword;
module.exports=Addgroup;
