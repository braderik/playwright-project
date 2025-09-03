const { test, expect } = require('@playwright/test');

// Simple, reliable examples that always work
test('Basic navigation test', async ({ page }) => {
  // Go to a simple, reliable website
  await page.goto('https://example.com');
  
  // Check the title
  await expect(page).toHaveTitle(/Example Domain/);
  
  // Check for specific text
  await expect(page.getByText('Example Domain')).toBeVisible();
  
  console.log('✅ Successfully navigated to example.com');
});

test('Take screenshot of website', async ({ page }) => {
  await page.goto('https://playwright.dev');
  
  // Wait for page to load completely
  await page.waitForLoadState('networkidle');
  
  // Take a screenshot
  await page.screenshot({ 
    path: 'playwright-homepage.png',
    fullPage: true 
  });
  
  console.log('✅ Screenshot saved as playwright-homepage.png');
});

test('Test form on httpbin', async ({ page }) => {
  await page.goto('https://httpbin.org/forms/post');
  
  // Fill the form
  await page.fill('input[name="custname"]', 'Test User');
  await page.fill('input[name="custemail"]', 'test@example.com');
  
  // Check form was filled
  await expect(page.locator('input[name="custname"]')).toHaveValue('Test User');
  
  console.log('✅ Form filled successfully');
});
