---
title: "Produk Kami"
description: "Platform keuangan institusional open source — payment gateway, disbursement, akunting, dan tanda tangan digital. On-premise, tanpa biaya per-transaksi."
---

## Aplikasi Production

Empat produk untuk operasional institusi. Semua open source (Apache 2.0), berjalan on-premise di infrastruktur klien. Setiap produk bisa di-deploy terpisah atau dikombinasikan.

![Ekosistem Aplikasi Production](/img/products/product-ecosystem-production.svg)

**Produk Pembayaran** — terhubung ke bank via [SNAP API Bank Indonesia](https://www.bi.go.id/id/layanan/standar/snap/default.aspx). Klien memiliki hubungan langsung dengan bank, tanpa perantara.

| Produk | Fungsi |
|---|---|
| [SNAP Payment Gateway](/products/snap-payment-gateway/) | Terima pembayaran via Virtual Account dan QRIS dari berbagai bank |
| [Disbursement Platform](/products/disbursement-platform/) | Transfer batch ke banyak penerima — payroll, beasiswa, vendor, bansos |
| [SNAP Provider Simulator](https://github.com/artivisi/snap-provider-simulator) | Test double untuk produk payment — simulasi bank SP side |

**Produk Institusional** — aplikasi standalone yang terhubung langsung ke sistem klien. Tidak bergantung pada produk pembayaran.

| Produk | Fungsi |
|---|---|
| [Balaka](/products/aplikasi-akunting/) | Akunting, pajak (PPN, PPh, Coretax), payroll, inventori, produksi, rekonsiliasi bank, faktur |
| [Tawqi](/products/tawqi/) | Tanda tangan digital PDF berbasis PKI — kontrak, sertifikat, SK, ijazah |

Gateway dan Disbursement berbagi SNAP API client layer dan bank adapter. Akunting dan Tawqi terhubung langsung ke aplikasi klien — tidak bergantung pada produk pembayaran.

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
| Payment Simulator | Dalam pengembangan | Q2 2026 |
| Tawqi | Dalam pengembangan | Q2 2026 |
| SNAP Payment Gateway | Repo initialized, README complete | Q3 2026 |
| Disbursement Platform | Spesifikasi dari production app BNI | Q3 2026 |

### Target Pengguna

- **Universitas** — SPP, registrasi, beasiswa, ijazah digital
- **Instansi pemerintah** — retribusi, pajak, bansos, dana desa, SK digital
- **Rumah sakit** — pembayaran pasien, klaim asuransi
- **Perusahaan besar** — payroll, vendor payment, laporan keuangan

---
