# How to Use Playwright - Complete Guide

## What is Playwright?
Playwright is a tool for automating web browsers. You can:
- Test websites automatically
- Scrape web data
- Take screenshots
- Generate PDFs
- Automate repetitive web tasks

## Basic Concepts

### 1. Browser, Page, and Elements
- **Browser**: Chrome, Firefox, or Safari
- **Page**: A web page/tab
- **Elements**: Buttons, text, forms on the page

### 2. Common Actions
- `goto()` - Navigate to a URL
- `click()` - Click elements
- `fill()` - Type into forms
- `screenshot()` - Take pictures
- `waitFor()` - Wait for elements

## Getting Started

### Run Tests
```bash
cd /Users/bradyswanson2/playwright-project

# Run all tests (headless)
npm test

# Run with browser visible
npm run test:headed

# Interactive UI mode
npm run test:ui
```

## Basic Test Structure

```javascript
const { test, expect } = require('@playwright/test');

test('test name', async ({ page }) => {
  // 1. Go to a website
  await page.goto('https://example.com');
  
  // 2. Interact with elements
  await page.click('button');
  await page.fill('input[name="email"]', 'test@example.com');
  
  // 3. Check results
  await expect(page).toHaveTitle('Expected Title');
});
```

## Practical Examples

Let me create some real examples you can try...

## Common Selectors (How to Find Elements)

```javascript
// By text
page.getByText('Click me')
page.getByRole('button', { name: 'Submit' })

// By HTML attributes
page.locator('#my-id')           // ID
page.locator('.my-class')        // Class
page.locator('button')           // Tag
page.locator('[data-test="btn"]') // Attribute

// By placeholder/label
page.getByPlaceholder('Enter email')
page.getByLabel('Password')

// Combined selectors
page.locator('form >> button')   // Button inside form
page.locator('text=Login').first() // First match
```

## Common Actions

```javascript
// Navigation
await page.goto('https://example.com')
await page.goBack()
await page.reload()

// Clicking
await page.click('button')
await page.dblclick('.item')

// Typing
await page.fill('input', 'text')
await page.type('textarea', 'slow typing', { delay: 100 })

// Selecting
await page.selectOption('select', 'option-value')
await page.check('input[type="checkbox"]')

// Waiting
await page.waitForSelector('.loading')
await page.waitForTimeout(2000) // Wait 2 seconds
await page.waitForURL('**/success')
```

## Assertions (Checking Results)

```javascript
// Page checks
await expect(page).toHaveTitle('My Page')
await expect(page).toHaveURL('https://example.com/success')

// Element checks
await expect(page.locator('h1')).toBeVisible()
await expect(page.locator('input')).toHaveValue('expected')
await expect(page.locator('.error')).toContainText('Error message')

// Count checks
await expect(page.locator('.item')).toHaveCount(5)
```

## Screenshots and PDFs

```javascript
// Full page screenshot
await page.screenshot({ path: 'fullpage.png', fullPage: true })

// Element screenshot
await page.locator('.chart').screenshot({ path: 'chart.png' })

// PDF generation
await page.pdf({ path: 'page.pdf', format: 'A4' })
```

## Try These Commands

```bash
# Run specific test file
npx playwright test practical-examples.spec.js

# Run with browser visible
npx playwright test --headed

# Run specific test by name
npx playwright test --grep "Google search"

# Generate HTML report
npx playwright test && npx playwright show-report
```

## Debugging Tips

1. **Use --headed** to see what's happening
2. **Add console.log()** to debug
3. **Use page.pause()** to stop and inspect
4. **Check screenshots** when tests fail
5. **Use --debug** for step-by-step debugging

## Next Steps

1. Run the example tests I created
2. Modify them for your own websites
3. Check the official docs: https://playwright.dev/docs/
4. Use the test generator: `npx playwright codegen`
