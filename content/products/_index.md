---
title: "Produk Kami"
description: "Platform keuangan institusional open source — payment gateway, disbursement, akunting, dan tanda tangan digital. On-premise, tanpa biaya per-transaksi."
---

## Aplikasi Production

Enam produk untuk operasional institusi. Semua open source (Apache 2.0), berjalan on-premise di infrastruktur klien. Komplementer namun modular: setiap produk berdiri sendiri dengan API-nya sendiri — deploy lengkap sebagai satu ekosistem, atau sebagian sesuai kebutuhan.

![Ekosistem Aplikasi Production](/img/products/product-ecosystem-production.svg)

**Produk Pembayaran & Piutang** — rantai uang masuk: sistem sumber menerbitkan piutang ke Account Receivable, ditagih via Payment Gateway ke bank, jurnalnya diposting ke buku besar. Klien memiliki hubungan langsung dengan bank, tanpa perantara.

| Produk | Fungsi |
|---|---|
| [Payment Gateway](/products/payment-gateway/) | Terima pembayaran Virtual Account multi-bank — adapter multi-protokol: SNAP, REST/JSON, SOAP/XML |
| [Account Receivable](/products/account-receivable/) | Subledger piutang — debitur, invoice, jadwal cicilan, aging, dunning, cash application |
| [Disbursement Platform](/products/disbursement-platform/) | Transfer batch ke banyak penerima — payroll, beasiswa, vendor, bansos |
| [SNAP Provider Simulator](https://github.com/artivisi/snap-provider-simulator) | Test double untuk produk payment — simulasi bank SP side |

**Produk Institusional** — aplikasi standalone yang terhubung langsung ke sistem klien. Tidak bergantung pada produk pembayaran.

| Produk | Fungsi |
|---|---|
| [Balaka](/products/aplikasi-akunting/) | Akunting, pajak (PPN, PPh, Coretax), payroll, inventori, produksi, rekonsiliasi bank, faktur |
| [Sawala](/products/sawala/) | Aplikasi sekolah Islam terpadu (SDIT/SMPIT) — akademik, ibadah harian, hafalan Quran, SPP |
| [Tawqi](/products/tawqi/) | Tanda tangan digital PDF berbasis PKI — kontrak, sertifikat, SK, ijazah |

Kombinasi mengikuti kebutuhan: institusi greenfield memakai rantai lengkap (Account Receivable + Payment Gateway + Balaka); yang sudah punya aplikasi billing sendiri memakai Payment Gateway langsung via Consumer API; yang sudah punya ERP/GL sendiri tetap bisa memakai Account Receivable — API jurnalnya generik, tidak terikat Balaka. Sawala adalah wedge vertikal segmen sekolah: billing SPP di Sawala, pembukuan di Balaka, penerimaan VA via Payment Gateway.

---

## Aplikasi Edukasi

Simulator ekosistem pembayaran untuk keperluan training dan pengembangan. Mereplikasi infrastruktur bank end-to-end dalam environment terisolasi.

![Ekosistem Aplikasi Edukasi](/img/products/product-ecosystem-education.svg)

| Produk | Fungsi |
|---|---|
| [Payment Simulator](/products/payment-simulator/) | Orchestrator — menjalankan seluruh ekosistem via Docker Compose |
| [HSM Simulator](https://github.com/artivisi/hsm-simulator) | Operasi kriptografi: PIN verification, key management, MAC generation |

---

## Status Pengembangan

| Produk | Status | Target |
|---|---|---|
| Balaka (Aplikasi Akunting) | **Production** — 20+ fase selesai, 3500+ tests, rilis 2026.03.3 | [balaka.id](https://balaka.id) |
| Sawala (Aplikasi Sekolah) | **Demo live** — Phase 0–3 selesai, 2 instance demo | [sdit.demo.sawala.artivisi.id](https://sdit.demo.sawala.artivisi.id) |
| Payment Simulator | Dalam pengembangan | Q2 2026 |
| Tawqi | Dalam pengembangan | Q2 2026 |
| Payment Gateway | **Pengembangan aktif** — adapter Maybank (SNAP), BSI (REST/JSON), CIMB (SOAP/XML); rekonsiliasi; admin UI + MFA | Deployment perdana: Yayasan Tazkia Cendekia |
| Account Receivable | **Pengembangan aktif** — core piutang, integrasi gateway, manual pengguna | 2026 |
| Disbursement Platform | Spesifikasi dari production app bank BUMN | Q4 2026 |

### Target Pengguna

- **Sekolah Islam & pesantren** — SDIT/SMPIT: akademik, ibadah harian, hafalan, SPP
- **Universitas** — SPP, registrasi, beasiswa, ijazah digital
- **Instansi pemerintah** — retribusi, pajak, bansos, dana desa, SK digital
- **Rumah sakit** — pembayaran pasien, klaim asuransi
- **Perusahaan besar** — payroll, vendor payment, laporan keuangan

---
