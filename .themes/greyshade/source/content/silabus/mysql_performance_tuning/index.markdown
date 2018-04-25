---
layout: page
title: "MySQL Performance Tuning"
date: 2013-07-18 13:17
comments: true
sharing: true
footer: true
---

<div markdown class="pageContent">

##### Overview
- - - - - - -
* Berbagai Level Tuning Database
	* Source Code
	* Desain Skema
	* Query dan Index
	* Caching
	* Partitioning
	* Database Engine
	* Network
	* Sistem Operasi
* Prosedur Performance Tuning
	* Goals
	* Measure
	* Bottleneck
	* Optimize
	* Analyze

##### Desain Skema Database
- - - - - - -
* Pemilihan Storage Engine
* Struktur Tabel
* Normalisasi
* Constraint

##### Query
- - - - - - -
* Analisa Query dengan EXPLAIN
* Memahami output EXPLAIN
* Tuning dan Modifikasi Query
* Menggunakan index

##### Caching
- - - - - - -
* Berbagai cache yang tersedia
* Table Definition Cache
* Query Cache
* Memahami Query Cache
* Mengaktifkan Query Cache

##### Partitioning
- - - - - - -
* Memahami partitioning
* Jenis-jenis partition
* Mengelola partition

##### Database Engine
- - - - - - -
* Tipikal penggunaan database
	* dedicated machine
	* write intensive
	* read intensive
	* Monitor performance
	* Mencari bottleneck
	* Tuning options
