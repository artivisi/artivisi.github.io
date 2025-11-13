---
title: "SRE Bootcamp: From Zero to Production"
description: "Pelatihan intensif Site Reliability Engineering dari dasar hingga production-ready, mencakup containerization, high availability, infrastructure automation, dan application performance management."
weight: 2
icon: "/img/training-catalog/sre-bootcamp/thumbnail.svg"
---

## Deskripsi Pelatihan

Program pelatihan intensif Site Reliability Engineering (SRE) yang membawa peserta dari fundamental concepts hingga mampu mengelola production systems secara mandiri. Pelatihan hands-on ini membekali peserta dengan skills yang dibutuhkan untuk berkarir sebagai SRE, DevOps Engineer, atau Infrastructure Engineer di perusahaan modern.

## Tujuan Pelatihan

Setelah mengikuti pelatihan ini, peserta akan mampu:

- Memahami principles dan practices dalam Site Reliability Engineering
- Mengelola containers menggunakan Docker untuk application deployment
- Merancang dan mengimplementasikan high availability systems
- Melakukan infrastructure automation dengan Terraform dan Ansible
- Menganalisis application performance dan mengidentifikasi bottlenecks
- Melakukan log analysis dan metrics collection
- Mengelola cloud infrastructure (DigitalOcean/AWS/GCP)
- Troubleshooting production issues secara sistematis
- Mengimplementasikan monitoring dan alerting

## Target Peserta

Pelatihan ini dirancang untuk:

**Engineer dengan background:**
- Developer yang ingin berkarir di infrastructure/operations
- System Administrator yang ingin upgrade ke modern DevOps practices
- Fresh graduates dengan passion di infrastructure & automation
- IT professionals yang ingin transition ke SRE role
- Anyone yang ingin membangun production-ready systems

**Skill prerequisite:**
- Basic Linux command line (navigasi, file management)
- Basic networking concepts (TCP/IP, DNS, HTTP)
- Text editor usage (vim/nano atau sejenisnya)
- Basic programming/scripting (Python/Bash/Shell)
- Tidak perlu pengalaman production sebelumnya - training dimulai from zero!

## Durasi Pelatihan

**5 hari (40 jam)** dengan pembagian:
- Sesi teori: 25%
- Hands-on practice: 65%
- Discussion dan troubleshooting: 10%

## Rundown Sesi

### Hari 1: SRE Fundamentals & Container Technology

**Sesi 1 (09:00 - 12:00):**
- SRE principles dan core concepts
- Service Level Indicators (SLI), Objectives (SLO), Agreements (SLA)
- Error budgets dan reliability targets
- Container technology fundamentals
- Docker architecture dan components

**Sesi 2 (13:00 - 17:00):**
- Docker installation dan configuration
- Container lifecycle management (create, start, stop, remove)
- Docker images: building, tagging, pushing to registry
- Docker networking dan volumes
- Multi-container applications dengan Docker Compose

**Hands-on:**
- Setup Docker environment
- Membuat Dockerfile untuk aplikasi Python/Node.js
- Build dan run containers
- Setup Docker networking
- Deploy multi-tier application dengan Docker Compose

### Hari 2: High Availability Systems

**Sesi 1 (09:00 - 12:00):**
- High availability concepts dan patterns
- Load balancing strategies (round-robin, least-connection, IP hash)
- Nginx sebagai reverse proxy dan load balancer
- Health checks dan failover mechanisms
- Database replication untuk high availability

**Sesi 2 (13:00 - 17:00):**
- HAProxy configuration dan management
- Session persistence (sticky sessions)
- SSL/TLS termination
- Monitoring load balancer health
- Disaster recovery planning

**Hands-on:**
- Setup Nginx sebagai load balancer
- Konfigurasi HAProxy dengan multiple backends
- Implementasi health checks
- Setup database replication (PostgreSQL/MySQL)
- Testing failover scenarios

### Hari 3: Infrastructure Automation dengan Terraform & Ansible

**Sesi 1 (09:00 - 12:00):**
- Infrastructure as Code (IaC) concepts
- Terraform fundamentals: providers, resources, state
- HCL (HashiCorp Configuration Language) syntax
- Managing cloud infrastructure dengan Terraform
- Terraform modules dan reusability

**Sesi 2 (13:00 - 17:00):**
- Ansible fundamentals: inventory, playbooks, modules
- Configuration management dengan Ansible
- Ansible roles untuk reusable automation
- WordPress deployment automation
- Integration: Terraform + Ansible workflow

**Hands-on:**
- Setup DigitalOcean infrastructure dengan Terraform
- Provisioning VMs, networks, dan storage
- Write Ansible playbooks untuk software installation
- Automated WordPress deployment dengan database setup
- End-to-end infrastructure provisioning pipeline

### Hari 4: Application Performance Analysis

**Sesi 1 (09:00 - 12:00):**
- Performance fundamentals: latency, throughput, saturation
- Identifying performance bottlenecks
- Blocking I/O vs non-blocking I/O
- CPU-intensive operations analysis
- Network bottlenecks diagnosis

**Sesi 2 (13:00 - 17:00):**
- Profiling tools: htop, iotop, nethogs, iftop
- Application profiling (Python: cProfile, Java: JProfiler)
- Database query optimization
- Caching strategies (Redis, Memcached)
- CDN integration untuk static assets

**Hands-on:**
- Analisis aplikasi dengan blocking I/O
- Optimasi CPU-intensive operations
- Network latency troubleshooting
- Database slow query identification
- Implementasi caching layer

