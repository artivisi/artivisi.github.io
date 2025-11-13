---
title: "Spring Boot & jPOS untuk Aplikasi Perbankan"
description: "Pelatihan pengembangan aplikasi perbankan modern menggunakan Spring Boot dan jPOS untuk payment processing, ISO-8583 messaging, dan HSM integration."
weight: 1
icon: "/img/training-catalog/spring-jpos/thumbnail.png"
---

## Deskripsi Pelatihan

Program pelatihan intensif yang membekali peserta dengan kemampuan membangun aplikasi perbankan production-ready menggunakan Spring Boot dan jPOS (Java Payment Open Source). Pelatihan mencakup end-to-end development dari setup project hingga deployment dengan fokus pada payment processing, cryptographic operations, dan connection resiliency.

## Tujuan Pelatihan

Setelah mengikuti pelatihan ini, peserta akan mampu:

- Membangun aplikasi perbankan menggunakan Spring Boot dan jPOS
- Mengimplementasikan ISO-8583 message processing untuk transaksi perbankan
- Mengintegrasikan Hardware Security Module (HSM) untuk operasi kriptografi
- Menangani ATM transaction flow (balance inquiry, withdrawal)
- Mengimplementasikan PIN encryption dan MAC verification
- Mengelola key rotation (terminal-initiated dan server-initiated)
- Membangun persistent connections dengan connection pooling
- Menerapkan security best practices sesuai PCI DSS

## Target Peserta

Pelatihan ini dirancang untuk:

**Developer dengan pengalaman:**
- Java programming (minimal 1 tahun)
- Spring Framework basics
- REST API development
- Database operations (SQL)

**Posisi yang cocok:**
- Backend Developer
- Integration Engineer
- Payment System Developer
- Banking Application Developer

## Durasi Pelatihan

**5 hari (40 jam)** dengan pembagian:
- Sesi teori: 30%
- Hands-on practice: 60%
- Q&A dan troubleshooting: 10%

## Rundown Sesi

### Hari 1: Spring Boot Application Setup, REST, dan Database

**Sesi 1 (09:00 - 12:00):**
- Payment ecosystem fundamentals
- Spring Boot project setup
- Dependency Injection dan IoC Container
- REST API development untuk banking transactions

**Sesi 2 (13:00 - 17:00):**
- PostgreSQL integration dengan Spring Data JPA
- Transaction management
- Entity relationship design untuk banking system
- REST API testing dengan Postman/curl

**Hands-on:**
- Setup Spring Boot project dengan Maven
- Membuat REST endpoint untuk account management
- Database schema design dan migration

### Hari 2: JPOS Integration & ISO-8583 Basics

**Sesi 1 (09:00 - 12:00):**
- jPOS architecture overview
- ISO-8583 message structure (MTI, Bitmap, Data Elements)
- Q2 server setup dan configuration
- Channel dan Packager configuration

**Sesi 2 (13:00 - 17:00):**
- Administrative messages (sign-on, echo test)
- Message routing dan transaction managers
- ISOMsg creation dan parsing
- Testing dengan jPOS simulator

**Hands-on:**
- Setup jPOS Q2 server
- Membuat ISO-8583 packager
- Mengirim dan menerima echo test message
- Testing administrative messages

### Hari 3: End-to-End ATM Transaction Flow

**Sesi 1 (09:00 - 12:00):**
- Integrasi Spring Boot dengan jPOS
- ATM transaction flow design
- Balance inquiry implementation
- Response code handling

**Sesi 2 (13:00 - 17:00):**
- Cash withdrawal implementation
- Account validation dan fraud detection
- Transaction logging dan audit trail
- Collaborative testing dengan ATM simulator

**Hands-on:**
- Implementasi balance inquiry
- Implementasi cash withdrawal
- Testing dengan web-based ATM simulator
- Error handling dan edge cases

### Hari 4: HSM Simulation, PIN, MAC & Key Management

**Sesi 1 (09:00 - 12:00):**
- HSM fundamentals dan cryptographic operations
- PIN block format (ISO-9564)
- AES-128 PIN encryption
- MAC (Message Authentication Code) verification

**Sesi 2 (13:00 - 17:00):**
- Key management lifecycle
- Terminal-initiated key rotation
- Zone Master Key (ZMK) dan Zone PIN Key (ZPK)
- Secure key exchange protocols

