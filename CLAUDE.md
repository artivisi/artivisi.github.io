# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Hugo static site for ArtiVisi Intermedia corporate website built with Tailwind CSS v4. Content is in Indonesian (`languageCode: 'id'`). Site deploys to GitHub Pages via GitHub Actions on push to `main`.

## Development Commands

### Start Development
```bash
hugo server
```
Site runs at `http://localhost:1313` with live reload.

### CSS Development
```bash
npm run dev:css
```
Watch mode for Tailwind CSS changes. Run in separate terminal alongside Hugo server.

### Build for Production
```bash
npm run build
```
Builds CSS with Tailwind then runs `hugo --gc --minify`. Output in `public/` directory.

### CSS Build Only
```bash
npm run build:css
```
Compiles and minifies Tailwind CSS to `static/css/main.css` (ignored in git).

### Generate Diagram Thumbnails
```bash
# Generate for specific content type
node diagrams/render-thumbnails.js products
node diagrams/render-thumbnails.js projects
node diagrams/render-thumbnails.js training

# Generate all thumbnails
node diagrams/render-thumbnails.js all
```
Converts Mermaid `.mmd` files to high-DPI PNG thumbnails (3x scale, transparent background).

### Screenshot External Applications
```bash
# Capture screenshots from running external apps
node debug/screenshots/screenshot-external-app.js atm-solution
node debug/screenshots/screenshot-external-app.js hsm-simulator
```
Automated screenshot capture with authentication support for documenting client applications.

## Architecture

### Core Stack
- **Hugo**: v0.152.2 (extended version)
- **Tailwind CSS**: v4.1.17 (CSS-based config, not `tailwind.config.js`)
- **Node.js**: Required for Tailwind build
- **Content Language**: Indonesian (`id`)

### Directory Structure
```
content/
├── products/      # Product pages (weight-based ordering)
├── projects/      # Project case studies (date-based)
├── training/      # Training sessions (date-based)
├── about_us/      # About pages
└── career/        # Career opportunities

layouts/
├── _default/      # Base templates (baseof.html, single.html, taxonomy.html)
├── partials/      # Reusable components (navbar, footer, hero, head)
├── products/      # Product section layouts
├── projects/      # Project section layouts
├── training/      # Training section layouts
├── about_us/      # About section layouts
├── career/        # Career section layouts
├── consulting/    # Consulting section layouts
└── home.html      # Homepage template

static/
├── css/           # Compiled CSS (main.css ignored in git)
├── js/            # JavaScript libraries (jQuery, Swiper, Magnify, main.js)
├── img/           # Images organized by section
│   ├── products/{product-name}/    # Product images
│   ├── projects/{project-name}/    # Project images
│   └── training/{training-name}/   # Training images
└── fonts/         # Geist and GeistMono fonts

assets/css/
└── tailwind.css   # Tailwind v4 config with @theme block

diagrams/
├── render-thumbnails.js            # Generic thumbnail generator
├── product-thumbnails/             # Mermaid sources for products
├── project-thumbnails/             # Mermaid sources for projects
└── training-thumbnails/            # Mermaid sources for training

debug/
├── screenshots/                    # Screenshot utilities
│   ├── screenshot-navbar.js        # Local site screenshots
│   └── screenshot-external-app.js  # External app capture (with auth)
├── components/                     # Component testing (dropdown, navbar, hero)
├── css/                           # CSS debugging tools
├── production/                    # Production validation (check-production.js)
└── archive/                       # Deprecated scripts
```

