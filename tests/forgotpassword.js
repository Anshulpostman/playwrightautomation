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
module.exports = Forgotpassword;
