---
title: "Payment Gateway"
description: "Payment gateway Virtual Account multi-bank, self-hosted. Satu API untuk semua bank — adapter multi-protokol SNAP, REST/JSON, dan SOAP/XML. Rekonsiliasi settlement otomatis, tanpa biaya per-transaksi ke perantara."
icon: "/img/products/payment-gateway/thumbnail.png"
weight: 1
aliases:
  - /products/snap-payment-gateway/
---

> **Pengembangan aktif.** Tiga adapter bank pertama (Maybank, BSI, CIMB), API consumer, rekonsiliasi, dan admin UI sudah terbangun. Repository: [artivisi/payment-gateway](https://github.com/artivisi/payment-gateway)

## Deskripsi Produk

Payment gateway Virtual Account (VA) multi-bank yang berjalan di infrastruktur klien sendiri. Aplikasi klien integrasi satu kali ke API terpadu; di belakangnya, adapter per bank berbicara dengan protokol masing-masing bank — [SNAP](https://www.bi.go.id/id/layanan/standar/snap/default.aspx), REST/JSON proprietary, maupun SOAP/XML. Klien memegang sendiri hubungan bank dan rekening penampungan; gateway tidak pernah memegang dana.

## Masalah yang Diselesaikan

Institusi yang menagih via VA (kampus, rumah sakit, yayasan) selama ini memilih antara:

- **Aggregator SaaS** — biaya per-transaksi pada setiap penagihan. Untuk nominal skala pendidikan (SPP, uang gedung), biaya tersebut besar secara absolut.
- **Integrasi langsung per bank** — satu integrasi terpisah dengan bentuk berbeda untuk tiap bank, tanpa rekonsiliasi terpadu lintas bank.

Gateway ini menyediakan satu API untuk banyak bank, self-hosted, tanpa biaya perantara — hanya biaya bank itu sendiri — dengan satu tampilan rekonsiliasi.

| Aspek | Gateway Ini (Self-Hosted) | Midtrans / Xendit / DOKU (SaaS) |
|---|---|---|
| Deployment | Infrastruktur klien | Cloud vendor |
| Biaya per-transaksi | Tidak ada (hanya biaya bank) | Rp 1.500–4.000+ per transaksi |
| Hubungan bank | Klien kontrak langsung dengan tiap bank | Vendor yang pegang hubungan bank |
| Kepemilikan data | Milik klien sepenuhnya | Data di infrastruktur vendor |
| Protokol bank | SNAP + REST/JSON + SOAP/XML | Tergantung vendor |
| Source code | Open source (Apache 2.0) | Proprietary |

## Cakupan

- **Channel:** Virtual Account, penagihan masuk (inbound collection).
- **Bank saat peluncuran:** Maybank (SNAP/REST), BSI (REST/JSON proprietary), CIMB (SOAP/XML).
- **Di luar cakupan:** QRIS (MDR persentase tidak ekonomis untuk nominal skala pendidikan — tarif flat VA lebih sesuai), disbursement keluar (produk terpisah), kartu kredit, e-wallet.

## Model Tagihan (Charge)

Satu **charge** = satu tagihan — satu nominal yang terutang oleh satu pembayar:

- **Open** — persisten, nominal bebas, menerima pembayaran berulang.
- **Closed** — nominal tetap, sekali bayar, tertutup saat lunas.
- **Installment** — pembayaran berulang terakumulasi sampai nominal target.

## Bayar Lewat Bank Mana Saja

Satu charge dapat dibayar melalui **1..N virtual account kembar**, satu per bank tujuan. Pembayar melunasi di bank mana pun yang nyaman, dan gateway yang menjaga invarian satu-utang — aplikasi consumer tidak perlu mengimplementasikan sendiri pencegahan pembayaran ganda:

- **Closed** — pembayaran penuh pertama menandai charge lunas dan membatalkan semua VA kembarnya.
- **Open / Installment** — pembayaran berbagi satu saldo kumulatif lintas VA kembar; pembayaran parsial di satu bank mengurangi sisa tagihan di bank lain.
- Pelunasan ganda yang nyaris bersamaan di dua bank ditandai sebagai discrepancy overpayment untuk refund di luar jalur — tidak pernah diterima diam-diam.

## Dua Model Hosting VA

Dipilih per rekening penampungan (escrow), keduanya didukung:

- **Gateway-hosted** — registry VA di gateway. Bank memanggil gateway untuk resolve nomor VA (inquiry) dan mengirim notifikasi pembayaran.
- **Bank-hosted** — registry VA di bank. Gateway mendaftarkan tiap VA ke bank saat dibuat; bank memvalidasi pembayaran terhadap record-nya sendiri.

Nomor VA dihitung oleh aplikasi consumer (sesuai kebijakan masing-masing — misalnya diturunkan dari NIM). Gateway memvalidasi nomor terhadap ruang nomor rekening escrow dan ketersediaannya, lalu meregistrasikannya.

## Rekonsiliasi

Cross-check akhir hari antara pembayaran tercatat dan settlement aktual bank, per rekening escrow: mencocokkan tiap kredit ke pembayaran, memulihkan notifikasi yang hilang (terbayar tapi tidak ternotifikasi), dan menandai selisih nominal, duplikat, serta kredit tak tercocokkan. Impor settlement via CSV dari portal cash-management bank. Pelaporan per escrow dan per grouping institusi.

## Admin & Keamanan

- Admin UI: kelola escrow, consumer, charge/pembayaran, rekonsiliasi, webhook, operator, audit log.
- Akun operator dengan role berbasis permission (ADMIN / OPERATOR / AUDITOR bawaan + custom role runtime).
- TOTP MFA wajib untuk semua operator; ganti password paksa + enrolment MFA pada login pertama.
- IP allowlist per bank untuk endpoint callback.
- Tidak ada kredensial default — admin pertama di-seed dari konfigurasi wajib; aplikasi menolak start jika konfigurasi tidak lengkap.
- Setiap aksi teraudit mencatat operator yang terautentikasi. Baseline kontrol selaras PCI-DSS (aplikasi di luar scope PCI — tidak ada data kartu).

## Integrasi dengan Produk Lain

Consumer gateway biasanya bukan aplikasi ujung, melainkan sistem piutang — misalnya [Account Receivable](/products/account-receivable/) — yang menampung tagihan dari sistem sumber, membuka charge per piutang, dan mengaplikasikan kas yang tertagih. Aplikasi apa pun juga bisa mengonsumsi API-nya langsung. Jurnal hasil penagihan diposting ke buku besar — referensi: [Balaka](/products/aplikasi-akunting/).

## Rekam Jejak Produksi

Enam integrasi VA bank telah dibangun dan berjalan produksi untuk dua klien: **PTB/IIK** (logistik pelabuhan nasional — BCA SNAP, Mandiri, BNI) dan **Yayasan Tazkia Cendekia** (dua kampus — BSI, CIMB, Maybank). Deployment gateway terpadu pertama berjalan di Yayasan Tazkia Cendekia: kanal BSI dan CIMB yang lama dibangun ulang ke atas gateway, ditambah kanal Maybank SNAP baru — memproses pembayaran registrasi, SPP, dan uang gedung dengan rekonsiliasi otomatis lintas dua kampus.

## Teknologi

- Java 25, Spring Boot 4
- PostgreSQL 18 + Flyway
- Spring Security (auth operator, TOTP MFA)
- Thymeleaf + HTMX + Tailwind (admin)
- Testcontainers + RestAssured + Playwright + [SNAP Provider Simulator](https://github.com/artivisi/snap-provider-simulator) (test)

## Repository

- Gateway: [artivisi/payment-gateway](https://github.com/artivisi/payment-gateway)
- SP Simulator: [artivisi/snap-provider-simulator](https://github.com/artivisi/snap-provider-simulator)
- Lisensi: Apache 2.0
