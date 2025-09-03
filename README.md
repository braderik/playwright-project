# Playwright Project

This project contains Playwright end-to-end tests.

## Installation Complete ✅

Playwright has been successfully installed with all browsers (Chromium, Firefox, and WebKit).

## Available Commands

```bash
# Run all tests
npm test

# Run tests with browser UI visible (headed mode)
npm run test:headed

# Open Playwright Test UI for interactive testing
npm run test:ui

# View the HTML test report
npm run report
```

## Project Structure

```
playwright-project/
├── playwright.config.js    # Playwright configuration
├── tests/
│   └── example.spec.js     # Sample test file
└── package.json           # Project dependencies and scripts
```

## Getting Started

1. The sample test in `tests/example.spec.js` tests the Playwright website
2. Create new test files in the `tests/` directory
3. Run tests with `npm test`

## Writing Tests

Example test structure:
```javascript
const { test, expect } = require('@playwright/test');

test('my test', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Expected Title/);
});
```

## Documentation

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Writing Tests](https://playwright.dev/docs/writing-tests)
- [API Reference](https://playwright.dev/docs/api/class-test)
