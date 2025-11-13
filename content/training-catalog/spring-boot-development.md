---
title: "Spring Boot: Full-Stack Web Application Development"
description: "Pelatihan komprehensif pengembangan aplikasi web full-stack dengan Spring Boot, mencakup database, REST API, security, OAuth2, dan MVC dengan Thymeleaf."
weight: 3
icon: "/img/training-catalog/spring-boot-development/thumbnail.png"
---

## Deskripsi Pelatihan

Program pelatihan menyeluruh yang membekali peserta dengan kemampuan membangun aplikasi web enterprise menggunakan Spring Boot dari dasar hingga production-ready. Pelatihan mencakup full development cycle mulai dari database design, business logic, REST API, security & authentication, hingga frontend dengan MVC pattern.

## Tujuan Pelatihan

Setelah mengikuti pelatihan ini, peserta akan mampu:

- Membangun aplikasi web full-stack dengan Spring Boot
- Merancang dan mengimplementasikan database schema dengan JPA/Hibernate
- Mengimplementasikan business logic dengan transaction management
- Membuat REST API yang aman dan well-documented
- Mengimplementasikan Spring Security dengan OAuth2
- Membangun web UI dengan Spring MVC dan Thymeleaf
- Mengintegrasikan email notification dengan Gmail API
- Melakukan automated testing untuk business logic dan REST API
- Deploy aplikasi ke production environment

## Target Peserta

Pelatihan ini dirancang untuk:

**Developer dengan background:**
- Java programmer yang ingin menguasai Spring Boot
- Backend developer yang ingin upgrade skill
- Full-stack developer
- Fresh graduate dengan Java fundamentals

**Skill prerequisite:**
- Java programming (OOP, collections, exceptions)
- Basic SQL dan database concepts
- HTML dan CSS basics
- Git version control

## Durasi Pelatihan

**5 hari (40 jam)** dengan pembagian:
- Sesi teori: 25%
- Hands-on coding: 65%
- Code review dan troubleshooting: 10%

## Rundown Sesi

### Hari 1: Database & JPA Fundamentals

**Sesi 1 (09:00 - 12:00):**
- Spring Boot project setup dengan Maven/Gradle
- Database schema design dan best practices
- JPA Entity mapping dan relationships
- JPA Auditing untuk created/modified tracking
- Soft delete implementation

**Sesi 2 (13:00 - 17:00):**
- Repository pattern dengan Spring Data JPA
- Service layer dan business logic
- Exception handling dan error responses
- Pessimistic locking untuk concurrent access
- Helper classes dan utility methods

**Hands-on:**
- Setup project Spring Boot
- Create entity classes dengan relationships
- Implement audit fields
- Testing database operations

### Hari 2: Transaction Management & Business Logic

**Sesi 1 (09:00 - 12:00):**
- Declarative transaction management
- Transaction propagation (REQUIRED, REQUIRES_NEW, NESTED, dll)
- Transaction isolation levels
- Rollback strategies

**Sesi 2 (13:00 - 17:00):**
- Use case: invoice generation dan virtual account
- Complex business process implementation
- Transaction testing strategies
- Performance considerations

**Hands-on:**
- Implement nested transactions
- Create invoice generation logic
- Testing transaction rollback scenarios
- Handle database deadlocks

### Hari 3: REST API & Security Basics

**Sesi 1 (09:00 - 12:00):**
- RESTful API design principles
- Controller implementation dengan @RestController
- Request/Response mapping
- Input validation dengan Bean Validation
- Error handling dan status codes

**Sesi 2 (13:00 - 17:00):**
- Automated testing REST API dengan RestAssured/MockMvc
- Spring Security fundamentals
- CSRF protection
- API security vs HTML security configuration

**Hands-on:**
- Create CRUD REST endpoints
- Implement validation
- Write automated API tests
- Setup Spring Security

### Hari 4: Authentication & Authorization dengan OAuth2

**Sesi 1 (09:00 - 12:00):**
- Authentication concepts (session vs token)
- OAuth2 authorization flows
- Authorization Code with PKCE
- Client Credentials dan Device Flow

