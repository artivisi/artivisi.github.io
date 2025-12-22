---
title: "Aplikasi Akunting"
description: "Sistem akunting berbasis web untuk UMKM Indonesia dengan fitur compliance pajak dan manajemen proyek."
icon: "/img/products/aplikasi-akunting/thumbnail.png"
weight: 5
draft: false
---

> **Status: Phase 6 (Security Hardening)** - 8 dari 10 sub-section telah selesai. Aplikasi hampir memasuki tahap production-ready dengan 115 functional tests dan comprehensive user manual (15 files).

## Deskripsi Produk

Sistem akunting berbasis web yang dirancang khusus untuk UMKM Indonesia dengan fitur lengkap dari pembukuan dasar hingga payroll, aset tetap, inventory, dan produksi. Aplikasi ini menggabungkan kemudahan penggunaan dengan kepatuhan pajak Indonesia melalui desain transaction-centric yang menangani pembukuan double-entry secara otomatis.

## Target Pengguna & Industri

**Primary Users:**
- UMKM dan sole proprietors
- Freelancer dan konsultan
- Junior accountant / fresh graduate
- Bookkeeper yang melayani multiple klien

**Industri yang Didukung (dengan Industry Seed Pack):**
- **IT Services / Consulting** - Project tracking, milestone billing
- **Online Sellers** - Inventory, COGS, multi-channel sales (Tokopedia, Shopee, Bukalapak)
- **Manufacturing (Coffee/F&B)** - BOM, production orders, cost accumulation
- **Education (Universities)** - Student billing, scholarships, receivables management
- **Corporate Training** - Project-based accounting
- **Photography / Videography** - Equipment tracking, event-based billing

## Fitur Utama

### Core Accounting (Phase 1 - Complete ✅)
- **Chart of Accounts** - Hierarchical account structure dengan PSAK-compliant format
- **Journal Template System** - Template-based transaction entry dengan formula support (SpEL expressions)
- **Double-Entry Bookkeeping** - Transaction-centric architecture dengan workflow Draft → Posted → Void
- **Financial Reports** - Trial Balance, Income Statement, Balance Sheet, General Ledger, Account Ledger
- **Project Tracking** - Project-based profitability dengan tag transactions per project
- **Dashboard KPIs** - Revenue trends, expense breakdown, monthly comparisons
- **Data Import/Export** - COA & template import dari JSON/Excel, report export ke Excel/PDF

### Tax Compliance (Phase 2 - Complete ✅)
- **PPN (VAT) Tracking** - Pajak Masukan/Keluaran dengan kalkulasi otomatis
- **PPh 21** - Kalkulasi otomatis dengan progressive rates
- **PPh 23 & PPh 4(2)** - Withholding tax tracking untuk final tax
- **e-Faktur Export** - Format export data untuk aplikasi e-Faktur
- **e-Bupot Export** - Format export untuk e-Bupot
- **Fiscal Period Management** - Monthly period status (Open, Month Closed, Tax Filed) dengan edit restrictions
- **Tax Calendar** - Monthly/quarterly/annual deadlines dengan notifications
- **Cash Flow Statement** - Operating/Investing/Financing categorization

### Payroll (Phase 3 - Complete ✅)
- **Employee Management** - Employee master data dengan PTKP status dan bank account info
- **17 Indonesian Salary Components** - Gaji Pokok, Tunjangan (Transport, Makan, Jabatan), BPJS Kesehatan, BPJS Ketenagakerjaan (JKK, JKM, JHT, JP), PPh 21 deduction
- **Payroll Processing** - Monthly payroll runs dengan auto-calculation BPJS & PPh 21
- **Payslip Generation** - Automatic payslip generation dengan journal entry posting
- **Employee Self-Service** - View payslips dan tax documents (1721-A1)

