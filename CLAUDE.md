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

## Adding New Content

### Add a Product
1. Create `content/products/product-name.md` with frontmatter (title, description, icon, weight)
2. Create `static/img/products/product-name/` directory
3. Add lowercase-named images: `thumbnail.png`, `01-screenshot.png`, etc.
4. Reference images in markdown: `![Description](/img/products/product-name/01-screenshot.png)`

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
