# Training Catalog Thumbnail Diagrams

This directory contains Mermaid diagram source files and scripts to generate thumbnails for the training catalog pages.

## Directory Structure

```
diagrams/
├── README.md                          # This file
├── render-training-thumbnails.js      # Node.js script to generate PNG thumbnails
└── training-thumbnails/               # Mermaid diagram source files
    ├── application-security.mmd
    ├── git-collaboration.mmd
    ├── java-oop-design-patterns.mmd
    ├── playwright-testing.mmd
    ├── spring-boot-development.mmd
    └── vault-credential-management.mmd
```

## Diagram Descriptions

### 1. Spring Boot Development (`spring-boot-development.mmd`)
Architecture diagram showing:
- Web Browser interaction
- Spring MVC + Thymeleaf UI
- REST API Controllers
- Spring Security + OAuth2
- Service Layer with Business Logic
- Spring Data JPA Repository
- PostgreSQL Database
- Gmail API for email services

### 2. Application Security (`application-security.mmd`)
Security architecture showing:
- TLS/HTTPS encryption layer
- Authentication (OAuth2/JWT)
- Authorization (RBAC/Permissions)
- REST API with input validation
- Business logic with security rules
- Password hashing (bcrypt/Argon2)
- Field encryption (AES-256)
- HSM/KMS for key storage
- Audit logs and SIEM integration

### 3. HashiCorp Vault (`vault-credential-management.mmd`)
Vault deployment architecture showing:
- Application clients (Spring Boot, Kubernetes Pod, Legacy App)
- Vault cluster (Active + Standby nodes)
- Secrets engines (KV Store, Database, PKI)
- External integrations (PostgreSQL, Kubernetes Auth, LDAP/AD)
- Raft storage backend for HA

### 4. Java OOP & Design Patterns (`java-oop-design-patterns.mmd`)
Conceptual diagram showing:
- SOLID principles (S, O, L, I, D)
- Creational patterns (Factory, Builder, Singleton)
- Structural patterns (Bridge, Decorator, Facade, Proxy)
- Behavioral patterns (Command, Strategy, Observer)
- Code quality practices (Refactoring, Code Smells)

### 5. Git Collaboration (`git-collaboration.mmd`)
Git workflow diagram showing:
- Main branch with initial commits
- Development branch
- Feature branches (auth, payment)
- Release branch workflow
- Merge and cherry-pick operations
- Version tags (v1.1.0, v2.0.0)

### 6. Playwright Testing (`playwright-testing.mmd`)
Testing architecture showing:
- Test specs in TypeScript
- Page Object Model pattern
- Test fixtures for setup/teardown
- Playwright Test Runner
- Multi-browser support (Chrome/FF/Safari)
- Web application and REST API under test
- Test data generation with Faker.js
- Database test setup
- CI/CD pipeline integration
- Test reporting and trace viewer

## Generating Thumbnails

### Prerequisites

- Node.js installed
- Playwright installed (`npx playwright install chromium`)

### Generate All Thumbnails

Run the rendering script from the project root:

```bash
node diagrams/render-training-thumbnails.js
```

This will:
1. Read each `.mmd` file from `diagrams/training-thumbnails/`
2. Render the Mermaid diagram using Playwright + Chromium
3. Take high-DPI PNG screenshot and save to `static/img/training-catalog/{training-name}/thumbnail.png`

### Output

Generated thumbnails are saved as **high-DPI PNG files** (3x device scale factor for crisp rendering):
- `static/img/training-catalog/spring-boot-development/thumbnail.png` (18 KB)
- `static/img/training-catalog/application-security/thumbnail.png` (17 KB)
- `static/img/training-catalog/vault-credential-management/thumbnail.png` (51 KB)
- `static/img/training-catalog/java-oop-design-patterns/thumbnail.png` (63 KB)
- `static/img/training-catalog/git-collaboration/thumbnail.png` (44 KB)
- `static/img/training-catalog/playwright-testing/thumbnail.png` (22 KB)

**Note**: The following training thumbnails use actual photos from past training sessions and are NOT generated from Mermaid:
- `static/img/training-catalog/spring-jpos/thumbnail.png` (photo - 344 KB)
- `static/img/training-catalog/sre-bootcamp/thumbnail.svg` (existing SVG asset - 2.4 MB)

## Modifying Diagrams

To update a diagram:

1. Edit the corresponding `.mmd` file in `diagrams/training-thumbnails/`
2. Run the rendering script: `node diagrams/render-training-thumbnails.js`
3. The thumbnail will be regenerated automatically

## Diagram Styling

The diagrams use a consistent color scheme defined in the rendering script:

- Primary blue: `#60a5fa` (User/Client elements)
- Green: `#34d399` (Application/Service layers)
- Orange: `#f59e0b` (Security/Authentication)
- Purple: `#8b5cf6` (Business Logic/Core)
- Pink: `#ec4899` (Data Access/Persistence)
- Indigo: `#6366f1` (Databases)
- Red: `#ef4444` (External Services/Critical)

Background colors use light tints for visual hierarchy and grouping.

## Technical Details

The rendering script (`render-training-thumbnails.js`):
- Uses Playwright's Chromium browser in headless mode
- Loads Mermaid.js v11 from CDN
- Renders diagrams at 2400x1600 viewport
- Applies custom theme variables for consistent styling
- Uses **3x device scale factor** for Retina/HiDPI rendering
- Exports diagrams as **high-resolution PNG files**
- Handles errors gracefully with detailed logging

**Why high-DPI PNG?**
- 3x device scale factor ensures crisp rendering on all displays
- Works reliably in `<img>` tags (unlike SVG with foreignObject elements)
- Transparent backgrounds for flexible design use
- Optimized file sizes (17-63 KB for diagrams)

## Maintenance

When adding new training programs:

1. Create a new `.mmd` file in `diagrams/training-thumbnails/`
2. Add the training name to the `diagrams` array in `render-training-thumbnails.js`
3. Run the script to generate the thumbnail
4. Reference the thumbnail in the training catalog markdown frontmatter:
   ```yaml
   icon: "/img/training-catalog/{training-name}/thumbnail.png"
   ```

## References

- [Mermaid.js Documentation](https://mermaid.js.org/)
- [Playwright Documentation](https://playwright.dev/)
- [Training Catalog Content](../content/training-catalog/)
