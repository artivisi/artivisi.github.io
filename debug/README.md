# Debug Tools

This directory contains Playwright-based debugging and testing scripts for the ArtiVisi website.

## Directory Structure

```
debug/
├── production/         # Production site validation
├── components/         # Component-specific testing
├── css/               # CSS/styling debugging
├── screenshots/       # Screenshot utilities
├── archive/           # Deprecated/old scripts
├── package.json       # Playwright dependencies
└── README.md          # This file
```

## Prerequisites

Install Playwright in the debug directory:

```bash
cd debug
npm install
npx playwright install chromium
```

## Available Scripts

### Production Testing

**`production/check-production.js`**
- Validates production site at https://artivisi.com/products/
- Checks all product card images for broken links
- Reports image loading status and dimensions

**Usage:**
```bash
node debug/production/check-production.js
```

**Output:**
```
Product 1: Spring Boot Enterprise
  Image src: /img/products/spring-boot/thumbnail.png
  Loaded: true, Size: 800x600
  Status: ✅ OK
```

---

### Component Testing

**`components/verify-dropdown.js`**
- Tests dropdown menu behavior on desktop
- Verifies hidden/visible states on hover
- Captures screenshot for visual verification

**Usage:**
```bash
# Start Hugo server first
hugo server --noHTTPCache

# Run test
node debug/components/verify-dropdown.js
```

**Output:**
```
1. Checking default state...
   Dropdown hidden by default: ✓ YES

2. Hovering over Training...
   Dropdown visible on hover: ✓ YES

3. Dropdown items:
   1. Katalog Program
   2. Portfolio Pelatihan

✓ Screenshot saved to /tmp/dropdown-verify.png
```

---

**`components/test-dropdown-menu.js`**
- Comprehensive dropdown menu testing
- Tests both desktop and mobile behaviors
- Checks dropdown positioning and z-index

**Usage:**
```bash
hugo server --noHTTPCache
node debug/components/test-dropdown-menu.js
```

---

**`components/inspect-navbar.js`**
- Inspects navbar DOM structure
- Logs dropdown toggle buttons and content
- Useful for debugging menu configuration

**Usage:**
```bash
hugo server --noHTTPCache
node debug/components/inspect-navbar.js
```

---

**`components/inspect-hero.js`**
- Checks hero section spacing and layout
- Validates padding, margins, and computed styles
- Measures distance from navbar

**Usage:**
```bash
hugo server --noHTTPCache
node debug/components/inspect-hero.js
```

**Output:**
```json
{
  "heroSection": {
    "paddingTop": "112px",
    "paddingBottom": "64px",
    "classes": "pt-28 pb-16 ..."
  },
  "trustedLabel": {
    "text": "Trusted Since 2008",
    "marginBottom": "16px",
    "offsetTop": 120
  }
}
```

---

**`components/inspect-product-button.js`**
- Inspects product button styles
- Checks hover states and transitions
- Validates Tailwind class application

**Usage:**
```bash
hugo server --noHTTPCache
node debug/components/inspect-product-button.js
```

---

**`components/inspect-wave.js`**
- Inspects wave SVG element in hero section
- Checks positioning and dimensions
- Validates SVG rendering

**Usage:**
```bash
hugo server --noHTTPCache
node debug/components/inspect-wave.js
```

---

### CSS Debugging

**`css/debug-css.js`**
- Comprehensive CSS debugging tool
- Inspects computed styles for body, navbar, main elements
- Checks if Tailwind classes are properly applied
- Validates class existence in stylesheets

**Usage:**
```bash
hugo server --noHTTPCache --port 1314
node debug/css/debug-css.js
```

**Output:**
```json
{
  "BODY styles": {
    "paddingTop": "0px",
    "minHeight": "100vh",
    "display": "flex",
    "flexDirection": "column"
  },
  "NAVBAR computed styles": {
    "position": "fixed",
    "top": "0px",
    "zIndex": "20",
    "height": "96px"
  },
  "pt-28 class": {
    "found": true,
    "css": ".pt-28 { padding-top: 7rem; }"
  }
}
```

---

### Screenshots

**`screenshots/screenshot-navbar.js`**
- Captures navbar screenshot
- Useful for visual regression testing
- Saves to `/tmp/navbar-screenshot.png`

