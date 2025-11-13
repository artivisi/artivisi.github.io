# Training Catalog Images

This directory contains images for the training catalog pages.

## Image Requirements

- **Format**: PNG or JPEG
- **Naming**: Use lowercase filenames (e.g., `thumbnail.png`)
- **Thumbnail size**: 800x600px (recommended)
- **Aspect ratio**: 4:3 or 16:9

## Directory Structure

```
training-catalog/
├── spring-jpos/
│   └── thumbnail.png (800x600px, training illustration)
└── sre-junior/
    └── thumbnail.png (800x600px, training illustration)
```

## Image Guidelines

1. Use high-quality images that represent the training content
2. For Spring Boot & jPOS: Consider images showing code, banking UI, or terminal
3. For SRE Junior: Consider images showing infrastructure, monitoring dashboards, or cloud services
4. Ensure images are properly licensed or created in-house
5. Optimize images for web (compress without losing quality)

## Tools for Image Optimization

- **ImageOptim** (macOS)
- **TinyPNG** (online)
- **squoosh.app** (online)
- **imagemagick** (CLI): `convert input.png -quality 85 -resize 800x600 output.png`
