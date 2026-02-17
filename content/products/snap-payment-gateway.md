---
title: "SNAP Payment Gateway"
description: "Payment gateway on-premise open source berbasis SNAP API Bank Indonesia. Virtual Account multi-bank, QRIS, rekonsiliasi otomatis. Zero biaya per-transaksi."
icon: "/img/products/snap-payment-gateway/thumbnail.png"
weight: 1
---

> **Coming Q3 2026** — Produk ini sedang dalam pengembangan. Repository: [artivisi/snap-payment-gateway](https://github.com/artivisi/snap-payment-gateway)

## Deskripsi Produk

Payment gateway on-premise yang berjalan di infrastruktur klien. Terhubung ke berbagai bank melalui [SNAP API Bank Indonesia](https://www.bi.go.id/id/layanan/standar/snap/default.aspx), menyediakan satu REST API untuk semua operasi pembayaran. Klien memiliki hubungan langsung dengan bank — tanpa perantara, tanpa biaya per-transaksi ke pihak ketiga.

## Perbedaan dengan SaaS Payment Gateway

| Aspek | Gateway Ini (On-Premise) | Midtrans / Xendit / DOKU (SaaS) |
|---|---|---|
| Deployment | Infrastruktur klien | Cloud vendor |
| Biaya per-transaksi | Tidak ada (klien bayar langsung ke bank) | Rp 1.500–4.000+ per transaksi |
| Hubungan bank | Klien kontrak langsung dengan tiap bank | Vendor yang pegang hubungan bank |
| Kepemilikan data | Milik klien sepenuhnya | Data di infrastruktur vendor |
| Source code | Open source (Apache 2.0) | Proprietary |

## Fitur yang Direncanakan

### Unified Payment API
- **Virtual Account** — Multi-bank VA (BNI, BCA, Mandiri, BRI)
- **QRIS (MPM)** — QR code sesuai standar Bank Indonesia
- **Direct Debit** — Penarikan dari rekening nasabah (BI-FAST)
- Satu format request/response untuk semua channel dan semua bank

### Notification Handler
- Menerima callback pembayaran dari bank
- Validasi signature SNAP
- Forward ke webhook aplikasi klien

### Rekonsiliasi Otomatis
- Matching data settlement bank dengan record internal
- Deteksi discrepancy: dibayar di bank tapi tidak ternotifikasi, selisih jumlah
- Laporan rekonsiliasi harian

### SNAP Client Layer
- Asymmetric signature (SHA256withRSA) untuk access token
- Symmetric signature (HMAC-SHA512) untuk API calls
- OAuth 2.0 token lifecycle
- mTLS client certificate management

### Bank Adapters
- Konfigurasi per-bank untuk handling perbedaan implementasi SNAP
- Endpoint sandbox vs production
- Error code mapping
- Format VA number per bank

### Admin Dashboard
- Daftar transaksi dengan search dan filter
- Status pembayaran real-time
- Status rekonsiliasi dan alert discrepancy
- Laporan settlement harian dan bulanan
- Status koneksi bank
- Audit trail

## Teknologi

- Java 25, Spring Boot 4.0
- PostgreSQL 18
- Bouncy Castle untuk operasi kriptografi SNAP
- Thymeleaf + Tailwind CSS + HTMX untuk dashboard
- Docker Compose untuk deployment
- WireMock + [SNAP Provider Simulator](https://github.com/artivisi/snap-provider-simulator) untuk testing

## Target Pengguna

- **Universitas** — pembayaran SPP, registrasi, ujian dari ribuan mahasiswa
- **Instansi pemerintah** — retribusi, pajak, perizinan
- **Rumah sakit** — pembayaran pasien multi-channel
- **Perusahaan besar** — volume transaksi tinggi yang membuat biaya SaaS mahal

## Repository

- Gateway: [artivisi/snap-payment-gateway](https://github.com/artivisi/snap-payment-gateway)
- SP Simulator: [artivisi/snap-provider-simulator](https://github.com/artivisi/snap-provider-simulator)
- Lisensi: Apache 2.0
