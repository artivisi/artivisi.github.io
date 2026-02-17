---
title: "Payment Ecosystem Simulator"
description: "Simulator ekosistem pembayaran lengkap untuk training lab, mencakup ATM, POS, payment switch, issuer, acquirer, dan HSM."
icon: "/img/products/payment-simulator/thumbnail.png"
weight: 6
---

> **Coming Q2 2026** — Produk ini sedang dalam pengembangan.

## Deskripsi Produk

Simulator ekosistem pembayaran yang mereplikasi infrastruktur payment end-to-end untuk keperluan training dan pengembangan. Peserta training dapat mengoperasikan seluruh komponen payment ecosystem — dari terminal (ATM/POS) hingga issuer bank — dalam environment yang terisolasi.

## Fitur yang Direncanakan

### Komponen Simulator
- **Terminal Simulator** — ATM, POS, dan mobile payment terminal
- **Acquirer System** — Pemrosesan transaksi dari sisi merchant bank
- **Payment Switch** — Routing dan switching transaksi antar bank
- **Issuer System** — Otorisasi dan settlement dari sisi penerbit kartu
- **HSM Simulator** — Operasi kriptografi (key management, PIN verification, MAC generation)

### Training Scenarios
- Balance inquiry dan cash withdrawal flow
- QRIS payment dari scan sampai settlement
- Key ceremony dan key rotation procedure
- Troubleshooting transaksi gagal (timeout, declined, reversal)
- BI-FAST credit transfer flow

### Monitoring & Learning
- Message trace viewer untuk ISO 8583 request/response
- Step-by-step transaction flow visualization
- Error injection untuk scenario testing
- Transaction log dengan penjelasan setiap field ISO 8583

## Teknologi

- Java 25, Spring Boot 4.0
- jPOS untuk ISO 8583
- PostgreSQL 17
- Web-based UI untuk semua komponen
- Docker Compose untuk deployment training environment

## Repository

Repository akan tersedia di GitHub setelah rilis.
