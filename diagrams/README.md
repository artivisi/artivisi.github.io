# ArtiVisi Thumbnail Generator

This directory contains Mermaid diagram source files and scripts to generate thumbnails for products, projects, and training catalog pages.

## Directory Structure

```
diagrams/
├── README.md                          # This file
├── render-thumbnails.js               # Generic thumbnail generator (NEW)
├── render-training-thumbnails.js      # Legacy training-only generator (DEPRECATED)
├── training-thumbnails/               # Mermaid diagrams for training
│   ├── application-security.mmd
│   ├── git-collaboration.mmd
│   ├── java-oop-design-patterns.mmd
│   ├── playwright-testing.mmd
│   ├── spring-boot-development.mmd
│   └── vault-credential-management.mmd
├── product-thumbnails/                # Mermaid diagrams for products (optional)
│   └── *.mmd
└── project-thumbnails/                # Mermaid diagrams for projects (optional)
    └── *.mmd
```

## Quick Start

### Generate Thumbnails for Specific Content Type

```bash
# Generate training thumbnails only
node diagrams/render-thumbnails.js training

# Generate product thumbnails only
node diagrams/render-thumbnails.js products

# Generate project thumbnails only
node diagrams/render-thumbnails.js projects

# Generate ALL thumbnails (products + projects + training)
node diagrams/render-thumbnails.js all
```

## Prerequisites

Install Mermaid CLI globally:

```bash
npm install -g @mermaid-js/mermaid-cli
```

Or use npx (no installation required):

```bash
npx -p @mermaid-js/mermaid-cli mmdc --version
```

## Features

### Auto-Detection
- Automatically detects `.mmd` files in each content type directory
- No need to manually update diagram lists in code
- Gracefully handles missing directories

### Flexible Configuration
The `render-thumbnails.js` script supports three content types out of the box:

1. **Training** - Reads from `training-thumbnails/`, outputs to `static/img/training-catalog/{name}/thumbnail.png`
2. **Products** - Reads from `product-thumbnails/`, outputs to `static/img/products/{name}/thumbnail.png`
3. **Projects** - Reads from `project-thumbnails/`, outputs to `static/img/projects/{name}/thumbnail.png`

### High-Quality Output
- **3x device scale factor** for crisp Retina/HiDPI displays
- Transparent background for design flexibility
- Optimized PNG compression

## Usage Examples

### Adding New Training Diagram

1. Create Mermaid file:
```bash
# Create diagram source
cat > diagrams/training-thumbnails/my-new-training.mmd <<'EOF'
graph TB
    A[Student] --> B[Instructor]
    B --> C[Material]
EOF
```

2. Generate thumbnail:
```bash
node diagrams/render-thumbnails.js training
```

3. Reference in content:
```yaml
---
title: "My New Training"
icon: "/img/training-catalog/my-new-training/thumbnail.png"
---
```

### Adding New Product Diagram

1. Create directory (if doesn't exist):
```bash
mkdir -p diagrams/product-thumbnails
```

2. Create Mermaid file:
```bash
cat > diagrams/product-thumbnails/my-product.mmd <<'EOF'
graph LR
    A[Frontend] --> B[Backend]
    B --> C[Database]
EOF
```

3. Generate thumbnail:
```bash
node diagrams/render-thumbnails.js products
```

4. Reference in content:
```yaml
---
title: "My Product"
icon: "/img/products/my-product/thumbnail.png"
---
```

## Diagram Descriptions

### Training Diagrams

#### 1. Spring Boot Development
Architecture diagram showing Web MVC, REST API, Spring Security, JPA Repository, and PostgreSQL integration.

#### 2. Application Security
Security architecture covering TLS, OAuth2/JWT, RBAC, encryption, and audit logging.

#### 3. HashiCorp Vault
Vault cluster architecture with secrets engines, HA setup, and external integrations.

#### 4. Java OOP & Design Patterns
Conceptual diagram showing SOLID principles and common design patterns (Factory, Strategy, Observer, etc.).

#### 5. Git Collaboration
Git workflow showing branching strategies, merges, and release management.

#### 6. Playwright Testing
Testing architecture with Page Object Model, test fixtures, CI/CD integration, and reporting.

## Diagram Styling

Consistent color scheme across all diagrams:

- **Primary Blue** (`#60a5fa`) - User/Client elements
- **Green** (`#34d399`) - Application/Service layers
- **Orange** (`#f59e0b`) - Security/Authentication
- **Purple** (`#8b5cf6`) - Business Logic/Core
- **Pink** (`#ec4899`) - Data Access/Persistence
- **Indigo** (`#6366f1`) - Databases
- **Red** (`#ef4444`) - External Services/Critical

## Technical Implementation

### Mermaid CLI Options

The generator uses these `mmdc` (Mermaid CLI) options:

- `-i` Input Mermaid file (.mmd)
- `-o` Output PNG file
- `-s 3` Scale factor 3x for high-DPI
- `-b transparent` Transparent background

### Error Handling

The script gracefully handles:
- Missing directories (auto-creates output dirs)
- Missing .mmd files (skips with warning)
- Render failures (logs error, continues with next)

## Migration from Legacy Script

If you're using the old `render-training-thumbnails.js`:

```bash
# Old way (deprecated)
node diagrams/render-training-thumbnails.js

# New way (recommended)
node diagrams/render-thumbnails.js training
```

The new script is backward compatible and produces identical output for training diagrams.

## Extending for New Content Types

To add support for a new content type (e.g., "services"):

1. Edit `diagrams/render-thumbnails.js`
2. Add new entry to `CONTENT_TYPES` object:

```javascript
const CONTENT_TYPES = {
  // ... existing types ...
  services: {
    diagramsDir: 'service-thumbnails',
    outputDir: path.join('..', 'static', 'img', 'services'),
    diagrams: [] // Auto-detect
  }
};
```

3. Create diagram directory:
```bash
mkdir diagrams/service-thumbnails
```

4. Add diagrams and generate:
```bash
node diagrams/render-thumbnails.js services
```

## Troubleshooting

### "mmdc: command not found"

Install Mermaid CLI:
```bash
npm install -g @mermaid-js/mermaid-cli
```

### Diagrams Not Rendering

Check for syntax errors in .mmd files:
```bash
# Validate Mermaid syntax
mmdc -i diagrams/training-thumbnails/my-diagram.mmd -o /tmp/test.png
```

### Low Resolution Output

The script uses `-s 3` for 3x scaling. If output looks blurry, verify:
1. Mermaid CLI version is up-to-date
2. No custom CSS overriding image dimensions

## References

- [Mermaid.js Documentation](https://mermaid.js.org/)
- [Mermaid CLI Documentation](https://github.com/mermaid-js/mermaid-cli)
- [Training Catalog Content](../content/training-catalog/)
- [Products Content](../content/products/)
- [Projects Content](../content/projects/)
