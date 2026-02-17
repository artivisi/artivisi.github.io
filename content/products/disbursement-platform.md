---
title: "Disbursement Platform"
description: "Platform disbursement on-premise untuk transfer batch ke banyak penerima. Payroll, beasiswa, vendor payment dengan maker-checker, retry otomatis, dan rekonsiliasi."
icon: "/img/products/disbursement-platform/thumbnail.png"
weight: 3
---

> **Coming Q3 2026** — Produk ini sedang dalam pengembangan. Dibangun dari pengalaman production app disbursement BNI yang sudah berjalan.

## Deskripsi Produk

Platform disbursement on-premise untuk transfer dana keluar secara batch ke banyak penerima. Berjalan di infrastruktur klien, terhubung langsung ke bank via [SNAP API](https://www.bi.go.id/id/layanan/standar/snap/default.aspx) dan BI-FAST. Dirancang untuk skenario seperti payroll, beasiswa, vendor payment, dan bantuan sosial.

Keunggulan utama: domain knowledge dari aplikasi disbursement BNI yang sudah berjalan di production. Edge case, retry logic, dan bank API quirk sudah teruji — platform baru dibangun dari nol dengan arsitektur multi-bank.

## Fitur yang Direncanakan

### Disbursement API
- **Single transfer** — Transfer satu penerima via REST API
- **Batch transfer** — Upload daftar penerima via API atau CSV/Excel
- **Scheduled execution** — Jadwalkan eksekusi di waktu tertentu
- **Status tracking** — Per-item status: PENDING → APPROVED → PROCESSING → SUCCESS / FAILED

### Execution Engine
- Batch processing dengan rate limiting per bank
- Idempotency — aman untuk retry tanpa double-disbursement
- Partial failure handling — transfer yang sukses tidak di-rollback
- Circuit breaker — jika API bank down, pause dan retry otomatis

### Approval Workflow (Maker-Checker)
- **Maker** membuat batch disbursement
- **Checker** review dan approve (bisa reject per-item atau seluruh batch)
- Approval multi-level berdasarkan jumlah
- Audit trail: siapa, kapan, dari IP mana

### Rule Engine
- Routing otomatis: intrabank transfer vs BI-FAST berdasarkan bank penerima
- Threshold rules: RTGS untuk jumlah besar, BI-FAST untuk jumlah kecil
- Retry rules: berapa kali retry, interval antar retry
- Split rules: batch besar dipecah untuk rate limiting

### Bank Adapters
- BNI (dari pengalaman production)
- BCA, Mandiri, BRI
- BI-FAST untuk transfer antar bank real-time
- SNAP API compliant

### Rekonsiliasi & Reporting
- Matching record disbursement dengan mutasi bank
- Deteksi discrepancy
- Laporan harian, bulanan, per-departemen
- Export CSV, Excel, PDF

### Admin Dashboard
- Daftar batch dengan status (pending approval, processing, completed, partial failure)
- Detail per-batch: daftar penerima dengan status individual
- Antrian approval untuk checker
- Kalender disbursement (jadwal batch mendatang)
- Daftar transaksi gagal dengan one-click retry

## Use Case

| Skenario | Penerima | Frekuensi |
|---|---|---|
| Payroll / gaji | Karyawan | Bulanan |
| Beasiswa | Mahasiswa | Bulanan / semesteran |
| Vendor payment | Supplier | Per invoice |
| Bantuan sosial (bansos) | Masyarakat | Bulanan / triwulanan |
| Dana desa | Desa | Triwulanan |
| Freelance / gig worker | Kontraktor | Mingguan |

## Teknologi

- Java 25, Spring Boot 4.0
- PostgreSQL 18
- Bouncy Castle untuk SNAP signature
- Thymeleaf + Tailwind CSS + HTMX untuk dashboard
- Docker Compose untuk deployment

## Hubungan dengan Payment Gateway

Disbursement Platform adalah pelengkap [SNAP Payment Gateway](/products/snap-payment-gateway/):

- **Gateway** mengumpulkan uang masuk (collection): VA, QRIS, Direct Debit
- **Disbursement** mengirim uang keluar (payout): payroll, beasiswa, vendor

Keduanya berbagi SNAP API client layer dan bank adapter pattern. Deploy bersama untuk solusi pembayaran lengkap — uang masuk dan uang keluar dalam satu platform.

## Repository

Repository akan tersedia di GitHub setelah pengembangan dimulai. Lisensi: Apache 2.0.
