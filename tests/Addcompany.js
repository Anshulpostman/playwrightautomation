const Addgroup = require("./Addgroup"); 
const{test , expect}= require('@playwright/test')


  

class Addcompany extends Addgroup{    
    constructor(page){
    super(page); 

        this.page=page;
        this.addcompbuttton="//div[contains(text(),'Add Company')]";
        }

    async clickAddcompanybutton() {
        await this.page.click(this.addcompbuttton);
      }
        

    
}

     async  function cancelcross(page){


    const cancelclickbutton=await page.locator("(//div[contains(text(),'Cancel')])[2]");
          const  crossclickbutton=await page.locator("#root > div.protectedContainer > div.main-content > div.content > div > div > div > div:nth-child(2) > div > div.headerAddCont > div.closeDiv > svg > path");
          if (await cancelclickbutton.isVisible()){
             await cancelclickbutton.click();
             await page.waitForTimeout(1000);
          }
          
            else if(crossclickbutton.isVisible()){
              await crossclickbutton.click();
              await page.waitForTimeout(1000);
      
            }
      
              else{
               throw new Error("both button is not working")
      
          }
      
          const Addinputsectionlocator=await page.locator("#root > div.protectedContainer > div.main-content > div.content > div > div > div > div:nth-child(2) > div > div.headerAddCont > div.titDesCont > div.title");
          const Addinputsectionhide=await Addinputsectionlocator.isHidden();
          await page.waitForTimeout(1000);
          if(Addinputsectionhide){
            console.log("cancel and cross button is working")
            expect(Addinputsectionhide).toBeTruthy();
          }
      
          else{
            console.log("cancel and cross button is not working with test caps test")
            expect(Addinputsectionhide).toBeTruthy();
          }
}







module.exports = { Addgroup,Addcompany, cancelcross  };





