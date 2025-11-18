# ArtiVisi Corporate Website

Corporate website for ArtiVisi Intermedia built with Hugo and Tailwind CSS v4.

## Tech Stack

- **Hugo**: v0.152.2 - Static site generator
- **Tailwind CSS**: v4.1.17 - Utility-first CSS framework
- **Node.js**: Required for Tailwind CSS build process

## Prerequisites

- Hugo v0.152.2 or later
- Node.js and npm
- Git

## Installation

1. Clone the repository:
```bash
git clone git@github.com:artivisi/artivisi.github.io.git
cd artivisi.github.io
```

2. Install dependencies:
```bash
npm install
```

## Development

### Start Development Server

Run Hugo server with live reload:
```bash
hugo server
```

The site will be available at `http://localhost:1313`

### Build CSS While Developing

If you're modifying Tailwind classes, run CSS watcher in a separate terminal:
```bash
npm run dev:css
```

This watches for changes and rebuilds CSS automatically.

## Content Management

### Directory Structure

```
content/
├── products/       # Product pages
├── projects/       # Project case studies
├── training/       # Training sessions
├── about_us/       # About us pages
└── career/         # Career opportunities

static/
├── css/            # Compiled CSS (main.css ignored in git)
├── js/             # JavaScript (jQuery, Swiper, Magnify, main.js)
├── img/            # Images organized by section
│   ├── products/{product-name}/    # Product images
│   ├── projects/{project-name}/    # Project images
│   └── training/{training-name}/   # Training images
└── fonts/          # Geist and GeistMono fonts

diagrams/
├── render-thumbnails.js            # Generic thumbnail generator
├── product-thumbnails/             # Product diagram sources
├── project-thumbnails/             # Project diagram sources
└── training-thumbnails/            # Training diagram sources

debug/
├── screenshots/                    # Screenshot utilities
│   ├── screenshot-navbar.js        # Navbar screenshot tool
│   └── screenshot-external-app.js  # External app screenshot tool
├── components/                     # Component testing scripts
├── css/                           # CSS debugging tools
├── production/                    # Production validation
└── archive/                       # Deprecated scripts
```

### Adding New Content

#### Add a Product

1. Create a new markdown file in `content/products/`:
```bash
touch content/products/my-product.md
```

2. Add frontmatter and content:
```markdown
---
title: "My Product Name"
description: "Brief product description"
icon: "/img/products/my-product/thumbnail.png"
weight: 5
---

## Product Description

Detailed product information here...

## Key Features

- Feature 1
- Feature 2

## Screenshots

![Screenshot 1](/img/products/my-product/01-screenshot.png)
```

3. Add product images:
```bash
mkdir -p static/img/products/my-product
cp my-thumbnail.png static/img/products/my-product/thumbnail.png
```

**IMPORTANT**: Image filenames must be lowercase to ensure compatibility with Linux production servers. macOS is case-insensitive, but Linux is case-sensitive.

#### Add a Project

1. Create markdown file in `content/projects/`:
```markdown
---
title: "Project Name"
description: "Project description"
client: "Client Name"
date: 2025-01-15
image: "/img/projects/project-name/thumbnail.png"
---

Project details...
```

#### Add Training Content

1. Create markdown file in `content/training/`:
```markdown
---
title: "Training Name"
date: 2025-01-15
client: "Client Name"
description: "Training description"
image: "/img/training/training-name/thumbnail.png"
---

Training content...
```

### Editing Existing Content

1. Navigate to the content file (e.g., `content/products/remittance.md`)
2. Edit the markdown file
3. Save changes
4. Hugo will automatically reload if dev server is running

### Content Organization

- **Weight**: Controls ordering in list pages (lower = appears first)
- **Date**: Used for sorting training and projects by date
- **Images**: Store in `static/img/{section}/{item-name}/`

## Building for Production

### Build CSS and Site

```bash
npm run build
```

This runs:
1. `npm run build:css` - Compiles and minifies Tailwind CSS
2. `hugo --gc --minify` - Builds optimized static site

Output is in `public/` directory.

### Manual CSS Build

If you only need to rebuild CSS:
```bash
npm run build:css
```

**Note**: `static/css/main.css` is ignored in git because GitHub Actions builds it automatically during deployment.

## Testing

### Test Locally

1. Build the site:
```bash
npm run build
```

2. Serve the built site:
```bash
hugo server --source=public --bind 0.0.0.0 --port 1313
```

Or use Hugo's built-in server:
```bash
hugo server
```

### Test Production Build

To test exactly what will be deployed:
```bash
npm run build
cd public
python3 -m http.server 8000
```

Visit `http://localhost:8000`

### Debug and Testing Tools

The `debug/` folder contains Playwright-based testing and debugging utilities.

**Production Validation:**
```bash
cd debug
node production/check-production.js
```
Checks production site for broken images and rendering issues.

**Component Testing:**
```bash
# Test dropdown menu behavior
node debug/components/verify-dropdown.js

# Inspect navbar structure
node debug/components/inspect-navbar.js
```

**CSS Debugging:**
```bash
# Debug Tailwind CSS application
hugo server --noHTTPCache --port 1314
node debug/css/debug-css.js
```

**Screenshot Tools:**
```bash
# Screenshot local Hugo site
node debug/screenshots/screenshot-navbar.js

# Screenshot external applications
node debug/screenshots/screenshot-external-app.js atm-solution
node debug/screenshots/screenshot-external-app.js hsm-simulator
```

