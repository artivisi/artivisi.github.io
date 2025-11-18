---
title: "ATM Banking Solution"
description: "Solusi perbankan ATM lengkap dengan HSM simulator, ISO-8583 server, dan terminal simulator untuk operasi perbankan yang aman dan compliance."
icon: "/img/products/atm-solution/thumbnail.png"
weight: 4
---

## Deskripsi Produk

Solusi perbankan ATM yang komprehensif mencakup tiga komponen utama: Hardware Security Module (HSM) Simulator untuk operasi kriptografi, ATM Server berbasis jPOS untuk pemrosesan transaksi ISO-8583, dan ATM Terminal Simulator untuk simulasi operasi terminal. Sistem ini dirancang untuk pembelajaran, pengembangan, dan testing infrastruktur perbankan dengan standar keamanan tinggi.

## Komponen Utama

### 1. HSM Simulator
Simulator Hardware Security Module berbasis web yang menyediakan operasi kriptografi perbankan lengkap termasuk key ceremony multi-custodian, manajemen PIN dengan berbagai format (ISO-0, ISO-1, ISO-3, ISO-4), dan operasi MAC (AES-CMAC, HMAC-SHA256).

### 2. ATM Server (Acquirer/Switch)
Server perbankan berbasis Spring Boot yang mengimplementasikan protokol ISO-8583 menggunakan jPOS untuk memproses transaksi ATM seperti balance inquiry dan cash withdrawal dengan dukungan enkripsi PIN dan verifikasi MAC.

### 3. ATM Terminal Simulator
Aplikasi web yang mensimulasikan terminal ATM dengan kemampuan melakukan transaksi perbankan, sign-on/sign-off otomatis, dan mendukung server-initiated key rotation untuk keamanan terpusat.

## Fitur Utama

### Keamanan Kriptografi
- **Key Ceremony**: Inisialisasi kunci dengan threshold 2-of-3 menggunakan Shamir's Secret Sharing
- **Key Hierarchy**: Manajemen 8 tipe kunci (LMK, TMK, TPK, TSK, ZMK, ZPK, ZSK, KEK)
- **PIN Management**: Enkripsi, verifikasi, dan translasi PIN dengan multiple format
- **MAC Operations**: Generate dan verifikasi MAC dengan AES-CMAC dan HMAC-SHA256
- **Key Rotation**: Server-initiated remote key rotation tanpa intervensi manual

### Operasi Transaksi
- Balance Inquiry untuk cek saldo rekening
- Cash Withdrawal dengan validasi saldo
- Audit trail lengkap untuk semua transaksi
- Real-time transaction monitoring

### Infrastruktur Perbankan
- Model empat pihak (Issuer, Acquirer, Switch, Processor)
- Dukungan terminal: ATM, POS, MPOS, E-Commerce
- Pertukaran kunci antar bank (key exchange)
- Sign-on/sign-off untuk manajemen koneksi jaringan

## Teknologi yang Digunakan

**Backend Framework:**
- Spring Boot 3.5.6 / 4.0.0-RC1
- Java 21 / Java 25 (dengan virtual threads)
- jPOS 3.0.0 untuk ISO-8583

**Database:**
- PostgreSQL 17
- Flyway DB untuk migrasi database
- Spring Data JPA & Hibernate ORM

**Security & Cryptography:**
- AES-256 encryption
- PBKDF2-SHA256 untuk key derivation
- BouncyCastle 1.78.1
- Shamir's Secret Sharing untuk multi-custodian

**Frontend:**
- Thymeleaf template engine
- Tailwind CSS 4.1
- jQuery untuk interaktivitas

**Testing:**
- TestContainers untuk integration testing
- JUnit 5
- Playwright untuk end-to-end testing

**Scalability:**
- Virtual threads (Java 25) untuk 100k+ concurrent sessions
- ISO-8583 server pada port 22222
- ASCIIChannel untuk transmisi pesan
- Base24Packager untuk format ACI BASE24

## Arsitektur Sistem

![Arsitektur ATM Banking Solution](/img/products/atm-solution/thumbnail.png)

Sistem terdiri dari tiga layer utama:
1. **Terminal Layer**: ATM dan POS terminal yang mengirim pesan ISO-8583
2. **Server Layer**: jPOS server untuk routing dan pemrosesan transaksi dengan authentication dan key management
3. **Security Layer**: HSM untuk operasi kriptografi, key ceremony, dan key hierarchy management

## Screenshots

### ATM Terminal Simulator

![ATM Terminal Interface](/img/products/atm-solution/01-atm-interface.png)

Interface terminal ATM untuk simulasi transaksi perbankan dengan input kartu (PAN), PIN, dan pilihan transaksi (balance inquiry, withdrawal, key change).

### HSM - Key Management

![HSM Key List](/img/products/atm-solution/02-hsm-keys.png)

Dashboard manajemen kunci kriptografi menampilkan daftar semua kunci yang aktif dengan informasi tipe, status, dan lifecycle management.

![HSM Key Hierarchy](/img/products/atm-solution/03-hsm-key-hierarchy.png)

Visualisasi hierarki kunci dari Local Master Key (LMK) ke berbagai working keys (TMK, TPK, ZMK, ZPK) untuk isolasi dan rotasi yang aman.

### HSM - PIN Operations

![HSM PIN Visualization](/img/products/atm-solution/04-hsm-pin-visualization.png)

Visualisasi operasi PIN menampilkan proses enkripsi, verifikasi, dan translasi PIN dengan berbagai format ISO (0, 1, 3, 4) untuk debugging dan audit.

### HSM - Key Ceremony

![HSM Key Ceremony](/img/products/atm-solution/05-hsm-key-ceremony.png)

Interface key ceremony untuk inisialisasi set kunci lengkap menggunakan mekanisme multi-custodian dengan threshold 2-of-3 untuk keamanan maksimal.

## Keunggulan

- **Compliance**: Mengikuti standar ISO-8583 dan best practices kriptografi perbankan
- **Educational**: Ideal untuk pembelajaran dan workshop integrasi sistem perbankan
- **Scalable**: Dukungan virtual threads untuk high-concurrency scenarios
- **Secure**: Implementasi AES-256, Shamir's Secret Sharing, dan key rotation
- **Comprehensive**: Mencakup semua komponen dari terminal hingga HSM
- **Developer-Friendly**: REST API untuk operasi administratif dan monitoring
- **Audit Trail**: Logging lengkap untuk ceremony, transaksi, dan rotasi kunci

## Use Cases

- **Training & Workshop**: Pembelajaran integrasi Spring Boot dengan jPOS dan operasi kriptografi perbankan
- **Development**: Pengembangan dan testing aplikasi perbankan tanpa hardware HSM fisik
- **Testing**: Simulasi skenario transaksi ATM dan key rotation untuk quality assurance
- **Proof of Concept**: Demonstrasi arsitektur perbankan empat pihak dengan security infrastructure
- **Research**: Eksperimen dengan algoritma kriptografi dan protokol keamanan perbankan

## Catatan Penting

Sistem ini dirancang untuk **tujuan edukasi dan development**, bukan untuk lingkungan produksi. Untuk deployment produksi, gunakan Hardware Security Module (HSM) fisik yang tersertifikasi dan implementasi security tambahan sesuai regulasi perbankan.

## Repository

- [HSM Simulator](https://github.com/artivisi/hsm-simulator)
- [ATM Server](https://github.com/artivisi/workshop-spring-jpos-atm-server)
- [ATM Terminal Simulator](https://github.com/artivisi/workshop-spring-jpos-atm-simulator)
