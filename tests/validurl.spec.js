const { test, expect } = require('@playwright/test');

test('valid URL page', async ({ page }) => {
  const validUrl = 'https://devecg.resourcifi.tech/login';
  
  await page.goto(validUrl);

  const currentUrl = page.url();
  expect(currentUrl).toBe(validUrl);

  console.log('Login page URL is: ' + validUrl);
});