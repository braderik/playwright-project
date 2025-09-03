# Playwright Code Generator Guide

## 🎯 What is `npx playwright codegen`?

The **code generator** is Playwright's most powerful feature! It:
- Opens a browser window
- Records your clicks, typing, and navigation
- Automatically writes Playwright code for you
- Shows the generated code in real-time

## 🚀 How to Use It

### Basic Usage
```bash
cd /Users/bradyswanson2/playwright-project
npx playwright codegen
```

### With a specific website
```bash
npx playwright codegen https://example.com
```

### Save code to a file
```bash
npx playwright codegen -o my-test.spec.js https://google.com
```

### Use different browsers
```bash
npx playwright codegen -b firefox https://example.com
npx playwright codegen -b webkit https://example.com
```

## 📱 Mobile Testing
```bash
npx playwright codegen --device="iPhone 12" https://example.com
```

## 💾 What Happens When You Run It?

1. **Two windows open:**
   - Browser window (where you interact)
   - Inspector window (shows generated code)

2. **You interact normally:**
   - Click buttons
   - Fill forms
   - Navigate pages

3. **Code appears automatically:**
   - Every action becomes Playwright code
   - Copy the code when done
   - Paste into your test files

## 🎬 Step-by-Step Demo

Let me show you exactly what to expect...

## 🎬 What Happens When You Run `npx playwright codegen`

### 🚀 Two Windows Open:

1. **Browser Window**: 
   - Opens a real browser (Chrome/Firefox/Safari)
   - Shows the website you specified
   - You can click, type, scroll normally

2. **Inspector Window**:
   - Shows generated Playwright code in real-time
   - Updates as you interact with the browser
   - Has record/pause/stop buttons

### 📱 Step-by-Step Demo:

**1. Start the generator:**
```bash
cd /Users/bradyswanson2/playwright-project
npx playwright codegen https://example.com
```

**2. What you'll see:**
- Browser opens to example.com
- Inspector window shows empty test template

**3. Interact normally:**
- Click the "More information..." link
- Type in any input fields
- Navigate to other pages

**4. Watch the magic:**
```javascript
// Code appears automatically like this:
const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {
  await page.goto('https://example.com/');
  await page.getByRole('link', { name: 'More information...' }).click();
  await expect(page).toHaveURL('https://www.iana.org/domains/special-use');
});
```

**5. Copy the code:**
- Click copy button in inspector
- Paste into your test files
- Run with `npm test`

### 💡 Pro Tips:

- **Save to file directly:** `npx playwright codegen -o mytest.spec.js https://example.com`
- **Use different browsers:** `npx playwright codegen -b firefox https://example.com`
- **Mobile testing:** `npx playwright codegen --device="iPhone 12" https://example.com`

The code generator is watching! It's currently running in the background (I can see the browser process). Try opening a new terminal and running the command to see it in action.
