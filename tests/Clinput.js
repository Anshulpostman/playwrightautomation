//const Addcom = require("./Addcom");
const Addgroup = require("./forgotpassword");
class Addinput extends Addgroup{

    constructor(page){
        super(page);
       

    this.inputdatamanagment="(//div[contains(text(),'Input Data Management')])[1]";
    this.Addinputfield="//div[contains(text(),'Add Input Fields')]";
    this.Addtextfield="//div[normalize-space()='Add Input Field']";


   }
   async clickinputdatamangement(){
    await this.page.click(this.inputdatamanagment);
   }

   async clickAddinputfield(){
    await this.page.click(this.Addinputfield);
 }
   async clickAddtextfield(){
  return await this.page.textContent(this.Addtextfield)

   }
     
  }

  module.exports =  Addinput ;
 
  
  
