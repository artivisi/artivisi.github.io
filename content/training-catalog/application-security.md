---
title: "Application Security: Pengamanan Aplikasi Web"
description: "Pelatihan keamanan aplikasi web yang mencakup enkripsi, hashing, password storage, keypair management, MITM attack, dan authentication mechanisms."
weight: 4
icon: "/img/training-catalog/application-security/thumbnail.png"
---

## Deskripsi Pelatihan

Program pelatihan yang membekali developer dengan pemahaman mendalam tentang application security. Pelatihan mencakup konsep fundamental security (enkripsi, hashing, encoding), implementasi password storage yang aman, keypair management, pertahanan terhadap MITM attack, dan authentication mechanisms yang robust.

## Tujuan Pelatihan

Setelah mengikuti pelatihan ini, peserta akan mampu:

- Memahami perbedaan fundamental Encode, Encrypt, dan Hash
- Mengimplementasikan password storage yang aman
- Menggunakan Public/Private Key untuk enkripsi
- Memahami dan mencegah Man-in-the-Middle Attack
- Mengimplementasikan login mechanism yang secure
- Mengamankan komunikasi antar aplikasi
- Menerapkan security best practices dalam development

## Target Peserta

**Cocok untuk:**
- Backend Developer
- Full-stack Developer
- Security Engineer
- Technical Lead

**Skill prerequisite:**
- Basic programming (Java/PHP/Python)
- Web development fundamentals
- Basic understanding of HTTP/HTTPS
- Database operations

## Durasi Pelatihan

**5 hari (40 jam)** - 10 sesi @ 4 jam per sesi

## Rundown Sesi

### Hari 1: Security Fundamentals & Cryptography Basics

**Sesi 1 (09:00 - 12:00): Introduction to Application Security**
- Mengapa application security penting
- Common security vulnerabilities overview
- Security mindset untuk developer
- **Encode vs Encrypt vs Hash** - Perbedaan fundamental dan use case
- Hands-on: Praktik encoding, encryption, dan hashing dengan tool

**Sesi 2 (13:00 - 17:00): Password Storage Best Practices**
- Kesalahan umum dalam password storage
- Hashing algorithms (MD5, SHA-256, bcrypt, Argon2)
- Salt dan pepper concepts
- **Hands-on**: Implement secure password storage di Java/PHP
- Testing password strength dan cracking simulation

### Hari 2: Public Key Infrastructure & Encryption

**Sesi 3 (09:00 - 12:00): Keypair & Public Key Cryptography**
- Symmetric vs Asymmetric encryption
- Public/Private Key concepts
- RSA, ECDSA fundamentals
- Certificate dan PKI (Public Key Infrastructure)
- **Hands-on**: Generate keypair dengan OpenSSL

**Sesi 4 (13:00 - 17:00): Implementing Encryption in Applications**
- Data encryption at rest dan in transit
- Key management best practices
- **Hands-on**: Enkripsi data sensitif dalam aplikasi PHP/Java
- File encryption dan decryption
- Database field encryption

### Hari 3: Attack Vectors & Prevention

**Sesi 5 (09:00 - 12:00): Man-in-the-Middle Attack**
- MITM attack scenarios
- SSL/TLS stripping attacks
- Certificate pinning
- **Hands-on**: Simulate MITM dengan Wireshark
- Implementing HTTPS properly

**Sesi 6 (13:00 - 17:00): Authentication Mechanisms**
- Session-based authentication
- Token-based authentication (JWT)
- Cookie security (HttpOnly, Secure, SameSite)
- OAuth2 dan OpenID Connect overview
- **Hands-on**: Implement secure login dengan Spring Security

### Hari 4: OWASP Top 10 & WebGoat Practice

**Sesi 7 (09:00 - 12:00): OWASP Top 10 - Part 1**
- 1\. Broken Access Control
- 2\. Cryptographic Failures
- 3\. Injection (SQL, Command, LDAP)
- 4\. Insecure Design
- 5\. Security Misconfiguration
- **Hands-on**: Exploit dan fix vulnerabilities di WebGoat

**Sesi 8 (13:00 - 17:00): OWASP Top 10 - Part 2**
- 6\. Vulnerable and Outdated Components
- 7\. Identification and Authentication Failures
- 8\. Software and Data Integrity Failures
- 9\. Security Logging and Monitoring Failures
- 10\. Server-Side Request Forgery (SSRF)
- **Hands-on**: Continue WebGoat exercises

### Hari 5: Advanced Topics & Real-world Application

**Sesi 9 (09:00 - 12:00): Multiple Authentication Strategies**
- Multi-factor authentication (MFA)
- Biometric authentication
- Social login integration
- **Hands-on**: Implement MFA dengan Spring Security
- TOTP (Time-based One-Time Password) implementation

**Sesi 10 (13:00 - 17:00): Security in Production & Case Studies**
- Security headers (CSP, HSTS, X-Frame-Options)
- API security best practices
- Rate limiting dan DDoS prevention
- Security monitoring dan incident response
- **Case Studies**: Analisa real-world security breaches
- **Project**: Secure code review dan penetration testing basics

## Technology Stack

- **Cryptography**: OpenSSL, BouncyCastle, bcrypt
- **Java**: Spring Security, JWT
- **PHP**: Hash functions, OpenSSL extension
- **Security Practice**: OWASP WebGoat
- **Tools**: Postman, Burp Suite (optional), Wireshark (demo)

## Materi Pelatihan

Peserta mendapatkan akses ke:
- Video recordings untuk setiap sesi
- Slide presentasi dan hands-on lab guides
- OWASP WebGoat setup guide
- Security checklist dan best practices documentation
- Code samples untuk setiap topik

**Video Playlist:**
[Belajar Application Security - YouTube](https://www.youtube.com/playlist?list=PL9oC_cq7OYbwClMMWLTgXr3zz9sQ_JW76)

**Note:** Training ini menggunakan 11 video pertama dari playlist sebagai referensi, dengan tambahan materi OWASP Top 10 dan WebGoat practice yang lebih comprehensive.

## Format Pelatihan

- **In-house training** - Instruktur datang ke lokasi client
- **Online training** - Via Zoom/Google Meet dengan hands-on practice
- **Hybrid** - Kombinasi online dan offline

## Sertifikat

Peserta yang menyelesaikan pelatihan akan mendapatkan sertifikat dari ArtiVisi Intermedia.

## Informasi Lebih Lanjut

Untuk informasi jadwal, biaya, dan customization pelatihan, silakan kunjungi [Halaman Kontak](/contact_us/).