### Tailwind CSS v4 Configuration
Located in `assets/css/tailwind.css` (NOT `tailwind.config.js`):
- Custom theme variables in `@theme` block
- Brand colors: `primary` (navy blue #2563eb), `accent` (green #22c55e)
- Custom fonts: Geist (sans), GeistMono (mono)
- Dark mode via `@variant dark` with class-based strategy
- Component styles for Swiper, Magnify, theme toggle
- Markdown content styling in article elements

### Content Model

**Products** (`content/products/*.md`):
```yaml
---
title: "Product Name"
description: "Brief description"
icon: "/img/products/product-name/thumbnail.png"
weight: 3  # Lower = appears first
---
```

**Projects** (`content/projects/*.md`):
```yaml
---
title: "Project Name"
description: "Description"
client: "Client Name"
date: 2025-01-15  # Used for sorting
image: "/img/projects/project-name/thumbnail.png"
---
```

**Training** (`content/training/*.md`):
```yaml
---
title: "Training Name"
date: 2025-01-15
client: "Client Name"
description: "Description"
image: "/img/training/training-name/thumbnail.png"
---
```

### Hugo Configuration (`hugo.toml`)
- Base URL: `https://artivisi.com/`
- Language: Indonesian (`id`)
- Pagination: 9 items per page
- Menu config: About Us, Product, Project, Training, Consulting, Career
- Brand colors in `params.branding`
- Social links in `params.social`
- Markup: Goldmark with `unsafe = true` for HTML in markdown

### JavaScript Libraries
- **jQuery**: 3.7.1 (loaded via `static/js/jquery.min.js`)
- **Swiper**: 11.0.6 (carousels, loaded via `static/js/swiper-bundle.min.js`)
- **jQuery Magnify**: 1.6.3 (image lightbox, loaded via `static/js/jquery.magnify.min.js`)
- **Playwright**: 1.56.1 (testing only, not loaded in site)
- **Main script**: `static/js/main.js` (custom initialization)
- **Lightbox script**: `static/js/lightbox.js` (custom image gallery)

All JS/CSS loaded in `layouts/partials/head.html` with `defer`.

### Template Architecture

**Two-Level Menu Hierarchy**: Navbar uses Hugo's `.HasChildren` and `.Children` to render nested menus dynamically. Parent items defined in `hugo.toml` with `identifier` field, children reference parent via `parent` field.

**Desktop vs Mobile Navigation**:
- Desktop: CSS hover-based dropdowns (`:hover` on parent reveals children)
- Mobile: JavaScript accordion with toggle buttons and `hidden` class manipulation

**Single.html Flexibility**: Template conditionally renders thumbnail/image/icon (tries all three frontmatter fields), enabling different content types to use different naming conventions.

**Pagination UI**: Shows 5 page numbers with ellipsis, configured for 9 items per page in `hugo.toml`.

### JavaScript Patterns

**Theme Management** (`main.js`):
- localStorage-based persistence with system preference fallback
- Initialized before DOM load to prevent flash of wrong theme
- Toggle button uses fixed positioning with backdrop blur

**Image Lightbox Redundancy**:
- jQuery Magnify: Activated via `data-magnify` attributes
- Custom lightbox.js: Auto-attaches to article images via MutationObserver
- Both implementations coexist (potential consolidation opportunity)

**Swiper Instances**:
- `.mySwiper`: General carousel with responsive breakpoints (2→3→4 slides)
- `.swiper-container`: About section carousel
- Autoplay disabled on user interaction

## Critical Requirements

### Case-Sensitive File Naming
**CRITICAL**: macOS is case-insensitive, but Linux production (GitHub Pages) is case-sensitive.
- ✅ `thumbnail.png`, `01-dashboard.png` (lowercase)
- ❌ `Thumbnail.png`, `01-Dashboard.png` (will break in production)
- Always use lowercase for image filenames

### Image Organization
Store images in section-specific directories:
```
static/img/products/{product-name}/thumbnail.png
static/img/projects/{project-name}/thumbnail.png
static/img/training/{training-name}/thumbnail.png
```

### Git-Ignored Files
- `static/css/main.css` (built by GitHub Actions, not committed)
- `resources/` (Hugo cache, regenerated on build)

## Deployment

### GitHub Actions Workflow (`.github/workflows/hugo.yaml`)
Triggers on push to `main`:
1. Installs Hugo v0.136.3 (extended) and Dart Sass
2. Checks out repo with submodules
3. Runs `npm ci` (or `npm install` if no lock file)
4. Builds CSS: `npm run build:css`
5. Builds site: `hugo --gc --minify` with production baseURL
6. Deploys to GitHub Pages

**Important**: CSS must be built in CI before Hugo runs. Local `static/css/main.css` is ignored in git.

### Build Pipeline Critical Constraints

**Build Order Dependency**: CSS compilation MUST complete before Hugo build runs. Hugo templates reference `/css/main.css` which doesn't exist until Tailwind processes `assets/css/tailwind.css`.

**Local vs Production Divergence**:
- Local development: `static/css/main.css` exists but is git-ignored
- Production CI: Generates `main.css` fresh from `assets/css/tailwind.css`
- This prevents CSS drift between environments

**Cache Behavior**: Hugo's `resources/` directory caches processed assets. Clear it (`rm -rf resources/`) if CSS changes aren't reflected after rebuild.

### Testing Production Builds Locally
```bash
npm run build
cd public
python3 -m http.server 8000
```
Visit `http://localhost:8000`

### Debugging Production Issues
Use Playwright scripts in `debug/` folder:
```bash
cd debug
node check-production.js
```
Checks live site for broken images and rendering issues.

## Tooling Ecosystem

### Diagram Generation (`diagrams/`)
**Purpose**: Generate high-DPI thumbnails from Mermaid diagram sources.

**Workflow**:
1. Create `.mmd` file in appropriate directory (product-thumbnails/, project-thumbnails/, training-thumbnails/)
2. Run `node diagrams/render-thumbnails.js {type}` to generate PNG
3. Output: `static/img/{type}/{name}/thumbnail.png` (3x scale, transparent background)

**Auto-detection**: Script automatically discovers all `.mmd` files in directory, no manual configuration needed.

**Diagram Styling**: Consistent color scheme across all diagrams:
- Primary Blue (#60a5fa): User/Client elements
- Green (#34d399): Application/Service layers
- Orange (#f59e0b): Security/Authentication
- Purple (#8b5cf6): Business Logic/Core
- Pink (#ec4899): Data Access/Persistence
- Indigo (#6366f1): Databases
- Red (#ef4444): External Services/Critical

### Debug Tools (`debug/`)
**Purpose**: Playwright-based testing, validation, and screenshot automation.

**Production Validation** (`production/check-production.js`):
- Checks live site at https://artivisi.com/ for broken images
- Reports image loading status and dimensions
- Run before releases to verify production deployment

**Component Testing** (`components/`):
- `verify-dropdown.js`: Tests dropdown menu hover/click behavior
- `inspect-navbar.js`: Logs navbar DOM structure for debugging
- `inspect-hero.js`: Validates hero section spacing and layout

**Screenshot Tools** (`screenshots/`):
- `screenshot-navbar.js`: Captures local Hugo site screenshots
- `screenshot-external-app.js`: Captures screenshots from external applications with authentication
  - Configurable via `CONFIGS` object
  - Supports login flows (username/password)
  - Multi-page capture with custom viewport sizes
  - Example configs: `atm-solution`, `hsm-simulator`

**CSS Debugging** (`css/debug-css.js`):
- Inspects computed styles and Tailwind class application
- Validates if CSS classes exist in stylesheets
- Requires Hugo server on port 1314

### Prerequisites for Tooling
```bash
cd debug
npm install
npx playwright install chromium

# For diagram generation
npm install -g @mermaid-js/mermaid-cli
```

## Adding New Content

### Add a Product
1. Create `content/products/product-name.md` with frontmatter (title, description, icon, weight)
2. Create `static/img/products/product-name/` directory
3. Add lowercase-named images: `thumbnail.png`, `01-screenshot.png`, etc.
4. Reference images in markdown: `![Description](/img/products/product-name/01-screenshot.png)`

**With Diagram Thumbnail**:
1. Create `diagrams/product-thumbnails/product-name.mmd` with Mermaid graph
2. Run `node diagrams/render-thumbnails.js products`
3. Use generated thumbnail: `icon: "/img/products/product-name/thumbnail.png"`

### Add a Project
1. Create `content/projects/project-name.md` with frontmatter (title, description, client, date, image)
2. Create `static/img/projects/project-name/` directory
3. Add lowercase-named images

### Add Training
1. Create `content/training/training-name.md` with frontmatter (title, date, client, description, image)
2. Create `static/img/training/training-name/` directory
3. Add lowercase-named images

## Common Issues

### CSS Not Updating
```bash
npm run build:css
rm -rf resources/
hugo server --noHTTPCache
```

### Images Not Showing in Production
Check filename case. Linux servers are case-sensitive. Use `debug/check-production.js` to verify.

### Menu Not Updating
Menu defined in `hugo.toml` under `[menu.main]`. Update weights to reorder.

## File Naming Conventions
- Content files: `kebab-case.md`
- Image files: **lowercase only** (critical for Linux)
- Directories: `lowercase_with_underscores` or `kebab-case`
