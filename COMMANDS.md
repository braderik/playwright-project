# Quick Command Reference

## Fixed Issues ✅

### 1. Pip Command
- **Problem**: `zsh: command not found: pip`
- **Solution**: Use `python3 -m pip` instead of `pip`
- **Examples**:
  ```bash
  python3 -m pip install package-name
  python3 -m pip --version
  python3 -m pip list
  ```

### 2. Directory Navigation
- **Problem**: `/Users/bradyswanson2/playwright-project && npm test`
- **Solution**: Use `cd` to change directories first
- **Correct command**:
  ```bash
  cd /Users/bradyswanson2/playwright-project && npm test
  ```

## Working Commands

### Playwright Tests
```bash
# Navigate to project and run tests
cd /Users/bradyswanson2/playwright-project && npm test

# Run with browser UI visible
cd /Users/bradyswanson2/playwright-project && npm run test:headed

# Open interactive test UI
cd /Users/bradyswanson2/playwright-project && npm run test:ui

# View test report
cd /Users/bradyswanson2/playwright-project && npm run report
```

### Python/Pip Commands
```bash
# Check Python version
python3 --version

# Check pip version
python3 -m pip --version

# Install a package
python3 -m pip install package-name

# List installed packages
python3 -m pip list
```

## Alias Setup
I added this alias to your ~/.zshrc file:
```bash
alias pip="python3 -m pip"
```

To use it in new terminal sessions, either:
1. Open a new terminal window/tab, OR
2. Run: `source ~/.zshrc`
