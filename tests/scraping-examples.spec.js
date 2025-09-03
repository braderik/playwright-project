const { test } = require('@playwright/test');

// Example 5: Web Scraping
test('Scrape news headlines', async ({ page }) => {
  await page.goto('https://news.ycombinator.com');
  
  // Get all story titles
  const headlines = await page.locator('.storylink').allTextContents();
  
  console.log('Top 5 Hacker News Headlines:');
  headlines.slice(0, 5).forEach((headline, index) => {
    console.log(`${index + 1}. ${headline}`);
  });
  
  // Save to file
  const fs = require('fs');
  fs.writeFileSync('headlines.txt', headlines.join('\n'));
});

// Example 6: Mobile Testing
test('Mobile view test', async ({ browser }) => {
  // Create mobile context
  const context = await browser.newContext({
    viewport: { width: 375, height: 667 }, // iPhone SE size
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X)'
  });
  
  const page = await context.newPage();
  await page.goto('https://playwright.dev');
  
  // Take mobile screenshot
  await page.screenshot({ path: 'mobile-view.png' });
  
  await context.close();
});
