---
title: "Sawala"
description: "Aplikasi sekolah Islam terpadu (SDIT/SMPIT) white-label. Laravel + htmx + MySQL, PWA installable dengan absensi offline. Akademik, ibadah harian, hafalan Quran, SPP."
icon: "/img/products/sawala/thumbnail.png"
weight: 5
draft: false
---

> **Status: Phase 0–3 selesai** — sembilan modul MVP, panel admin Filament dengan
> billing SPP, galeri, dan profil self-service sudah berjalan. Dua instance demo
> live. Phase 4: integrasi payment gateway + posting jurnal ke Balaka.

## Deskripsi Produk

Sawala adalah aplikasi manajemen sekolah Islam terpadu (SDIT/SMPIT) **white-label**
— satu sekolah per deployment, tanpa multi-tenancy, sehingga setiap sekolah memegang
data dan brandingnya sendiri. Berbahasa Indonesia, web-first, installable sebagai
PWA. Online-first dengan dua perilaku offline yang disengaja: cache baca dan
antrian tulis absensi (guru tetap bisa mengabsen tanpa sinyal, data tersinkron
otomatis saat online kembali, endpoint idempoten sehingga replay tidak menduplikasi).

Dirancang untuk biaya operasional serendah mungkin: berjalan di shared hosting
cPanel biasa (PHP-FPM + MySQL + cron), tanpa proses long-running, tanpa WebSockets.
Jalur upgrade ke VPS/Octane terbuka tanpa perombakan kode.

