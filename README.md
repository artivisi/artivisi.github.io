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

### Debug with Playwright

The `debug/` folder contains Playwright scripts for testing:

```bash
cd debug
node check-production.js
```

This checks production site for broken images and other issues.

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

## License

ISC

## Support

For issues or questions, contact the development team.
