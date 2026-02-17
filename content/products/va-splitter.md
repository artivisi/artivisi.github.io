---
title: "VA Splitter & Disbursement"
description: "Platform split payment otomatis dari Virtual Account dan bulk disbursement multi-bank via SNAP API untuk payroll, beasiswa, dan vendor payment."
icon: "/img/products/va-splitter/thumbnail.png"
weight: 1
---

## Deskripsi Produk

Platform pengelolaan dana yang mengotomatisasi alokasi pembayaran masuk dari Virtual Account ke berbagai rekening tujuan, serta pemrosesan disbursement massal ke multi-bank via SNAP API dan BI-FAST.

## Fitur Utama

### VA Splitter
- Distribusi dana otomatis dari Virtual Account berdasarkan aturan yang dikonfigurasi
- Rule-based splitting untuk multi-pihak (universitas: SPP → fakultas, rektorat, yayasan)
- Real-time notification saat dana masuk dan terdistribusi

### Bulk Disbursement
- **Batch Transfer** — Upload massal via CSV/API ke berbagai bank
- **Multi-Bank Support** — Transfer via SNAP API dan BI-FAST
- **Scheduling** — Penjadwalan disbursement berkala (payroll bulanan, beasiswa per semester)
- **Maker-Checker Workflow** — Multi-level approval sebelum eksekusi transfer

### Monitoring & Reconciliation
- Real-time status tracking per transaksi
- Automatic retry untuk transaksi gagal
- Reconciliation report harian
- Audit trail lengkap untuk setiap disbursement

## Teknologi yang Digunakan

**Stack Utama:**
- Java 21 dan Spring Boot 3.3.3

**Komponen Kunci:**
- Database PostgreSQL dengan tools migrasi Flyway
- Spring Security dengan autentikasi OAuth 2.0
- Apache POI dan Super CSV untuk pemrosesan data
- Template engine Thymeleaf dan FreeMarker
- Spring Integration untuk transfer file FTP/SFTP

**Tools Pengembangan:**
- Maven build system dengan Spring Boot plugins
- Git version control
- Spring Boot testing framework dengan Lombok utilities

## Screenshots

![Dashboard Kredit](/img/products/va-splitter/01-dashboard-kredit.png)

![User Admin](/img/products/va-splitter/02-user-admin.png)

![Role Permission](/img/products/va-splitter/03-role-permission.png)

![Report Billing Data](/img/products/va-splitter/04-report-billing.png)

![Kredit Transaksi](/img/products/va-splitter/05-transaksi.png)

![Konfigurasi Splitter](/img/products/va-splitter/06-konfigurasi.png)

![Client Partner](/img/products/va-splitter/07-client-partner.png)