- **Website Produk**: [sawala.artivisi.id](https://sawala.artivisi.id)
- **Demo SDIT kecil**: [sdit.demo.sawala.artivisi.id](https://sdit.demo.sawala.artivisi.id) — 6 kelas, 120 siswa
- **Demo yayasan SDIT+SMPIT**: [terpadu.demo.sawala.artivisi.id](https://terpadu.demo.sawala.artivisi.id) — 18 kelas, 360 siswa
- **Panduan Pengguna**: [artivisi.com/sawala](https://artivisi.com/sawala/) — 23 bab dengan screenshot
- **Source Code**: [github.com/artivisi/sawala](https://github.com/artivisi/sawala)
- **Lisensi**: Apache 2.0

Akun demo (kata sandi `demo`, data di-reset tiap malam): `bunda@cahayatauhid.sch.id`
(wali murid, 3 anak), `sari@cahayatauhid.sch.id` (guru wali kelas),
`admin@cahayatauhid.sch.id` (tata usaha, panel `/admin`). "Cahaya Tauhid" adalah
sekolah fiktif untuk demo — pada deployment nyata, nama dan identitas sekolah
mengikuti sekolah masing-masing.

## Modul

### Akademik
- **Absensi** — input satu-ketuk guru (H/S/I/A) dengan **antrian tulis offline**
  (IndexedDB, replay idempoten); tampilan wali/siswa: heatmap, ringkasan, log
- **Nilai & Raport** — input guru per mapel (keislaman + umum), peringkat kelas
- **Jadwal pelajaran** — harian/mingguan per kelas
- **Tugas & PR** — guru membuat tugas; siswa/wali melihat dan menandai selesai
- **Kalender kegiatan** — Masehi + Hijriah

### Ibadah & Quran
- **Mutaba'ah Yaumiyah** — checklist ibadah harian (sholat wajib/sunnah, tilawah,
  dzikir, adab) dengan streak
- **Hafalan Quran** — progres per surah Juz 30, riwayat setoran, nilai tajwid,
  status mutqin

### Komunikasi & Konten
- **Pengumuman** — feed berkategori, publikasi oleh admin/guru
- **Chat guru–wali** — polling htmx, tanpa WebSockets (kompatibel shared hosting)
- **Galeri foto** — album kegiatan kelas, media di object storage S3-compatible

### Administrasi
- **Panel admin Filament** — CRUD users, siswa, kelas, tahun ajaran, semester,
  mapel, tagihan, pembayaran, album
- **SPP** — tagihan + pembayaran per siswa/periode, status dihitung dari jumlah
  pembayaran terverifikasi
- **Konfirmasi manual SPP** — wali unggah bukti transfer, TU verifikasi satu klik
  di Filament (atau tolak dengan alasan); siap pilot tanpa dependensi payment gateway
- **Profil self-service** — ganti nama, email, kata sandi

## Batas Produk (by design)

Sawala sengaja hanya menangani permukaan operasional sekolah. Fungsi lain hidup
di produk sibling dan terhubung via REST API (Phase 4):

| Fungsi | Produk | Relasi |
|---|---|---|
| Pembukuan (CoA, payroll, pajak) | [Balaka](/products/aplikasi-akunting/) | POST jurnal saat pembayaran terverifikasi |
| Penerimaan pembayaran (VA) | [Payment Gateway](/products/payment-gateway/) | Klien HTTP + webhook |
| Kartu prabayar kantin/koperasi | Closed-loop wallet (roadmap) | Tampilan saldo read-only + handoff topup |

Tidak ada chart of accounts, payroll, atau modul pajak di Sawala — itu pekerjaan
Balaka. Tidak ada bundling Midtrans/Xendit/aggregator SaaS — koneksi bank lewat
payment gateway milik institusi sendiri, tanpa biaya per-transaksi ke pihak ketiga.

## Peran & Akses

| Peran | Cakupan |
|---|---|
| `wali` | Monitoring anak sendiri (multi-anak), input ibadah di rumah, unggah bukti SPP |
| `siswa` | Jadwal, tugas, hafalan, mutaba'ah milik sendiri |
| `guru` | Input absensi, setoran hafalan, nilai; chat dengan wali |
| `admin` | Panel Filament: master data + verifikasi pembayaran |

Otorisasi ditegakkan di service layer dan policies, bukan hanya di UI.

## Stack Teknologi

| Layer | Teknologi |
|---|---|
| Runtime | PHP 8.3+, Laravel |
| Frontend | Blade (SSR), htmx, Alpine.js (CSP build), Tailwind CSS |
| Admin | Filament |
| Database | MySQL / MariaDB, Eloquent + schema migrations |
| PWA | Service worker (stale-while-revalidate), IndexedDB outbox absensi |
| Media | Object storage S3-compatible |
| Queue/scheduler | Database driver + cron (shared hosting) atau Redis + Horizon (VPS) |
| Testing | Pest (feature + unit, MySQL asli via DatabaseTruncation), Playwright E2E, Larastan level max |

Arsitektur berlapis ketat: controller tipis → service (logika domain,
transport-agnostic) → Eloquent. Service layer yang sama akan melayani JSON `/api`
(Sanctum) untuk shell mobile native di Phase 4.

## Keamanan

- Content Security Policy ketat — `script-src 'self'`, tanpa `unsafe-eval`/`unsafe-inline`
- RBAC 4 peran, ditegakkan di service layer / policies
- CSRF bawaan framework, session-based auth
- Endpoint tulis idempoten (absensi, setoran hafalan) — replay offline tidak menduplikasi
- Uang dalam integer rupiah (minor units), tanpa float
- Prinsip no-fallback: konfigurasi/input wajib yang hilang gagal keras, tidak diam-diam memakai default

## Screenshots

### Beranda Wali

![Beranda Wali](/img/products/sawala/beranda-wali.png)

Ringkasan harian anak: kehadiran, jadwal, tugas, dengan pemilih multi-anak.

### Input Absensi Guru

![Input Absensi Guru](/img/products/sawala/absensi-guru.png)

Absensi satu-ketuk per siswa — tetap berfungsi tanpa sinyal, sinkron otomatis.

### Hafalan Quran

![Hafalan Quran](/img/products/sawala/hafalan-wali.png)

Progres hafalan per surah Juz 30 dengan riwayat setoran dan nilai tajwid.

### Mutaba'ah Yaumiyah

![Mutabaah](/img/products/sawala/mutabaah-wali.png)

Checklist ibadah harian dengan streak — diisi siswa/wali, terpantau guru.

### Tagihan SPP (Wali)

![SPP Wali](/img/products/sawala/spp-wali.png)

Status tagihan per anak; wali unggah bukti transfer langsung dari sini.

### Verifikasi Pembayaran (Admin)

![Verifikasi Pembayaran](/img/products/sawala/admin-pembayarans-queue.png)

Antrian verifikasi bukti transfer di panel Filament — satu klik verifikasi/tolak.

## Harga

Semua fitur di setiap paket. Harga per sekolah, bukan per pengguna — seluruh
guru, wali, dan siswa termasuk. Lisensi software Rp 0 (Apache 2.0); biaya
mencakup hosting, implementasi, dan support.

| Paket | Ukuran | Harga |
|---|---|---|
| Tunas | ≤ 150 siswa | Rp 199.000/bulan |
| Madya | ≤ 400 siswa | Rp 399.000/bulan |
| Utama | > 400 siswa, VPS dedicated | Rp 799.000/bulan |

- Diskon tahunan: bayar 10 bulan, dapat 12.
- Setup & implementasi (import data, pelatihan, go-live): Rp 2,5–7,5 juta sekali bayar.
- **Self-host**: gratis selamanya — berjalan di shared hosting cPanel biasa.
- **Paket Yayasan** (≥ 2 unit + Balaka) dan **jaringan sekolah**: lihat [sawala.artivisi.id/mitra](https://sawala.artivisi.id/mitra.html).
- **Program Sekolah Binaan**: gratis untuk sekolah dengan SPP ≤ Rp 150 ribu/bulan atau yang beroperasi dari dana BOS — kuota terbatas, seleksi via WhatsApp.

## Dokumentasi

- **[Website Produk](https://sawala.artivisi.id)** — fitur, harga, pitch deck
- **[Panduan Pengguna](https://artivisi.com/sawala/)** — 23 bab per peran (TU, guru, wali, siswa), auto-generated dengan screenshot
- **[Source Code](https://github.com/artivisi/sawala)** — Repository GitHub (Apache 2.0)
- **[Demo SDIT](https://sdit.demo.sawala.artivisi.id)** / **[Demo Terpadu](https://terpadu.demo.sawala.artivisi.id)** — reset otomatis tiap malam