### Hari 5: Log Analysis, Metrics & Monitoring

**Sesi 1 (09:00 - 12:00):**
- Logging best practices
- Centralized logging dengan ELK Stack (Elasticsearch, Logstash, Kibana)
- Log parsing dan pattern matching
- Error rate calculations
- Log aggregation dan correlation

**Sesi 2 (13:00 - 17:00):**
- Metrics collection dengan Prometheus
- Grafana untuk visualization
- Alerting rules dan notification channels
- Application instrumentation
- Incident response workflow

**Hands-on:**
- Setup ELK Stack
- Log parsing dengan regular expressions
- Setup Prometheus dan Grafana
- Create dashboards untuk application metrics
- Configure alerting rules
- Simulate production incident dan response

## Persiapan Teknis

### Software Requirements

Peserta wajib menginstall software berikut sebelum pelatihan:

**Local Development:**
- Docker Desktop (atau Docker Engine untuk Linux)
- Terraform CLI (versi terbaru)
- Ansible (via pip atau package manager)
- VS Code atau text editor pilihan
- Git untuk version control
- SSH client (OpenSSH, PuTTY, atau sejenisnya)

**Programming/Scripting:**
- Python 3.9+ dengan pip
- Shell: Bash atau Zsh

**Terminal:**
- Terminal emulator (iTerm2, Windows Terminal, Alacritty, atau bawaan OS)

**Cloud Account:**
- DigitalOcean account dengan credit (akan diberikan voucher untuk training)
- Atau AWS/GCP free tier account

**Optional Tools:**
- Postman atau curl untuk HTTP testing
- pgAdmin atau DBeaver untuk database management
- k9s atau lens untuk Kubernetes (bonus material)

### Hardware Requirements

- Processor: Intel Core i5 atau setara (minimal)
- RAM: 8GB (minimal), 16GB (recommended untuk Docker)
- Storage: 30GB free disk space
- Internet connection: Minimum 10Mbps untuk download images

### Pre-training Setup

Peserta akan diberikan setup guide 1 minggu sebelum pelatihan dimulai:

1. Docker installation dan verification
2. Terraform dan Ansible installation
3. Cloud account setup dan verification
4. SSH key generation
5. Clone training repository
6. Pre-download Docker images untuk hemat bandwidth

## Materi Pelatihan

### Repository

- [SRE Bootcamp Training Materials](https://github.com/endymuhardin/training-sre-junior-2025-02) - Materi lengkap dan hands-on labs

### Technology Stack

**Containers & Orchestration:**
- Docker 25.x
- Docker Compose v2

**Infrastructure Automation:**
- Terraform (latest stable)
- Ansible 2.15+

**High Availability:**
- Nginx (reverse proxy/load balancer)
- HAProxy (load balancer)
- PostgreSQL/MySQL replication

**Cloud Platform:**
- DigitalOcean (primary)
- AWS/GCP (alternative)

**Monitoring & Logging:**
- Prometheus untuk metrics
- Grafana untuk visualization
- ELK Stack (Elasticsearch, Logstash, Kibana)

**Programming Languages:**
- Python 3.9+ untuk scripting dan automation
- Shell scripting (Bash)
- HCL untuk Terraform

### Hands-on Modules

Peserta akan bekerja dengan berbagai modules:

1. **Container Management** - Packaging dan deployment aplikasi
2. **High Availability Setup** - Multi-tier application dengan load balancing
3. **Infrastructure Automation** - Provisioning cloud infrastructure
4. **WordPress Deployment** - Full automated deployment pipeline
5. **Performance Analysis** - Real-world application troubleshooting
6. **Monitoring Setup** - End-to-end observability implementation

## Struktur Materi

Setiap hari pelatihan memiliki visual materials (diagram SVG) yang mencakup:

- Conceptual architecture diagrams
- Step-by-step implementation guides
- Troubleshooting flowcharts
- Best practices checklists

## Materi Pendukung

Peserta mendapatkan akses ke:

- Slide presentasi dan diagram architecture
- Hands-on lab guides dengan step-by-step instructions
- Sample scripts dan configuration files
- Troubleshooting guide dan FAQ
- Reading materials dan reference links

**Recording video** dapat disediakan berdasarkan permintaan sebagai tambahan (optional).

## Format Pelatihan

Pelatihan tersedia dalam format:

- **In-house training** - Instruktur datang ke lokasi client
- **Online training** - Via Zoom/Google Meet dengan hands-on sessions
- **Hybrid** - Kombinasi online dan offline sessions

**Catatan untuk Online Training:**
- Breakout rooms untuk hands-on practice
- Screen sharing untuk troubleshooting
- Dedicated Slack/Discord channel untuk real-time communication

## Learning Path

Setelah menyelesaikan pelatihan ini, peserta dapat melanjutkan ke:

- **SRE Advanced** - Kubernetes, service mesh, advanced monitoring
- **DevOps Engineering** - CI/CD pipelines, GitOps, security
- **Cloud Architecture** - Multi-cloud, microservices, serverless

## Sertifikat

Peserta yang menyelesaikan pelatihan dan hands-on labs akan mendapatkan sertifikat kelulusan dari ArtiVisi Intermedia.

## Informasi Lebih Lanjut

Untuk informasi jadwal, biaya, dan customization pelatihan, silakan kunjungi [Halaman Kontak](/contact_us/).
