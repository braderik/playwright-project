const { test, expect } = require('@playwright/test');

// Example 3: Form Filling and Submission
test('Form interaction example', async ({ page }) => {
  await page.goto('https://httpbin.org/forms/post');
  
  // Fill out form fields
  await page.fill('input[name="custname"]', 'John Doe');
  await page.fill('input[name="custtel"]', '555-1234');
  await page.fill('input[name="custemail"]', 'john@example.com');
  await page.selectOption('select[name="size"]', 'medium');
  
  // Submit form
  await page.click('input[type="submit"]');
  
  // Check submission was successful
  await expect(page).toHaveURL(/forms\/post/);
});

// Example 4: Waiting and Timeouts
test('Dynamic content example', async ({ page }) => {
  await page.goto('https://httpbin.org/delay/2');
  
  // Wait for specific text to appear
  await page.waitForSelector('pre', { timeout: 10000 });
  
  // Check the content loaded
  const content = await page.textContent('pre');
  expect(content).toContain('origin');
});