### Fixed Assets (Phase 4 - Complete ✅)
- **Asset Register** - Asset categories dengan default settings dan acquisition tracking
- **Depreciation Methods** - Straight-line dan declining balance methods
- **Monthly Batch Depreciation** - Auto journal entry via templates
- **Asset Disposal** - Sell, write-off, transfer workflows dengan gain/loss calculation

### Inventory & Production (Phase 5 - Complete ✅)
- **Product Management** - Product master dengan unit of measure, product categories (hierarchical)
- **Stock Valuation** - FIFO method dengan layer tracking atau Weighted Average method
- **Inventory Transactions** - Purchase, Sale dengan auto-COGS, Stock adjustments, Production in/out
- **Bill of Materials (BOM)** - BOM definition untuk production
- **Production Orders** - Production orders dengan status workflow, material consumption, finished goods receipt dengan cost accumulation
- **Sales Integration** - Auto-COGS calculation pada sales posting dengan margin calculation per transaction
- **Product Profitability Report** - Laporan profitabilitas per produk

### Security Hardening (Phase 6 - In Progress 🔄)
- **Data Encryption** - Field-level AES-256-GCM encryption untuk PII, document storage encryption, database SSL
- **Authentication** - Password complexity (12+ chars), account lockout (5 attempts, 30-min lockout), rate limiting, session timeout (15 min)
- **Input Validation** - Magic byte validation untuk file uploads, XSS prevention, log injection prevention
- **Audit Logging** - Authentication events, user management operations, sensitive data access, document operations
- **RBAC** - 6 roles (SUPERADMIN, OWNER, ACCOUNTANT, BOOKKEEPER, EMPLOYEE, VIEWER) dengan method-level security
- **Data Protection** - Data masking untuk sensitive fields, GDPR/UU PDP compliance (DSAR export, anonymization)
- **DevSecOps** - CodeQL static analysis, SonarCloud, OWASP Dependency-Check, ZAP DAST scanning

### Additional Features
- **Telegram Integration** - Receipt photo upload via bot dengan OCR processing (Google Cloud Vision)
- **Backup & Restore** - Automated daily local backup, Backblaze B2 offsite backup, Google Drive monthly archive, encrypted backup dengan GPG
- **Manajemen Dokumen** - Lampirkan kwitansi dan faktur dengan retensi 10 tahun sesuai ketentuan pajak Indonesia

### Bagan Akun
Struktur akun sesuai PSAK dengan format kode:
- 1.x.xx untuk Aset
- 2.x.xx untuk Liabilitas
- 3.x.xx untuk Ekuitas
- 4.x.xx untuk Pendapatan
- 5.x.xx untuk Beban

### Workflow Transaksi
Tiga status transaksi untuk kontrol yang ketat:
- **Draft**: Dapat diedit
- **Posted**: Terkunci, menghasilkan jurnal
- **Void**: Dibatalkan dengan jurnal reversal

## Teknologi yang Digunakan

| Layer | Teknologi |
|-------|-----------|
| Runtime | Java 25 |
| Backend | Spring Boot 4.0, Spring Data JPA, Spring Security |
| Frontend | Thymeleaf, HTMX, Alpine.js |
| Database | PostgreSQL 17 dengan Flyway migrations |
| Document Storage | File system dengan encryption support |
| Export/Import | OpenPDF (PDF export), Apache POI (Excel export) |
| Integrations | Google Cloud Vision (OCR), Telegram Bot API |
| Testing | JUnit 5, Testcontainers, Playwright (115 functional tests) |
| Security | CodeQL, SonarCloud, OWASP Dependency-Check, ZAP DAST |
| DevOps | Docker, GitHub Actions, Pulumi (infrastructure), Ansible (configuration) |

Aplikasi menggunakan arsitektur monolitik single-tenant untuk mengurangi kompleksitas, menjaga isolasi data per company, dan menghindari duplikasi validasi antara backend dan frontend.

## Arsitektur Sistem

![Arsitektur Aplikasi Akunting](/img/products/aplikasi-akunting/thumbnail.png)

