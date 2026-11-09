<script setup>
import BrandLogo from './BrandLogo.vue'
import AppIcon from './AppIcon.vue'
import { services } from '../data/services'

const year = new Date().getFullYear()
const topServices = services.slice(0, 5)
</script>

<template>
  <footer class="border-t border-forest-100 bg-forest-50/70">
    <div class="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.1fr] lg:gap-12">
      <div>
        <RouterLink to="/" class="flex items-center gap-3">
          <BrandLogo :size="50" />
          <span class="font-display text-lg font-semibold text-forest-900">Desa Bandungrejo</span>
        </RouterLink>
        <p class="mt-4 max-w-sm text-[13.5px] leading-relaxed text-forest-900/65">
          Pusat digital pelayanan administratif dan keterbukaan informasi publik Pemerintah Desa
          Bandungrejo, Kecamatan Karanganyar, Kabupaten Demak.
        </p>
        <address class="mt-5 space-y-2.5 text-[13px] not-italic text-forest-900/75">
          <p class="flex gap-2.5">
            <AppIcon name="map-pin" :size="16" class="mt-0.5 shrink-0 text-forest-600" />
            Jl. Raya Bandungrejo No. 01, Karanganyar, Demak, Jawa Tengah 59582
          </p>
          <p class="flex gap-2.5">
            <AppIcon name="phone" :size="16" class="shrink-0 text-forest-600" />
            <a href="tel:0291685112" class="transition hover:text-forest-900">(0291) 685-112</a>
          </p>
        </address>
      </div>

      <div>
        <h2 class="text-sm font-bold uppercase tracking-[0.12em] text-forest-900">Layanan & Administrasi</h2>
        <ul class="mt-4 space-y-2.5 text-[13px] text-forest-900/70">
          <li v-for="service in topServices" :key="service.id">
            <RouterLink to="/layanan" class="transition hover:text-forest-900">{{ service.title }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/layanan#lapor" class="transition hover:text-forest-900">Layanan Pengaduan Warga</RouterLink>
          </li>
        </ul>
      </div>

      <div>
        <h2 class="text-sm font-bold uppercase tracking-[0.12em] text-forest-900">Transparansi & Dokumen</h2>
        <ul class="mt-4 space-y-2.5 text-[13px] text-forest-900/70">
          <li><a href="/#transparansi" class="transition hover:text-forest-900">Laporan Realisasi APBDes 2024</a></li>
          <li><a href="#rkpdes" class="transition hover:text-forest-900">Rencana Kerja Pemerintah Desa (RKPDes)</a></li>
          <li><a href="#statistik" class="transition hover:text-forest-900">Statistik Penduduk & Demografi</a></li>
          <li><a href="#perdes" class="transition hover:text-forest-900">Peraturan Desa (Perdes)</a></li>
          <li><a href="/#potensi" class="transition hover:text-forest-900">Katalog UMKM & Pertanian Desa</a></li>
        </ul>
      </div>

      <div>
        <h2 class="text-sm font-bold uppercase tracking-[0.12em] text-forest-900">Jam Operasional Kantor</h2>
        <dl class="mt-4 overflow-hidden rounded-xl border border-forest-100 bg-white text-[13px]">
          <div class="flex items-center justify-between gap-3 px-4 py-2.5">
            <dt class="text-forest-900/65">Senin – Kamis</dt>
            <dd class="font-semibold tabular-nums text-forest-900">08.00 – 15.30</dd>
          </div>
          <div class="flex items-center justify-between gap-3 border-t border-forest-100 px-4 py-2.5">
            <dt class="text-forest-900/65">Jumat</dt>
            <dd class="font-semibold tabular-nums text-forest-900">08.00 – 11.30</dd>
          </div>
          <div class="flex items-center justify-between gap-3 border-t border-forest-100 px-4 py-2.5">
            <dt class="text-forest-900/65">Sabtu, Minggu & Libur</dt>
            <dd class="font-semibold text-red-600">Tutup</dd>
          </div>
        </dl>
        <p class="mt-3 text-[12px] leading-relaxed text-forest-900/55">
          Permohonan surat darurat dapat menghubungi Kepala Dusun atau nomor hotline desa.
        </p>
      </div>
    </div>

    <div class="border-t border-forest-100">
      <div class="container-x flex flex-col gap-3 py-4 text-[12px] text-forest-900/60 sm:flex-row sm:items-center sm:justify-between">
        <p class="flex items-start gap-2">
          <AppIcon name="info" :size="15" class="mt-0.5 shrink-0 text-forest-500" />
          Portal ini dikelola oleh Tim Sistem Informasi Desa (SID) sesuai UU No. 14 Tahun 2008 tentang Keterbukaan Informasi Publik.
        </p>
        <a href="mailto:ppid@bandungrejo-demak.desa.id" class="link-arrow shrink-0 text-[12px]">
          Hubungi PPID Desa
          <AppIcon name="arrow-right" :size="14" />
        </a>
      </div>
    </div>

    <div class="bg-white/60">
      <div class="container-x flex flex-col gap-2 py-4 text-[12px] text-forest-900/55 sm:flex-row sm:items-center sm:justify-between">
        <p>© {{ year }} Pemerintah Desa Bandungrejo. Hak Cipta Dilindungi.</p>
        <ul class="flex flex-wrap items-center gap-x-5 gap-y-2">
          <li><a href="#" class="transition hover:text-forest-900" @click.prevent>Kebijakan Privasi</a></li>
          <li><a href="#" class="transition hover:text-forest-900" @click.prevent>Syarat Layanan</a></li>
          <li><a href="#" class="transition hover:text-forest-900" @click.prevent>Aksesibilitas</a></li>
        </ul>
      </div>
    </div>
  </footer>
</template>
