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