## Screenshots

### Dashboard

![Dashboard](/img/products/aplikasi-akunting/01-dashboard.png)

Dashboard utama menampilkan ringkasan keuangan real-time dengan summary cards, grafik finansial, dan transaksi terbaru.

### Daftar Transaksi

![Daftar Transaksi](/img/products/aplikasi-akunting/02-transactions-list.png)

Daftar transaksi dengan filter berdasarkan tanggal, status (Draft/Posted/Void), dan kategori.

### Form Transaksi

![Form Transaksi](/img/products/aplikasi-akunting/03-transactions-form.png)

Form input transaksi dengan pilihan template, tanggal, deskripsi, dan nilai transaksi.

### Bagan Akun

![Bagan Akun](/img/products/aplikasi-akunting/04-accounts-list.png)

Daftar akun dengan struktur kode sesuai PSAK untuk pengelolaan chart of accounts.

### Template Jurnal

![Template Jurnal](/img/products/aplikasi-akunting/05-templates-list.png)

Template transaksi yang dapat dikonfigurasi untuk berbagai jenis transaksi berulang.

## Keunggulan

- **Production-Ready**: Phase 6 (Security Hardening) hampir selesai dengan 115 functional tests
- **PSAK Compliant**: Struktur akun sesuai standar akuntansi Indonesia
- **Tax Ready**: e-Faktur, e-Bupot, PPh 21/23/4(2) dengan kalkulasi otomatis
- **Industry-Specific**: 4 industry seed packs siap pakai (IT Services, Online Seller, Manufacturing, Education)
- **Comprehensive Documentation**: User manual lengkap 15 files dengan 12-section structure
- **User Friendly**: Desain transaction-centric untuk pengguna non-akuntan
- **Security-First**: Field-level encryption, audit logging, RBAC dengan 6 roles
- **Audit Trail**: Comprehensive logging untuk semua transaksi dan sensitive operations
- **Document Retention**: Penyimpanan dokumen dengan encryption sesuai ketentuan pajak 10 tahun
- **Tested**: 115 functional tests dengan Playwright across 4 industry scenarios
- **Open Source**: Lisensi AGPL-3.0

## Industry Seed Packs

Aplikasi dilengkapi dengan 4 industry seed packs yang siap digunakan:

1. **IT Services (PT ArtiVisi Intermedia)** - 75 COA, 37 templates, payroll components
2. **Online Seller (Toko Gadget Murah)** - 80 COA, marketplace-specific accounts
3. **Manufacturing (Kedai Kopi Nusantara)** - 90 COA, 33 templates, BOM products
4. **Education (STMIK Tazkia)** - 87 COA, 31 templates, student billing configuration

Setiap seed pack mencakup Chart of Accounts, Journal Templates, Salary Components, dan sample data yang sesuai dengan industry best practices.

## Comprehensive User Manual

User manual lengkap dengan 15 files dan 12-section structure:

1. **Setup & Administration** - Instalasi, konfigurasi, user management
2. **Basic Accounting Tutorial** - Tutorial pembukuan dari zero sampai laporan keuangan
3. **Fixed Assets & Depreciation** - Manajemen aset tetap dan penyusutan
4. **Tax Compliance** - Penanganan PPN, PPh, e-Faktur, e-Bupot
5. **Payroll & BPJS** - Penggajian dengan BPJS dan PPh 21
6. **Industry Overview** - Pengenalan sektor industri yang didukung
7. **Service Industry Guide** - Panduan untuk perusahaan jasa
8. **Trading Industry Guide** - Panduan untuk perusahaan dagang
9. **Manufacturing Industry Guide** - Panduan untuk perusahaan manufaktur
10. **Education Industry Guide** - Panduan untuk institusi pendidikan
11. **Security & Compliance** - Keamanan dan compliance (GDPR/UU PDP)
12. **Appendices** - Glosarium, template reference, amortization tables, account reference

