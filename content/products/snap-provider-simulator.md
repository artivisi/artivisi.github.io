---
title: "SNAP Provider Simulator"
description: "Akses sandbox bank perlu pendaftaran dan persetujuan bank, dan developer tidak bisa mensimulasikan berbagai skenario gagal. Dengan simulator ini, pengujian signature, inquiry, payment, skenario gagal, dan rekonsiliasi pada aplikasi partner bisa dimulai tanpa menunggu akses tersebut."
icon: "/img/products/snap-provider-simulator/thumbnail.png"
weight: 6
---

> **Rilis 2026.10** — open source (Apache 2.0), image Docker siap pakai untuk linux/amd64 dan linux/arm64.

## Deskripsi Produk

SNAP Provider Simulator menjalankan sisi bank dari SNAP (Standar Nasional Open API Pembayaran) di komputer developer. Aplikasi yang menerima pembayaran Virtual Account, misalnya sistem tagihan kampus atau payment gateway, bisa diuji dari awal sampai akhir tanpa menunggu akses sandbox bank: meminta access token, memanggil API bank, lalu menerima inquiry dan notifikasi pembayaran dari bank.

Simulator meniru dua bank berdasarkan dokumentasi publik masing-masing:

| Bank | Cakupan |
|---|---|
| BRI | VA yang dikelola bank (create, update, inquiry, delete, inquiry status) dan BRIVA Online, yaitu bank memanggil aplikasi partner untuk inquiry dan payment |
| BCA | Virtual Account for Biller, yaitu bank memanggil aplikasi partner untuk inquiry dan payment flag, serta inquiry status |

Hal yang tidak dijelaskan dokumentasi publik bank mengikuti standar SNAP dari ASPI. Setiap keputusan interpretasi dicatat sebagai asumsi di repository.

## Fitur

### Onboarding Partner
- Pendaftaran mandiri: satu akun untuk satu aplikasi partner, satu koneksi untuk setiap bank
- Setiap koneksi mendapat prefix VA (partnerServiceId), client ID, dan client secret sendiri
- Key pair RSA dibuat di simulator, atau dibuat sendiri dengan openssl lalu public key diunggah
- Checklist onboarding mencatat setiap langkah yang sudah berhasil: key, token, panggilan bertanda tangan, VA, endpoint partner, inquiry, dan payment

### Validasi Seperti Bank
- Access token B2B dengan signature SHA256withRSA
- Signature HMAC-SHA512 pada setiap panggilan layanan
- Pemeriksaan X-TIMESTAMP dan keunikan X-EXTERNAL-ID per hari
- Path, header, field, dan kode respons mengikuti dokumentasi masing-masing bank

### Diagnostic Mode
Saat verifikasi signature gagal, simulator mengembalikan string-to-sign dan hash body yang diharapkan, ditambah petunjuk kesalahan yang paling sering terjadi: body belum di-minify, signature dikirim dalam format hex, query string ikut ditandatangani, atau prefix "Bearer" ikut masuk. Signature yang benar tidak pernah dikirim. Fitur ini tidak tersedia di bank sungguhan.

### Bank Memanggil Aplikasi Partner
- Simulasi nasabah membayar dari portal: bank meminta token ke aplikasi partner, mengirim inquiry, mencatat kredit di ledger, lalu mengirim notifikasi pembayaran
- Notifikasi bisa dikirim ulang dengan X-EXTERNAL-ID yang sama untuk menguji idempotensi
- Test connection untuk memeriksa endpoint partner sebelum simulasi pembayaran

### Error Injection
- Timeout setelah transaksi diproses, respons lambat, HTTP 500/502/503
- Signature salah, notifikasi terlambat, atau notifikasi tidak terkirim

### Rekonsiliasi
- Rekening koran harian (CSV) dari ledger bank
- Skenario rekonsiliasi siap pakai: notifikasi hilang, nominal berbeda, dan notifikasi ganda

### Exchange Log
Setiap panggilan masuk dan keluar tercatat lengkap: header, body, string-to-sign, dan respons.

## Cara Menjalankan

```bash
mkdir -p keys
for b in bri bca; do openssl genpkey -algorithm RSA -pkeyopt rsa_keygen_bits:2048 -out keys/$b-private.pem; done
chmod 644 keys/*.pem
curl -O https://raw.githubusercontent.com/artivisi/snap-provider-simulator/main/compose.yml
docker compose up -d
```

Portal tersedia di `http://localhost:9090/portal`. Image: `ghcr.io/artivisi/snap-provider-simulator:2026.10`, termasuk untuk Mac Apple Silicon.

## Kegunaan

- **Developer aplikasi partner** — menguji integrasi SNAP sebelum mendapat akses sandbox bank
- **Tim QA** — menjalankan skenario gagal yang sulit dipicu di sandbox bank
- **Pelatihan** — lab integrasi SNAP yang berjalan di laptop peserta

## Teknologi

- Java 25, Spring Boot 4.1
- PostgreSQL 18 + Flyway
- Thymeleaf + htmx
- Kriptografi dengan JDK, tanpa library tambahan
- Testcontainers + Playwright; setiap item spesifikasi ditautkan ke kode dan test

## Repository

- [artivisi/snap-provider-simulator](https://github.com/artivisi/snap-provider-simulator)
- Lisensi: Apache 2.0

Simulator ini meniru perilaku SNAP VA BRI dan BCA sesuai dokumentasi publik, dan tidak berafiliasi dengan atau didukung oleh PT Bank Rakyat Indonesia maupun PT Bank Central Asia.
