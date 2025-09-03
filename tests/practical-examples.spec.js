const { test, expect } = require('@playwright/test');

// Example 1: Basic Google Search
test('Google search test', async ({ page }) => {
  // Go to Google
  await page.goto('https://google.com');
  
  // Find search box and type
  await page.fill('textarea[name="q"]', 'Playwright testing');
  
  // Press Enter or click search
  await page.keyboard.press('Enter');
  
  // Wait for results and check
  await page.waitForSelector('h3');
  await expect(page).toHaveURL(/search/);
});

// Example 2: Taking Screenshots
test('Screenshot example', async ({ page }) => {
  await page.goto('https://playwright.dev');
  
  // Take full page screenshot
  await page.screenshot({ 
    path: 'playwright-homepage.png',
    fullPage: true 
  });
  
  // Take screenshot of specific element
  const logo = page.locator('.navbar__logo');
  await logo.screenshot({ path: 'logo.png' });
});