## Use Cases

### IT Services & Consulting
- Project-based accounting dengan milestone billing
- Time tracking dan profitability per project
- Employee payroll dengan BPJS dan PPh 21

### Online Sellers (Marketplace)
- Inventory management dengan FIFO/Weighted Average
- Multi-channel sales tracking (Tokopedia, Shopee, Bukalapak)
- Auto-COGS calculation dengan margin analysis
- Product profitability reports

### Manufacturing (Coffee/F&B)
- Bill of Materials (BOM) management
- Production orders dengan material consumption
- Cost accumulation untuk finished goods
- Product costing dan margin analysis

### Education (Universities)
- Student billing dan receivables management
- Scholarship tracking dan allocation
- Fee collection per semester/program
- Student payment reports

### Freelancer & Konsultan
- Tracking pendapatan dan pengeluaran per proyek
- Invoice generation dengan tax compliance
- Project profitability analysis

### Bookkeeper Services
- Manage multiple clients efficiently
- Fast data entry dengan journal templates
- Industry-specific seed packs untuk quick setup
- Comprehensive audit trail untuk semua transactions

## Project Status & Roadmap

### Completed Phases ✅

- **Phase 0: Project Setup** - Java 25, Spring Boot 4.0, PostgreSQL, CI/CD
- **Phase 1: Core Accounting MVP** - COA, Journal Templates, Double-Entry, Financial Reports, Project Tracking
- **Phase 2: Tax Compliance + Cash Flow** - PPN, PPh 21/23/4(2), e-Faktur/e-Bupot export, Fiscal Periods, Tax Calendar
- **Phase 3: Payroll + RBAC** - Employee Management, 17 Salary Components, BPJS, PPh 21, Employee Self-Service, 6 Roles
- **Phase 4: Fixed Assets** - Asset Register, Straight-line & Declining Balance Depreciation, Asset Disposal
- **Phase 5: Inventory & Production** - Product Management, FIFO/Weighted Average, BOM, Production Orders, COGS

### Current Phase 🔄

- **Phase 6: Security Hardening** (8 of 10 subsections complete)
  - ✅ Critical security fixes
  - ✅ Field-level encryption (AES-256-GCM)
  - ✅ Authentication hardening (password complexity, account lockout, rate limiting)
  - ✅ Input validation & output encoding
  - ✅ Security audit logging
  - ✅ Data protection (masking, DSAR export)
  - ✅ API security
  - 🔄 GDPR/UU PDP compliance (consent management, breach response pending)
  - 🔄 DevSecOps (container security, API fuzzing pending)
  - ✅ Security documentation

### Planned Phases ⏳

- **Phase 7: API Foundation** - REST API, API key auth, OpenAPI/Swagger docs
- **Phase 8: Online Seller Support** - Marketplace CSV import, fee tracking, seller dashboard
- **Phase 9: Bank Reconciliation** - Bank statement import, auto-matching, reconciliation UI
- **Phase 10: Analytics & Insights** - Trend charts, smart alerts, transaction tags

## Dokumentasi & Resources

- **[User Manual](https://artivisi.com/aplikasi-akunting/)** - Comprehensive user documentation (15 files, Indonesian)
- **[Source Code (GitHub)](https://github.com/artivisi/aplikasi-akunting)** - Open source repository
- **[SonarCloud](https://sonarcloud.io/project/overview?id=artivisi_aplikasi-akunting)** - Code quality & security analysis
- **Features & Roadmap** - `docs/01-features-and-roadmap.md` dalam repository
- **Architecture** - `docs/02-architecture.md` dalam repository
- **Operations Guide** - `docs/03-operations-guide.md` dalam repository
- **Tax Compliance** - `docs/04-tax-compliance.md` dalam repository

## Lisensi

AGPL-3.0 - modifikasi harus dibagikan dengan lisensi yang sama.
