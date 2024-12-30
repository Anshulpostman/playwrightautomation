

async function Addcompany(page ,email , dropdownSelector ,text , integer ){

    const compaddress="//input[@placeholder='Enter address']";
    const compemailaddresserror="//div[contains(text(),'Address is required')]";
    const companyzipcode="//input[@placeholder='Enter Zip code']";
    const compziperror="//div[contains(text(),'Zip code should have only 5 digits')]";
    const compcity="//input[@placeholder='Enter city name']";
    const compcityerror="//div[contains(text(),'City is required')]";
    const compstate="//input[@placeholder='Enter state']";
    const compstateerror="//div[contains(text(),'State is required')]"
    const

    await page.fill(compemailaddress , Address);
    
}