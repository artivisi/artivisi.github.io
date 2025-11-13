---
title: "HashiCorp Vault: Credential & Secrets Management"
description: "Pelatihan mendalam tentang penggunaan HashiCorp Vault untuk mengamankan credential dan secrets dalam aplikasi modern, termasuk integrasi dengan Kubernetes."
weight: 5
icon: "/img/training-catalog/vault-credential-management/thumbnail.png"
---

## Deskripsi Pelatihan

Pelatihan mendalam tentang penggunaan HashiCorp Vault untuk mengamankan credential dan secrets dalam aplikasi modern, termasuk integrasi dengan Kubernetes.

## Tujuan Pelatihan

Setelah mengikuti pelatihan ini, peserta akan mampu menguasai konsep dan praktik hashicorp vault: credential & secrets management.

## Target Peserta

**Cocok untuk:**
- DevOps Engineer
- Security Engineer
- Backend Developer
- System Administrator

**Skill prerequisite:**
Linux command line, basic networking, Docker/Kubernetes basics, application development experience

## Durasi Pelatihan

**5 hari (40 jam)** - 10 sesi @ 4 jam per sesi

## Rundown Sesi

### Hari 1: Vault Fundamentals & Setup

**Sesi 1 (09:00 - 12:00): Introduction to Secrets Management**
- Masalah pengamanan file konfigurasi
- Common secrets management mistakes
- Introduction to HashiCorp Vault
- Vault architecture dan components (Storage Backend, API, Seal/Unseal)
- **Hands-on**: Install Vault server (development mode)

**Sesi 2 (13:00 - 17:00): Vault Server Setup & Configuration**
- Production Vault setup
- Storage backends (Consul, Raft, File)
- Seal/Unseal process dan auto-unseal
- High availability configuration
- **Hands-on**: Setup production Vault server dengan Raft storage

### Hari 2: Authentication & Authorization

**Sesi 3 (09:00 - 12:00): Authentication Methods - Part 1**
- Token authentication
- AppRole authentication pattern
- Secure Introduction pattern
- **Hands-on**: Configure AppRole authentication
- Token lifecycle management

**Sesi 4 (13:00 - 17:00): Authentication Methods - Part 2**
- Kubernetes authentication
- LDAP/AD integration
- GitHub authentication
- **Hands-on**: Setup Kubernetes authentication
- Policy-based authorization

### Hari 3: Secrets Engines & Dynamic Credentials

**Sesi 5 (09:00 - 12:00): Static Secrets Management**
- KV Secrets Engine v1 vs v2
- Versioning dan rollback
- Secret rotation strategies
- **Hands-on**: Store dan retrieve secrets
- Load configuration dari Vault

**Sesi 6 (13:00 - 17:00): Dynamic Secrets**
- Database secrets engine
- AWS/GCP secrets engine
- PKI secrets engine untuk certificates
- **Hands-on**: Generate dynamic database credentials
- Automatic credential rotation

### Hari 4: Application Integration

**Sesi 7 (09:00 - 12:00): Spring Boot Integration**
- Spring Cloud Vault
- Configuration refresh
- Trusted Orchestrator pattern
- **Hands-on**: Integrasi Spring Boot dengan Vault
- Dynamic property loading

**Sesi 8 (13:00 - 17:00): Other Framework Integrations**
- Vault Agent
- Vault Proxy
- Template rendering
- **Hands-on**: Setup Vault Agent dengan caching
- Automated secret injection

### Hari 5: Kubernetes Integration & Production

**Sesi 9 (09:00 - 12:00): Kubernetes Integration**
- Vault Injector sidecar
- CSI (Container Storage Interface) driver
- External Secrets Operator
- Trusted Platform pattern
- **Hands-on**: Deploy Vault di Kubernetes dengan Helm
- Sidecar injection untuk pods

**Sesi 10 (13:00 - 17:00): Production Best Practices**
- Disaster recovery dan backup
- Monitoring dan auditing
- Performance tuning
- Security hardening
- Compliance (SOC2, PCI-DSS)
- **Hands-on**: Setup audit logging
- Backup dan restore procedures
- End-to-end production deployment

## Technology Stack

HashiCorp Vault, Kubernetes, Spring Boot, Docker, Helm

## Materi Pelatihan

Peserta mendapatkan akses ke materi pendukung.

**Video Playlist:**
[HashiCorp Vault: Credential & Secrets Management - YouTube](https://www.youtube.com/playlist?list=PL9oC_cq7OYbxlqa42LwWaukJ1gIxc_-9U)

## Format Pelatihan

- **In-house training** - Instruktur datang ke lokasi client
- **Online training** - Via Zoom/Google Meet dengan hands-on practice
- **Hybrid** - Kombinasi online dan offline

## Sertifikat

Peserta yang menyelesaikan pelatihan akan mendapatkan sertifikat dari ArtiVisi Intermedia.

## Informasi Lebih Lanjut

Untuk informasi jadwal, biaya, dan customization pelatihan, silakan kunjungi [Halaman Kontak](/contact_us/).
