---
title: "Account Receivable"
description: "Subledger piutang operasional — debitur, invoice, jadwal cicilan, aging, dunning, cash application. Menagih via payment gateway, memposting jurnal ke buku besar."
icon: "/img/products/account-receivable/thumbnail.png"
weight: 2
---

> **Pengembangan aktif.** Core piutang, integrasi payment gateway, dan manual pengguna sudah terbangun.

## Deskripsi Produk

Aplikasi manajemen piutang (Accounts Receivable) generik — **subledger** yang mencatat siapa berutang apa, menagihnya melalui rail pembayaran, dan memposting jurnal hasilnya ke buku besar. Posisinya di antara penagihan dan pembukuan:

**Sistem sumber** (akademik, registrasi, penjualan) → **Account Receivable** → tagih via [Payment Gateway](/products/payment-gateway/), jurnal ke **buku besar** (referensi: [Balaka](/products/aplikasi-akunting/)).

## Yang Dikelola

- **Debitur** — master data pihak yang berutang.
- **Invoice** dengan line items, tipe invoice (membawa mapping akun pendapatan di GL), dan siklus hidup: open → partially paid → paid → overdue → written off. Overdue dihitung dari tanggal jatuh tempo, bukan status tersimpan — invoice bisa sekaligus terbayar sebagian *dan* terlambat.
- **Jadwal cicilan** — satu invoice → banyak installment dengan jatuh tempo dan nominal masing-masing.
- **Aging & dunning** — laporan umur piutang, statement, dan penagihan berjenjang (channel notifikasi pluggable per deployment).
- **Cash application** — mengaplikasikan pembayaran masuk ke invoice/installment, idempoten terhadap referensi pembayaran gateway.
- Nominal invoice terbit bersifat **immutable** — koreksi lewat credit note/adjustment dengan jurnalnya sendiri, bukan edit.

## Batasan yang Disengaja

- **Bukan buku besar.** Chart of accounts, laporan keuangan, dan akun kontrol A/R ada di GL; aplikasi ini memposting jurnal ke sana dan menyimpan detail per debitur.
- **Bukan payment gateway.** Nomor VA, adapter bank, dan settlement adalah urusan gateway; aplikasi ini membuka charge dan menerima webhook pembayaran.
- **Bukan sistem billing akademik.** Asal piutang adalah urusan sistem sumber; deployment spesifik (misalnya kampus) masuk lewat lapisan adapter tipis, bukan ke dalam engine.

## Integrasi

- **Penagihan** — consumer dari [Payment Gateway](/products/payment-gateway/): satu charge per invoice atau per installment; webhook pembayaran → cash application idempoten. Bayar-lewat-bank-mana-saja ditangani gateway.
- **Buku besar** — memposting jurnal double-entry via API: invoice terbit → Dr Piutang · Cr Pendapatan; penerimaan → Dr Kas · Cr Piutang; write-off → Dr Beban Piutang · Cr Piutang. Kegagalan posting tidak pernah hilang diam-diam — antre dan retry (transactional outbox).
- **Notifikasi** — outbox ke hub notifikasi untuk email/SMS dunning.

## Dua Lapis Rekonsiliasi

1. **Cash application** — setiap pembayaran dari gateway mendarat di piutang.
2. **Subledger ↔ GL** — total outstanding subledger sama dengan saldo akun kontrol A/R di buku besar.

(Rekonsiliasi settlement bank ↔ pembayaran adalah urusan gateway.)

## Teknologi

- Java 25, Spring Boot 4
- PostgreSQL 18 + Flyway
- Thymeleaf + HTMX + Tailwind (admin)
- Testcontainers + RestAssured + Playwright (test)

## Lisensi

Apache 2.0 — sama seperti seluruh lini produk Artivisi.
