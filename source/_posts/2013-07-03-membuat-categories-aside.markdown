---
layout: post
title: "Membuat Categories Aside"
date: 2013-07-03 12:38
comments: true
categories: octopress
---

Ada satu fitur yang cukup esensial di blog engine tapi tidak ada di Octopress yaitu tampilan daftar kategori. Alhamdulillah, ternyata sudah ada yang membuat plugin tersebut. Namun, di sini ada beberapa perbaikan dari plugin tersebut.

<!-- more -->

Berikut ini langkah-langkahnya :<br />
**1. Download <code>category_list.rb</code> berikut ini**<br />
{% include_code categories/category_list.rb %}

**2. Buat file <code>source/_includes/custom/asides/categories.html</code> dengan isi sebagai berikut :**

{% include_code categories/categories.html %}

**3. Tambahkan nilai <code>custom/asides/categories.html</code> pada properti <code>default_asides</code> di file <code>_config.yml</code> sehingga menjadi seperti ini : **

```
default_asides: [asides/recent_posts.html, custom/asides/categories.html, 
asides/github.html, asides/delicious.html, asides/pinboard.html, asides/googleplus.html]
```

**4. Selesai. Daftar kategori akan tampil di sidebar blog.**
