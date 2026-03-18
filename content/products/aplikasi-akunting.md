---
title: "Balaka"
description: "Aplikasi akunting open-source untuk UMKM Indonesia. Spring Boot 4 + Thymeleaf + PostgreSQL. Pajak, payroll, inventori, produksi, rekonsiliasi bank, faktur."
icon: "/img/products/aplikasi-akunting/thumbnail.png"
weight: 5
draft: false
---

> **Rilis terbaru: 2026.03.3-RELEASE** — 20+ fase pengembangan selesai, 3500+ automated tests, production-ready.

## Deskripsi Produk

Balaka adalah aplikasi akunting open-source untuk UMKM Indonesia. Dibangun dengan arsitektur monolitik single-tenant menggunakan Spring Boot 4 + Thymeleaf + PostgreSQL. Mencakup pembukuan double-entry, kepatuhan pajak Indonesia (PPN, PPh 21/23/Badan), payroll dengan BPJS, inventori, produksi (BOM), rekonsiliasi bank, faktur, dan analisis AI.

- **Website**: [balaka.id](https://balaka.id)
- **Source Code**: [github.com/artivisi/balaka](https://github.com/artivisi/balaka)
- **Panduan Pengguna**: [artivisi.com/balaka](https://artivisi.com/balaka/)
- **Lisensi**: Apache 2.0

## Fitur

### Core Accounting
- Chart of Accounts (PSAK-compliant), Journal Templates dengan formula (SpEL)
- Workflow Draft → Posted → Void, double-entry otomatis
- Laporan: Trial Balance, Laba Rugi, Neraca, Buku Besar, Arus Kas
- Project tracking dan profitabilitas per proyek
- Dashboard KPI, data import/export (JSON/Excel/PDF)

### Perpajakan Indonesia
- PPN 12% (Pajak Masukan/Keluaran), PPh 21 metode TER (PMK 168/2023)
- PPh 23, PPh 4(2), PPh Badan
- Periode fiskal, kalender pajak, SPT Tahunan Badan (L1, L4, L9, Transkrip 8A)
- Export Coretax, e-Bupot PPh 21, laporan keuangan PDF

### Penggajian & BPJS
- 17 komponen gaji Indonesia, BPJS Kesehatan & Ketenagakerjaan (JKK, JKM, JHT, JP)
- PPh 21 TER (Januari-November) + rekonsiliasi Desember
- Slip gaji, bukti potong 1721-A1, employee self-service
- Scheduled payroll (auto-create monthly)

### Aset Tetap
- Depresiasi garis lurus & saldo menurun ganda
- Batch depreciation bulanan dengan auto journal entry
- Disposal: jual, write-off, transfer dengan gain/loss
- Jadwal penyusutan format DJP untuk SPT

### Inventori & Produksi
- Manajemen produk, kategori hierarki, unit of measure
- Metode penilaian: Weighted Average
- Bill of Materials (BOM), Production Order dengan cost accumulation
- Auto-COGS pada penjualan, laporan stok/pergerakan/profitabilitas produk

### Rekonsiliasi Bank
- Import mutasi CSV, parser konfigurabel per bank
- Auto-matching 3-pass: exact, fuzzy date, keyword
- Laporan rekonsiliasi

### Faktur & Tagihan
- Faktur (invoice) dengan lifecycle Draft → Sent → Paid
- Tagihan vendor (bill) dengan approval workflow
- Pelacakan pembayaran (parsial/lunas), aging piutang & hutang
- Laporan per klien & vendor (statement)

### Transaksi Berulang
- Template recurring dengan jadwal (harian, mingguan, bulanan, tahunan)
- Eksekusi otomatis via scheduler, riwayat eksekusi

### Smart Alerts
- 7 evaluator: kas rendah, piutang jatuh tempo, lonjakan biaya, margin proyek, konsentrasi klien
- Konfigurasi ambang batas, dedup 24 jam, widget dashboard

### Analisis AI
- Operasi harian via AI assistant (OAuth 2.0 Device Flow)
- Laporan analisis per industri (metrik, temuan, rekomendasi, risiko)
- REST API lengkap dengan OpenAPI 3.0 / Swagger UI

## Paket Industri

4 industry seed pack siap pakai (COA + template + data contoh):

| Industri | COA | Templates | Fitur Khusus |
|---|---|---|---|
| IT Services / Konsultan | 75 | 37 | Project tracking, milestone billing |
| Toko Online / Dagang | 80 | — | Inventori, COGS, multi-channel |
| Kedai Kopi / Manufaktur | 90 | 33 | BOM, Production Order |
| Kampus / Pendidikan | 87 | 31 | Pembayaran SPP, piutang mahasiswa |

## Stack Teknologi

| Layer | Teknologi |
|---|---|
| Runtime | Java 25 |
| Backend | Spring Boot 4.0, Spring Data JPA, Spring Security 7 |
| Frontend | Thymeleaf, HTMX 2.0, Alpine.js, Tailwind CSS 4 |
| Database | PostgreSQL 17 + Flyway |
| PDF | OpenPDF |
| API | REST + OAuth 2.0 Device Flow + OpenAPI 3.0 |
| Testing | JUnit 5, Testcontainers, Playwright (3500+ tests) |
| Security | SpotBugs/FindSecBugs (SAST), OWASP ZAP (DAST), SonarCloud, Codecov |
| DevOps | GitHub Actions, Pulumi (IaC), Ansible (config management) |

## Keamanan

- Content Security Policy (CSP) dengan nonce
- Rate limiting per IP, CSRF protection
- Enkripsi PII (AES-256-GCM), audit log keamanan
- RBAC — 30+ permissions, 6 roles
- OWASP ZAP DAST di CI, SpotBugs 0 issues
- GDPR / UU PDP compliance (DSAR export, data anonymization)

## Screenshots

### Dashboard

![Dashboard](/img/products/aplikasi-akunting/01-dashboard.png)

Dashboard utama dengan ringkasan keuangan, grafik, dan transaksi terbaru.

### Daftar Transaksi

![Daftar Transaksi](/img/products/aplikasi-akunting/02-transactions-list.png)

Daftar transaksi dengan filter status (Draft/Posted/Void) dan kategori.

### Form Transaksi

![Form Transaksi](/img/products/aplikasi-akunting/03-transactions-form.png)

Input transaksi berbasis template dengan kalkulasi otomatis.

### Bagan Akun

![Bagan Akun](/img/products/aplikasi-akunting/04-accounts-list.png)

Chart of Accounts dengan struktur kode PSAK.

### Template Jurnal

![Template Jurnal](/img/products/aplikasi-akunting/05-templates-list.png)

Template transaksi untuk berbagai jenis transaksi berulang.

## Dokumentasi

- **[Panduan Pengguna](https://artivisi.com/balaka/)** — 17 bab, auto-generated dengan screenshot
- **[Website Produk](https://balaka.id)** — Landing page dengan overview fitur dan teknologi
- **[Source Code](https://github.com/artivisi/balaka)** — Repository GitHub (Apache 2.0)
- **[SonarCloud](https://sonarcloud.io/project/overview?id=artivisi_aplikasi-akunting)** — Code quality & security
- **[Codecov](https://codecov.io/gh/artivisi/balaka)** — Test coverage
