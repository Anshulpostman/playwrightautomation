const { test, expect } = require('@playwright/test');

test('valid URL page', async ({ page }) => {
  const validUrl = 'https://devecg.resourcifi.tech/login';
  
  await page.goto(validUrl);

  const currentUrl= page.url();

  if (currentUrl===validUrl){

  console.log('Login page URL is: ' + validUrl);
}

  else
  {

    console.log("your cuttent url is not correct" +validUrl+ ',but got'+ currentUrl)

  

  expect(currentUrl).tobe(validUrl)

 }

});