**Sesi 2 (13:00 - 17:00):**
- Permission schema design (user, role, permission)
- Resource Server implementation
- Permission mapping dan method security
- Integration dengan Authorization Server

**Hands-on:**
- Implement OAuth2 Authorization Server
- Setup Resource Server
- Create permission-based access control
- Testing authentication flows

### Hari 5: MVC, Thymeleaf & Production Deployment

**Sesi 1 (09:00 - 12:00):**
- Spring MVC architecture
- Thymeleaf template engine
- Layout management dengan fragments
- Form handling dan data binding
- Display dynamic data dengan tables

**Sesi 2 (13:00 - 17:00):**
- User registration dan password reset flow
- Email notification dengan Gmail API
- Cascading combo box (wilayah data)
- Production deployment checklist
- Monitoring dan logging

**Hands-on:**
- Create Thymeleaf layouts
- Implement user registration
- Setup email notifications
- Deploy ke server

## Persiapan Teknis

### Software Requirements

**Development Tools:**
- Java Development Kit (JDK) 17 atau lebih tinggi
- Maven 3.8+ atau Gradle 7+
- IDE: IntelliJ IDEA / Eclipse / VS Code dengan Java extensions
- Git untuk version control
- Postman atau Insomnia untuk API testing

**Database:**
- PostgreSQL 14+ atau MySQL 8+
- pgAdmin / MySQL Workbench / DBeaver

**Optional:**
- Docker untuk containerization
- Node.js untuk frontend asset management

### Hardware Requirements

- Processor: Intel Core i5 atau setara (minimal)
- RAM: 8GB (minimal), 16GB (recommended)
- Storage: 15GB free disk space
- Internet connection untuk download dependencies

## Materi Pelatihan

### Technology Stack

- **Spring Boot 3.x** dengan Spring Framework 6
- **Spring Data JPA** dengan Hibernate
- **Spring Security 6** dengan OAuth2
- **PostgreSQL / MySQL** untuk database
- **Thymeleaf** untuk template engine
- **Maven / Gradle** untuk build automation
- **JUnit 5** dan **Rest Assured** untuk testing
- **Gmail API** untuk email notifications

### Topik Utama

1. **Database & Persistence**
   - JPA entity mapping
   - Relationship types (OneToOne, OneToMany, ManyToMany)
   - Auditing dan soft delete
   - Locking strategies

2. **Business Logic**
   - Service layer pattern
   - Transaction management
   - Exception handling
   - Complex business processes

3. **REST API Development**
   - RESTful design
   - Input validation
   - Error handling
   - API versioning

4. **Security**
   - Spring Security configuration
   - OAuth2 implementation
   - Permission-based access control
   - CSRF protection

5. **Web UI Development**
   - Spring MVC pattern
   - Thymeleaf templates
   - Form handling
   - Dynamic data display

6. **Integration**
   - Email notifications
   - External API integration
   - Database migration
   - Production deployment

## Materi Pendukung

Peserta mendapatkan akses ke:

- Source code lengkap di GitHub
- Slide presentasi
- Database schema dan sample data
- Deployment guide
- Troubleshooting FAQ

### Video Playlist (Optional)

Recording video dapat disediakan berdasarkan permintaan:

[Training Spring Boot 2021 - YouTube Playlist](https://www.youtube.com/playlist?list=PL9oC_cq7OYbwP3r01vwXEN_QQn9p_aZHt)

## Format Pelatihan

- **In-house training** - Instruktur datang ke lokasi client
- **Online training** - Via Zoom/Google Meet dengan live coding
- **Hybrid** - Kombinasi online dan offline sessions

## Sertifikat

Peserta yang menyelesaikan pelatihan dan project assignments akan mendapatkan sertifikat kelulusan dari ArtiVisi Intermedia.

## Informasi Lebih Lanjut

Untuk informasi jadwal, biaya, dan customization pelatihan, silakan kunjungi [Halaman Kontak](/contact_us/).
