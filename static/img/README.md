# Image Organization

This directory contains all images for the website, organized by category for better maintainability.

## Directory Structure

```
static/img/
├── common/           # Shared assets (logos, icons, backgrounds)
├── products/         # Product-specific images
│   ├── va-splitter/
│   ├── takopay/
│   ├── remittance/
│   └── call-center/
├── projects/         # Project portfolio images
│   ├── aplikasi-garansi-bank/
│   ├── bni-dashboard/
│   ├── orbit-bongkar-muat/
│   ├── orbit-kepanduan/
│   └── telkom-disbursement/
└── training/         # Training program photos
    ├── bank-jateng/
    ├── nindya-karya/
    └── erajaya/
```

## File Naming Convention

### Products & Projects
- `thumbnail.png` - Thumbnail image for list pages
- `hero.png` - Hero/banner image (optional)
- `01-description.png` - Screenshot 1 with descriptive name
- `02-description.png` - Screenshot 2 with descriptive name
- etc.

### Training
- `thumbnail.jpg` - Thumbnail image for list pages
- `01-photo.jpg` - Photo 1
- `02-photo.jpg` - Photo 2
- etc.

## Guidelines

1. **Consistent Naming**: Use lowercase with hyphens for multi-word names
2. **Sequential Numbering**: Prefix screenshots with 01-, 02-, etc. for logical ordering
3. **Descriptive Names**: Use clear, descriptive names (e.g., `03-dashboard.png` not `03-img.png`)
4. **Optimized Images**: All images should be optimized for web (max 1920px, 80% quality)
5. **File Formats**:
   - Use PNG for screenshots with text/UI elements
   - Use JPG for photos
   - Use SVG for logos/icons when possible

## Adding New Images

When adding images for a new product/project/training:

1. Create a new directory under the appropriate category
2. Use the slug/ID from the content file as the directory name
3. Follow the naming convention above
4. Optimize images before committing
5. Update the corresponding markdown file in `content/`
