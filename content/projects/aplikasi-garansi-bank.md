---
title: "Aplikasi Garansi Bank"
date: 2024-02-15
description: "Aplikasi yang memudahkan pengelolaan dan penerbitan garansi bank secara digital."
thumbnail: "/img/projects/aplikasi-garansi-bank/thumbnail.png"
---

## Deskripsi Proyek

Aplikasi yang memudahkan pengelolaan dan penerbitan garansi bank secara digital. Sistem ini memungkinkan organisasi untuk memproses transaksi secara efisien sambil menjaga kepatuhan regulasi dan mengelola eksposur risiko bisnis.

## Kemampuan Utama

Sistem ini mencakup administrasi pengguna di berbagai tingkat organisasi, manajemen bank dan cabang, serta siklus hidup garansi yang lengkap. Fungsi inti meliputi penyimpanan dokumen dengan workflow approval, mekanisme penarikan dengan kontrol otorisasi, tracking garansi, monitoring status, dan dashboard eksekutif.

## Arsitektur Teknis

**Backend & Framework:**
- Spring Boot (3.1.0) framework dengan Java 17
- Database PostgreSQL dengan migrasi Flyway
- Spring Security dengan autentikasi CAS dan OAuth2
- Pola komunikasi REST API

**Frontend:**
- Vue.js dengan arsitektur microfrontend (Single SPA)
- Vue Router, Vuex state management
- npm dan Webpack build tooling

**Infrastructure:**
- Containerization Docker
- Orchestration Kubernetes dengan Helm
- CI/CD pipeline Jenkins
- Git version control

**Libraries Tambahan:**
- File processing: Apache Commons IO, Jxls, iText PDF, OpenCSV
- Email: Spring Boot Mail
- Reactive: Spring WebFlux
- Testing: Jest, Cypress

## Development Stack

Tim menggunakan Vue CLI untuk pengembangan frontend, Maven untuk build backend, Docker Compose untuk environment lokal, dan framework testing komprehensif termasuk Jest dan Cypress.

## Screenshots

![Dashboard](/img/projects/aplikasi-garansi-bank/01-dashboard.png)

![Tracking Status](/img/projects/aplikasi-garansi-bank/03-tracking.png)

![Approval Process](/img/projects/aplikasi-garansi-bank/04-approval.png)

![List View](/img/projects/aplikasi-garansi-bank/05-list.png)