**Hands-on:**
- Setup HSM simulator
- Implementasi PIN verification
- Implementasi MAC generation dan verification
- Testing key rotation flow

### Hari 5: Connection Resiliency & Production Readiness

**Sesi 1 (09:00 - 12:00):**
- Persistent connections dan connection pooling
- Reconnection strategies
- Server-initiated key rotation
- Transaction timeout handling

**Sesi 2 (13:00 - 17:00):**
- Lifecycle management (startup, shutdown, health checks)
- Security best practices dan PCI DSS compliance
- Monitoring dan observability (logs, metrics, tracing)
- Deployment strategies (Docker, Kubernetes)

**Hands-on:**
- Implementasi connection pooling
- Setup monitoring dengan actuator
- Containerization dengan Docker
- Performance testing dan tuning

## Persiapan Teknis

### Software Requirements

Peserta wajib menginstall software berikut sebelum pelatihan:

**Development Tools:**
- Java Development Kit (JDK) 25 atau lebih tinggi
- Maven 3.9.x atau lebih tinggi
- IDE: IntelliJ IDEA / Eclipse / VS Code dengan Java extensions
- Git untuk version control

**Database:**
- PostgreSQL 17 atau lebih tinggi
- pgAdmin atau DBeaver untuk database management

**Testing Tools:**
- Postman atau Insomnia untuk REST API testing
- curl atau HTTPie untuk command-line testing

**Containerization:**
- Docker Desktop untuk menjalankan database containers
- Docker Compose untuk orchestration

**Optional:**
- Terminal emulator (iTerm2, Windows Terminal, Alacritty)
- HTTP client (Bruno, Hoppscotch)

### Hardware Requirements

- Processor: Intel Core i5 atau setara (minimal)
- RAM: 8GB (minimal), 16GB (recommended)
- Storage: 20GB free disk space
- Internet connection untuk download dependencies

### Pre-training Setup

Peserta akan diberikan setup guide 1 minggu sebelum pelatihan dimulai untuk memastikan semua environment sudah siap. Setup guide mencakup:

1. Java dan Maven installation verification
2. PostgreSQL setup dan testing
3. Docker installation dan testing
4. Clone training repositories
5. Initial project setup dan dependency download

## Materi Pelatihan

### Repositories

- [Training Spring jPOS 2025](https://github.com/artivisi/training-spring-jpos-2025) - Materi lengkap dan source code
- [HSM Simulator](https://github.com/artivisi/hsm-simulator) - HSM simulation untuk testing

### Technology Stack

- **Java 25** dengan Virtual Threads untuk concurrency
- **Spring Boot 3.5.6** untuk application framework
- **jPOS 3.0.0** untuk ISO-8583 processing
- **PostgreSQL 17** untuk database
- **BouncyCastle 1.78.1** untuk cryptographic operations
- **Thymeleaf + Tailwind CSS** untuk web-based ATM simulator
- **Docker** untuk containerization

### Aplikasi Sample

Peserta akan bekerja dengan 3 aplikasi utama:

1. **spring-jpos-atm-simulator** (Port 7070) - Web-based ATM terminal
2. **spring-jpos-atm-server** (Port 9090 REST, 22222 ISO-8583) - Bank processing server
3. **hsm-simulator** (Port 8080) - HSM cryptographic operations service

## Materi Pendukung

Peserta mendapatkan akses ke:

- Slide presentasi dalam format PDF
- Source code lengkap dengan comments
- Dokumentasi API dan configuration guide
- Troubleshooting guide dan FAQ

**Recording video** dapat disediakan berdasarkan permintaan sebagai tambahan (optional).

## Format Pelatihan

Pelatihan tersedia dalam format:

- **In-house training** - Instruktur datang ke lokasi client
- **Online training** - Via Zoom/Google Meet dengan breakout rooms untuk hands-on
- **Hybrid** - Kombinasi online dan offline sessions

## Sertifikat

Peserta yang menyelesaikan pelatihan dan hands-on exercises akan mendapatkan sertifikat kelulusan dari ArtiVisi Intermedia.

## Informasi Lebih Lanjut

Untuk informasi jadwal, biaya, dan customization pelatihan, silakan kunjungi [Halaman Kontak](/contact_us/).
