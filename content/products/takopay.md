---
title: "Takopay"
description: "Payment gateway on-premise dengan dukungan Virtual Account, QRIS, SNAP API, kartu kredit/debit, dan e-wallet untuk institusi yang membutuhkan kontrol penuh atas infrastruktur pembayaran."
icon: "/img/products/takopay/thumbnail.png"
weight: 2
---

## Deskripsi Produk

Payment gateway on-premise yang memberikan kontrol penuh kepada institusi atas infrastruktur pembayaran mereka. Mendukung penerimaan pembayaran melalui Virtual Account, QRIS, kartu kredit/debit, dan e-wallet dengan integrasi SNAP API ke berbagai bank.

## Fitur Utama

### Payment Channels
- **Virtual Account** — Multi-bank VA generation dan reconciliation
- **QRIS** — QR code payment sesuai standar Bank Indonesia
- **Kartu Kredit/Debit** — Pemrosesan kartu dengan BouncyCastle encryption
- **E-Wallet** — Integrasi dompet digital

### Payment Operations
- **Disbursement** — Pemrosesan pembayaran keluar (payroll, vendor)
- **Remittance** — Transfer dana domestik dan internasional
- **SNAP API Integration** — Koneksi langsung ke bank via Standar Nasional Open API Pembayaran
- **Real-time monitoring** — Dashboard transaksi dan reconciliation

## Teknologi yang Digunakan

**Framework & Bahasa:**
- Spring Boot 3.2.1
- Java 21

**Database:**
- PostgreSQL
- FlywayDB (migrasi)

**Templating & Security:**
- Thymeleaf dengan extensions (Layout Dialect, Spring Data, Spring Security)
- Spring Security
- JWT authentication (JJWT)

**Pemrosesan Data:**
- Jackson (JSON/XML)
- OpenCSV
- BouncyCastle

**Tools Tambahan:**
- Apache HttpClient 5
- UA-Parse
- Jakarta XML Bind
- Spring Boot Validation

**Pengembangan:**
- Maven build tool
- Git version control
- Lombok
- Spring Boot testing framework

## Screenshots

![Verification Data](/img/products/takopay/01-verification.png)

![Report Payout](/img/products/takopay/02-report-payout.png)

![Account Balance](/img/products/takopay/03-account-balance.png)

![Profile Mitra](/img/products/takopay/04-profile-mitra.png)

![Merchant Gateway Registry](/img/products/takopay/05-merchant-gateway.png)