**Usage:**
```bash
hugo server --noHTTPCache
node debug/screenshots/screenshot-navbar.js
```

---

**`screenshots/screenshot-external-app.js`**
- Generic screenshot tool for external web applications
- Supports authentication (login with username/password)
- Multi-page capture with configurable URLs
- Saves to `static/img/products/{product-name}/`

**Configuration presets:**
- `atm-solution` - ATM simulator interface
- `hsm-simulator` - HSM web interface (4 pages: keys list, hierarchy, PIN visualization, key ceremony)

**Usage:**
```bash
# Capture ATM simulator screenshots
node debug/screenshots/screenshot-external-app.js atm-solution

# Capture HSM simulator screenshots (requires login)
node debug/screenshots/screenshot-external-app.js hsm-simulator
```

**Adding new configuration:**
```javascript
const CONFIGS = {
  'my-app': {
    baseUrl: 'http://localhost:3000',
    outputDir: path.join(__dirname, '../../static/img/products/my-app'),
    screenshots: [
      {
        url: '/dashboard',
        filename: '01-dashboard.png',
        description: 'Dashboard View',
        fullPage: true
      }
    ],
    auth: {
      loginUrl: '/login',
      username: 'admin',
      password: 'password',
      usernameSelector: 'input[name="username"]',
      passwordSelector: 'input[name="password"]',
      submitSelector: 'button[type="submit"]'
    },
    viewport: { width: 1920, height: 1080 }
  }
};
```

---

## Archive

The `archive/` directory contains deprecated scripts that are no longer actively used but kept for reference:

- `debug-mobile-dropdown.js` - Old mobile dropdown testing script
- `final-test.js` - Deprecated comprehensive test suite

These scripts may not work with the current codebase and are kept only for historical reference.

---

## Common Workflows

### Debugging Dropdown Menu Issue

1. Start Hugo server:
   ```bash
   hugo server --noHTTPCache
   ```

2. Inspect dropdown structure:
   ```bash
   node debug/components/inspect-navbar.js
   ```

3. Test dropdown behavior:
   ```bash
   node debug/components/verify-dropdown.js
   ```

4. Check screenshot in `/tmp/dropdown-verify.png`

---

### Validating Production Deployment

1. Run production check:
   ```bash
   node debug/production/check-production.js
   ```

2. Fix any broken image links reported

3. Re-run until all checks pass

---

### Debugging CSS Issues

1. Start Hugo server (specific port to match script):
   ```bash
   hugo server --noHTTPCache --port 1314
   ```

2. Run CSS debugger:
   ```bash
   node debug/css/debug-css.js
   ```

3. Check if Tailwind classes are applied correctly

4. Rebuild CSS if needed:
   ```bash
   npm run build:css
   ```

---

## Adding New Debug Scripts

When creating new debug scripts:

1. **Choose appropriate category:**
   - `production/` - Tests against live site
   - `components/` - Tests specific UI components
   - `css/` - CSS and styling debugging
   - `screenshots/` - Visual capture tools

2. **Use consistent structure:**
   ```javascript
   const { chromium } = require('playwright');

   (async () => {
     const browser = await chromium.launch();
     const page = await browser.newPage();

     // Your test code here
     await page.goto('http://localhost:1313/');

     // Log results
     console.log('Test results...');

     await browser.close();
   })();
   ```

3. **Document in this README:**
   - Script purpose
   - Usage instructions
   - Expected output

4. **Use descriptive names:**
   - ✅ `inspect-carousel-navigation.js`
   - ✅ `test-mobile-menu-toggle.js`
   - ❌ `test1.js`
   - ❌ `debug.js`

---

## Troubleshooting

### "Error: Browser was not installed"

Install Playwright browsers:
```bash
cd debug
npx playwright install chromium
```

### "net::ERR_CONNECTION_REFUSED"

Start Hugo server first:
```bash
hugo server --noHTTPCache
```

### "Timeout exceeded" errors

Increase timeout in script or check if Hugo server is running:
```javascript
await page.goto('http://localhost:1313/', { timeout: 60000 });
```

---

## References

- [Playwright Documentation](https://playwright.dev/)
- [Hugo Local Server](https://gohugo.io/commands/hugo_server/)
- [ArtiVisi Development Guide](../README.md)
