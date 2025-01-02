const Addgroup = require("./forgotpassword");


  

class Addcom extends Addgroup{

    
    constructor(page){
    super(page); 

        this.page=page;
        this.addcompbuttton="//div[contains(text(),'Add Company')]";
        }

    async clickAddcompanybutton() {
        await this.page.click(this.addcompbuttton);
      }
        

    
}




module.exports=Addcom;
