# Desa Bandungrejo — Portal Desa

Website profil + layanan administrasi Desa Bandungrejo. Vue 3 + Vite + Tailwind CSS v4.

## Jalankan

```bash
npm install
npm run dev
```

Buka `http://localhost:5173`.

Build produksi:

```bash
npm run build
npm run preview
```

## Tampilan

Beranda dibuka dengan hamparan sawah Desa Bandungrejo yang memenuhi layar, ditemani judul serif besar dan satu kolom pencarian di tengahnya. Dari situ warga bisa memilih kategori lalu mengetik kebutuhannya, dan hasilnya langsung dibawa ke halaman `/layanan` lewat `?q=…&kategori=…`.

Navigasi berbentuk pill melayang di atas foto saat halaman belum digulir, lalu berubah putih bersih begitu pengunjung mulai membaca. Gaya yang sama dipakai di halaman lain agar tidak ada dua bahasa desain. Di bawah hero, enam lingkaran kategori layanan dan enam lingkaran potensi warga menjadi pintu cepat menuju administrasi maupun produk unggulan desa.

Lambang Kabupaten Demak di kiri atas sengaja dibiarkan tanpa kotak dan bayangan, menyatu dengan latar header seperti cap resmi yang menempel langsung pada halaman.

## Struktur

- `src/views/HomeView.vue` — beranda (hero, statistik, layanan, sambutan, APBDes, berita, UMKM, peta)
- `src/views/LayananView.vue` — katalog surat, lacak berkas, formulir pengaduan
- `src/data/services.js` — data layanan + kategori
- `src/data/site.js` — statistik, APBDes, berita, produk, kontak
- `public/img/` — foto & peta ilustrasi

## Catatan demo

- Nama pejabat, angka APBDes, berita, dan produk masih data contoh.
- Formulir pengajuan & pengaduan hanya simulasi (tidak mengirim data).
- Foto kepala desa berasal dari Wikimedia Commons dan hanya placeholder; ganti dengan foto resmi desa sebelum dipublikasikan.
