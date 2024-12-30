const Addcom=require('./Addcom')
const{test , expect}= require('@playwright/test')

test("click on Add company button" , async ({page})=>{
    const newaddcomp=new Addcom(page);
    await newaddcomp.login();
    await newaddcomp.clickgroupmanagement();
    const grp13=await page.locator("//p[normalize-space()='grp13']").click();
    //const Addcomp=page.locator("//div[contains(text(),'Add Company')]");
    await newaddcomp.clickAddcompanybutton();
    console.log("user able to click on Add company")

    });

    //To be verify all vaidation message if any of the fields is not entered.

    test("Verify all validation message" , async  ({page})=>{

        const addcom= new Addcom(page);
        



    })