See `debug/README.md` for complete documentation.

## Deployment

### Automatic Deployment

The site automatically deploys via GitHub Actions when you push to `main`:

1. Commit your changes:
```bash
git add .
git commit -m "Your commit message"
```

2. Push to GitHub:
```bash
git push origin main
```

3. GitHub Actions will:
   - Install dependencies
   - Build CSS with Tailwind
   - Build Hugo site
   - Deploy to GitHub Pages

### GitHub Actions Workflow

See `.github/workflows/hugo.yaml` for the deployment configuration.

The workflow runs on every push to `main` and:
- Installs Node.js dependencies
- Builds Tailwind CSS
- Builds Hugo site with `--gc --minify`
- Deploys to `gh-pages` branch

## Project Configuration

### Hugo Configuration

Main config: `hugo.toml`

Key settings:
- `baseURL`: Production URL
- `pagination.pagerSize`: Items per page (9)
- `enableRobotsTXT`: SEO configuration

### Tailwind Configuration

Tailwind v4 uses CSS-based configuration in `assets/css/tailwind.css`:
- Custom theme configuration
- Dark mode settings
- Responsive breakpoints

## Troubleshooting

### CSS Not Updating

1. Rebuild CSS:
```bash
npm run build:css
```

2. Clear Hugo cache:
```bash
rm -rf resources/
hugo server --noHTTPCache
```

### Images Not Showing in Production

Check filename case sensitivity:
- ✅ `thumbnail.png` (lowercase)
- ❌ `Thumbnail.png` (uppercase)

Linux production servers are case-sensitive, unlike macOS.

### Broken Thumbnails

Use the Playwright debug script:
```bash
cd debug
node check-production.js
```

This will check all product images on the live site.

## Diagram Generation

The `diagrams/` folder contains Mermaid diagram sources and a generic thumbnail generator.

### Generate Thumbnails

**Prerequisites:**
```bash
npm install -g @mermaid-js/mermaid-cli
```

**Generate thumbnails for specific content type:**
```bash
# Products only
node diagrams/render-thumbnails.js products

# Projects only
node diagrams/render-thumbnails.js projects

# Training only
node diagrams/render-thumbnails.js training

# All content types
node diagrams/render-thumbnails.js all
```

### Create New Diagram

1. **Create Mermaid file:**
```bash
# For products
cat > diagrams/product-thumbnails/my-product.mmd <<'EOF'
graph TB
    A[Frontend] --> B[Backend]
    B --> C[Database]
EOF
```

2. **Generate thumbnail:**
```bash
node diagrams/render-thumbnails.js products
```

3. **Reference in content:**
```yaml
---
title: "My Product"
icon: "/img/products/my-product/thumbnail.png"
---
```

**Features:**
- Auto-detection of `.mmd` files
- 3x device scale for HiDPI displays
- Transparent background
- Outputs to `static/img/{type}/{name}/thumbnail.png`

See `diagrams/README.md` for complete documentation and diagram styling guide.

## Screenshot External Applications

The `debug/screenshots/screenshot-external-app.js` tool captures screenshots from external web applications for product documentation.

### Prerequisites

```bash
cd debug
npm install
npx playwright install chromium
```

### Capture Screenshots

**Using existing presets:**
```bash
# ATM simulator (requires app running on localhost:7070)
node debug/screenshots/screenshot-external-app.js atm-solution

# HSM simulator (requires app running on localhost:8080)
node debug/screenshots/screenshot-external-app.js hsm-simulator
```

### Add New Application Configuration

Edit `debug/screenshots/screenshot-external-app.js` and add to `CONFIGS`:

```javascript
'my-app': {
  baseUrl: 'http://localhost:3000',
  outputDir: path.join(__dirname, '../../static/img/products/my-app'),
  screenshots: [
    {
      url: '/dashboard',
      filename: '01-dashboard.png',
      description: 'Dashboard Overview',
      fullPage: true
    },
    {
      url: '/settings',
      filename: '02-settings.png',
      description: 'Settings Page',
      fullPage: false
    }
  ],
  auth: {  // Optional authentication
    loginUrl: '/login',
    username: 'admin',
    password: 'password',
    usernameSelector: 'input[name="username"]',
    passwordSelector: 'input[name="password"]',
    submitSelector: 'button[type="submit"]'
  },
  viewport: { width: 1920, height: 1080 }
}
```

**Features:**
- Authentication support (username/password)
- Multi-page capture
- Full-page or viewport screenshots
- Configurable viewport sizes
- Auto-creates output directories

See `debug/README.md` for complete documentation.

## Common Tasks

### Update Dependencies

```bash
npm update
```

### Check for Vulnerabilities

```bash
npm audit
```

### Add New Section Type

1. Create content directory: `content/new-section/`
2. Create section index: `content/new-section/_index.md`
3. Create layout: `layouts/new-section/list.html`
4. Add navigation link in `layouts/partials/navbar.html`

## File Naming Conventions

- Content files: `kebab-case.md`
- Image files: `lowercase-only.png` (critical for Linux compatibility)
- Directories: `lowercase_with_underscores` or `kebab-case`

## Documentation

For detailed documentation on specific components:

- **Debug Tools**: See `debug/README.md` for complete Playwright testing and debugging documentation
- **Diagram Generation**: See `diagrams/README.md` for Mermaid diagram creation and thumbnail generation
- **Project Guidelines**: See `CLAUDE.md` for development guidelines and architecture details

## License

ISC

## Support

For issues or questions, contact the development team.
