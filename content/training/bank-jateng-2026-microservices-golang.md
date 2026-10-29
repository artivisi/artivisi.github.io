---
title: "Bank Jateng (Microservices dengan Golang dan Cloud)"
date: 2026-10-29
client: "Bank Jateng"
description: "Pelatihan in-house 4 hari arsitektur microservices dengan Golang, gRPC, Kafka, dan Kubernetes untuk developer Bank Jateng."
image: "/img/training/bank-jateng-2026/01-foto-bersama.jpg"
---

## Deskripsi Program

Pelatihan in-house 4 hari untuk 12 developer PT Bank Pembangunan Daerah Jawa Tengah (Bank Jateng), berlangsung pada 26–29 Oktober 2026 di Kantor Pusat Bank Jateng, Semarang.

Seluruh materi dibangun di atas satu studi kasus: sistem simulasi perbankan dengan tiga service (account, transfer, notification) yang dikembangkan bertahap melalui 10 lab. Setiap peserta mengerjakan seluruh lab di laptop masing-masing, mulai dari service pertama hingga deployment ke Kubernetes melalui pipeline CI/CD.

## Fokus Pelatihan

- Arsitektur microservices dan dekomposisi service, dasar bahasa Go
- REST API, validasi, database per service (PostgreSQL), health check
- Resiliency komunikasi sinkron: timeout, retry, circuit breaker (failsafe-go)
- Komunikasi internal gRPC: kontrak protobuf, code generation, interceptor
- Saga transfer dengan kompensasi, transactional outbox, dan idempotent consumer di atas Kafka
- Keamanan antar service dengan OAuth2 dan JWT
- Observability: structured logging dengan correlation ID, metrik Prometheus, tracing OpenTelemetry, dashboard Grafana
- Containerization, deployment ke Kubernetes, dan pipeline CI/CD per service

## Tujuan Pelatihan

- Mampu merancang dekomposisi service untuk aplikasi perbankan
- Mampu membangun service dengan Go yang berkomunikasi melalui REST, gRPC, dan Kafka
- Mampu menjaga konsistensi data lintas service dengan saga dan transactional outbox
- Mampu memasang observability dan menjalankan deployment otomatis ke Kubernetes

## Galeri Foto

![Foto bersama peserta dan instruktur di hari keempat](/img/training/bank-jateng-2026/01-foto-bersama.jpg)

![Foto bersama peserta pelatihan](/img/training/bank-jateng-2026/02-foto-bersama.jpg)

![Peserta pelatihan Microservices dan Cloud Bank Jateng](/img/training/bank-jateng-2026/03-foto-bersama.jpg)
