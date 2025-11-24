---
title: "Aplikasi Akunting"
description: "Sistem akunting berbasis web untuk UMKM Indonesia dengan fitur compliance pajak dan manajemen proyek."
icon: "/img/products/aplikasi-akunting/thumbnail.png"
weight: 5
draft: false
---

> **Status: Dalam Pengembangan** - Aplikasi ini masih dalam tahap pengembangan aktif. Dokumentasi dan fitur dapat berubah sewaktu-waktu.

## Deskripsi Produk

Sistem akunting berbasis web yang dirancang khusus untuk UMKM Indonesia, freelancer, dan penjual online. Aplikasi ini menggabungkan kemudahan penggunaan dengan kepatuhan pajak Indonesia melalui desain transaction-centric yang menangani pembukuan double-entry secara otomatis.

## Target Pengguna

- Perusahaan jasa IT dan konsultan
- Studio fotografi dan videografi pernikahan
- Penjual online di marketplace (Tokopedia, Shopee, Bukalapak)

Pengguna tipikal memiliki pengetahuan akuntansi minimal dan mungkin merupakan staf junior yang mengelola pembukuan untuk beberapa klien.

## Fitur Utama

### Manajemen Transaksi
Form sederhana menggantikan jurnal tradisional dengan pembukuan otomatis yang proper. Template jurnal untuk berbagai kategori transaksi (Pendapatan, Pengeluaran, Pembayaran, Penerimaan, Transfer) dengan dukungan formula kalkulasi seperti PPN.

### Kepatuhan Pajak
- Kalkulasi PPN otomatis
- Dukungan berbagai jenis PPh (21, 23, 4(2), 25, 29)
- Integrasi e-Faktur (roadmap)

### Akuntansi Proyek
Tag dan lacak profitabilitas per proyek dengan dukungan milestone billing dan deposit klien.

### Inventori
Model beli/jual sederhana dengan tracking stok dan kalkulasi HPP (FIFO atau average cost).

### Manajemen Dokumen
Lampirkan kwitansi dan faktur dengan cloud storage yang mendukung retensi 10 tahun sesuai ketentuan pajak Indonesia.

### Pelaporan
- Laporan Laba Rugi
- Neraca
- Arus Kas
- Export ke Excel/PDF

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
| Database | PostgreSQL 17 |
| Document Storage | MinIO |
| Testing | JUnit 5, Testcontainers, Playwright |

Aplikasi menggunakan arsitektur monolitik untuk mengurangi kompleksitas dan menghindari duplikasi validasi antara backend dan frontend.

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

- **PSAK Compliant**: Struktur akun sesuai standar akuntansi Indonesia
- **Tax Ready**: Siap untuk pelaporan pajak Indonesia
- **User Friendly**: Desain transaction-centric untuk pengguna non-akuntan
- **Audit Trail**: Logging lengkap untuk semua transaksi
- **Document Retention**: Penyimpanan dokumen sesuai ketentuan pajak 10 tahun
- **Open Source**: Lisensi AGPL-3.0

## Use Cases

- **UMKM**: Pembukuan sederhana dengan compliance pajak
- **Freelancer**: Tracking pendapatan dan pengeluaran per proyek
- **Online Seller**: Manajemen penjualan dari berbagai marketplace
- **Konsultan**: Pengelolaan multiple klien dengan project accounting

## Dokumentasi

- [User Manual](https://artivisi.com/aplikasi-akunting/)
- [Source Code (GitHub)](https://github.com/artivisi/aplikasi-akunting)

## Lisensi

AGPL-3.0 - modifikasi harus dibagikan dengan lisensi yang sama.
