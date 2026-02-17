---
title: "Tawqi - Digital Document Signing"
description: "Platform tanda tangan digital berbasis PKI untuk dokumen institusional dengan legal validity sesuai UU ITE."
icon: "/img/products/tawqi/thumbnail.png"
weight: 5
---

> **Coming Q2 2026** — Produk ini sedang dalam pengembangan.

## Deskripsi Produk

Platform tanda tangan digital berbasis Public Key Infrastructure (PKI) untuk kebutuhan institusional. Tawqi menyediakan digital signature dengan legal validity sesuai UU ITE dan peraturan OJK untuk dokumen keuangan, kontrak, dan dokumen administrasi lainnya.

## Fitur yang Direncanakan

### Digital Signature
- **PKI-Based Signing** — Tanda tangan digital dengan sertifikat elektronik
- **Multi-Signer Workflow** — Sequential dan parallel signing untuk dokumen yang membutuhkan banyak penandatangan
- **Bulk Signing** — Tanda tangan massal untuk dokumen batch (ijazah, sertifikat, surat keputusan)

### Document Management
- Upload dan preview dokumen PDF
- Template dokumen untuk format standar institusi
- Audit trail per dokumen (siapa, kapan, dari mana)

### Integrasi
- REST API untuk integrasi dengan sistem internal
- Webhook notification untuk status dokumen
- LDAP/Active Directory untuk user management

## Teknologi

- Java 25, Spring Boot 4.0
- PostgreSQL 17
- BouncyCastle untuk operasi kriptografi PKI
- Docker / Kubernetes untuk deployment

## Repository

Repository akan tersedia di GitHub setelah rilis.
