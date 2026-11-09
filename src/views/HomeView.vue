<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AppIcon from '../components/AppIcon.vue'
import SectionHeader from '../components/SectionHeader.vue'
import ServiceCard from '../components/ServiceCard.vue'
import { homeServices } from '../data/services'
import { budget, news, products, stats } from '../data/site'

const router = useRouter()
const query = ref('')

const rupiah = (value) =>
  new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  })
    .format(value)
    .replace(/\u00a0/g, ' ')

function search(term = query.value) {
  router.push({ path: '/layanan', query: term.trim() ? { q: term.trim() } : {} })
}

const quickSearch = ['KTP', 'SKU', 'SKTM']
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative isolate overflow-hidden bg-forest-950 text-white">
      <img
        src="/img/hero.jpg"
        alt="Hamparan sawah Desa Bandungrejo saat pagi hari"
        class="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-forest-950/95 via-forest-950/80 to-forest-900/35" />
      <div class="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-forest-950/20" />
      <div class="hero-grain absolute inset-0 opacity-40" />

      <div class="container-x relative grid gap-10 py-14 sm:py-20 lg:grid-cols-[1.45fr_0.85fr] lg:items-center lg:gap-12 lg:py-24">
        <div>
          <p class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.14em] text-gold-100 backdrop-blur-sm">
            <AppIcon name="shield" :size="13" class="text-gold-300" />
            Portal Integrasi Layanan Warga Mandiri 24/7
          </p>

          <h1 class="mt-5 max-w-[660px] text-[34px] leading-[1.06] text-white sm:text-[46px] lg:text-[58px]">
            Maju, Berbudaya, dan Melayani dengan
            <em class="italic text-gold-200">Transparansi.</em>
          </h1>

          <p class="mt-5 max-w-xl text-[14px] leading-relaxed text-white/75 sm:text-[15.5px]">
            Pusat pelayanan administratif modern dan keterbukaan tata kelola desa berbasis digital.
            Mempercepat urusan kependudukan, memajukan sektor pertanian, dan membuka ruang aspirasi
            warga Desa Bandungrejo.
          </p>

          <form class="mt-7 flex max-w-xl flex-col gap-2 rounded-2xl bg-white/95 p-2 shadow-[0_20px_50px_-20px_rgba(0,0,0,.5)] backdrop-blur sm:flex-row" @submit.prevent="search()">
            <div class="relative flex-1">
              <AppIcon name="search" :size="18" class="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-forest-900/40" />
              <input
                v-model="query"
                type="search"
                aria-label="Cari layanan desa"
                placeholder="Cari surat, regulasi, jadwal posyandu…"
                class="w-full rounded-xl border-0 bg-transparent py-3 pl-10 pr-3 text-[13.5px] text-ink outline-none placeholder:text-forest-900/40"
              />
            </div>
            <button type="submit" class="btn-primary shrink-0">
              <AppIcon name="search" :size="16" />
              Cari Layanan
            </button>
          </form>

          <div class="mt-3 flex flex-wrap items-center gap-2 text-[11px] text-white/55">
            <span class="uppercase tracking-[0.1em]">Populer:</span>
            <button
              v-for="term in quickSearch"
              :key="term"
              type="button"
              class="rounded-full border border-white/20 px-2.5 py-0.5 font-semibold text-white/80 transition hover:border-white/50 hover:text-white"
              @click="search(term)"
            >
              {{ term }}
            </button>
          </div>

          <div class="mt-7 flex flex-wrap gap-3">
            <RouterLink to="/layanan" class="btn-gold">
              <AppIcon name="id-card" :size="17" />
              Ajukan Layanan Mandiri
            </RouterLink>
            <a href="#profil" class="btn-ghost-light">
              <AppIcon name="building" :size="17" />
              Jelajahi Profil Desa
            </a>
          </div>
        </div>

        <div class="space-y-3 lg:pl-2">
          <div class="rounded-2xl border border-white/20 bg-forest-950/45 p-5 backdrop-blur-md">
            <div class="flex items-center justify-between gap-3">
              <p class="text-[10.5px] font-bold uppercase tracking-[0.15em] text-white/60">Agenda Desa Hari Ini</p>
              <span class="chip bg-gold-300 text-forest-950">Aktif</span>
            </div>
            <h2 class="mt-3 text-[19px] leading-snug text-white">
              Pelayanan Administrasi Terpadu RW 03
            </h2>
            <p class="mt-2 text-[12.5px] leading-relaxed text-white/65">
              Petugas desa turun langsung ke Balai RW 03 untuk perekaman data administrasi dan
              aktivasi IKD (Identitas Kependudukan Digital).
            </p>
            <p class="mt-3.5 flex items-center gap-2 text-[11.5px] font-semibold text-gold-200">
              <AppIcon name="clock" :size="14" />
              09.00 – 14.00 WIB
              <span class="text-white/40">•</span>
              <span class="font-normal text-white/65">Balai RW 03 Dk. Bandung</span>
            </p>
          </div>

          <div class="flex items-center gap-4 rounded-2xl border border-white/15 bg-white p-4 shadow-xl">
            <span class="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-forest-100 text-forest-700">
              <AppIcon name="phone" :size="22" />
            </span>
            <div>
              <p class="text-[10px] font-bold uppercase tracking-[0.13em] text-forest-900/55">
                Hotline Siaga Bencana & Warga
              </p>
              <a href="tel:081225904411" class="mt-0.5 block text-[22px] font-bold tracking-tight text-forest-900">
                0812-2590-7811
              </a>
              <p class="text-[11.5px] text-forest-900/55">Respon Cepat Tanggap 24 Jam Non-Stop</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Statistik -->
    <div class="container-x relative z-10 -mt-8 sm:-mt-10">
      <dl class="grid grid-cols-2 overflow-hidden rounded-2xl border border-forest-100 bg-white shadow-[0_24px_60px_-35px_rgba(15,34,19,.5)] sm:grid-cols-5" v-reveal>
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="border-forest-100 px-4 py-5 text-center last:col-span-2 sm:border-l sm:py-6 sm:first:border-l-0 sm:last:col-span-1"
          :class="stat === stats[1] ? 'border-l' : ''"
        >
          <dt class="sr-only">{{ stat.label }}</dt>
          <dd>
            <span class="font-display text-[26px] font-semibold tracking-tight text-forest-900 sm:text-[30px]">{{ stat.value }}</span>
            <span v-if="stat.unit" class="ml-1 text-[11px] font-semibold uppercase tracking-wide text-forest-700">{{ stat.unit }}</span>
            <span class="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.13em] text-forest-900/50">{{ stat.label }}</span>
          </dd>
        </div>
      </dl>
    </div>

    <!-- Layanan -->
    <section id="layanan" class="section">
      <div class="container-x">
        <SectionHeader
          eyebrow="Pelayanan Berbasis Digital (Non-Stop)"
          title="Layanan Mandiri Warga"
          description="Permohonan dokumen kependudukan resmi dapat diajukan secara online dengan verifikasi kode QR langsung ke konsol Anda."
          link-label="Lihat semua layanan"
          link-to="/layanan"
        >
          <template #meta>
            <div class="mt-4 flex flex-wrap items-center gap-2 text-[11.5px]">
              <span class="chip-gold">
                <AppIcon name="clock" :size="12" />
                Rata-rata respon 15–30 menit
              </span>
              <span class="chip-outline">Tanpa biaya retribusi</span>
            </div>
          </template>
        </SectionHeader>

        <div class="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            v-for="(service, index) in homeServices"
            :key="service.id"
            :service="service"
            compact
            v-reveal="index * 60"
          />
        </div>
      </div>
    </section>

    <!-- Sambutan -->
    <section id="profil" class="bg-forest-50/60 py-16 sm:py-20">
      <div class="container-x">
        <div class="grid overflow-hidden rounded-2xl border border-forest-100 bg-white shadow-[0_30px_60px_-45px_rgba(15,34,19,.6)] lg:grid-cols-[360px_1fr]">
          <div class="relative min-h-[300px] lg:min-h-full">
            <img
              src="/img/kades.jpg"
              alt="Kepala Desa Bandungrejo, H. Ahmad Dzakirin, S.Sos."
              class="absolute inset-0 h-full w-full object-cover object-top"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-forest-950/45 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-white/10" />
            <span class="absolute bottom-4 left-4 rounded-lg bg-forest-950/65 px-3 py-2 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur">
              Kepala Desa Bandungrejo
            </span>
          </div>

          <div class="p-6 sm:p-9 lg:p-11">
            <p class="eyebrow">Sambutan Kepala Desa & Komitmen Pelayanan</p>
            <AppIcon name="quote" :size="34" class="mt-5 text-gold-400" />
            <h2 class="mt-3 max-w-xl text-[24px] leading-[1.2] text-forest-950 sm:text-[31px]">
              “Membangun dari Akar Rumput, Menjaga Tradisi dengan Semangat Pembaruan.”
            </h2>
            <p class="mt-4 max-w-2xl text-[13.5px] leading-relaxed text-forest-900/70 sm:text-[14.5px]">
              “Terwujudnya Desa Bandungrejo yang Sejahtera, Mandiri, Adil, dan Berdaya Saing melalui
              Pelayanan Prima dan Pemberdayaan Potensi Lokal.” Seluruh layanan administrasi digital
              yang tersedia pada portal ini kami rancang agar warga dapat mengurus dokumen tanpa
              harus berulang kali datang ke balai desa.
            </p>
            <p class="mt-4 max-w-2xl text-[13.5px] leading-relaxed text-forest-900/70 sm:text-[14.5px]">
              Setiap laporan dan aspirasi akan diteruskan langsung ke Kepala Desa & BPD dengan
              jaminan kerahasiaan identitas pelapor sesuai regulasi whistleblowing desa.
            </p>

            <div class="mt-6 flex flex-wrap items-center gap-3">
              <RouterLink to="/layanan#lapor" class="btn-primary btn-sm">
                <AppIcon name="megaphone" :size="15" />
                Laporkan & Sampaikan Aspirasi
              </RouterLink>
              <a href="tel:0291685112" class="btn-outline btn-sm">
                <AppIcon name="phone" :size="15" />
                Hubungi Balai Desa
              </a>
            </div>

            <div class="mt-7 flex items-center gap-3 border-t border-forest-100 pt-5">
              <span class="grid h-10 w-10 place-items-center rounded-full bg-forest-100 font-display text-sm font-bold text-forest-800">AD</span>
              <div>
                <p class="text-sm font-bold text-forest-950">H. Ahmad Dzakirin, S.Sos.</p>
                <p class="text-[11.5px] text-forest-900/55">Kepala Desa Bandungrejo · Periode 2023–2029</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Transparansi APBDes -->
    <section id="transparansi" class="section bg-gradient-to-b from-forest-50/40 to-paper">
      <div class="container-x">
        <div class="card overflow-hidden" v-reveal>
          <div class="flex flex-col gap-5 border-b border-forest-100 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-8">
            <div class="max-w-2xl">
              <p class="eyebrow">Transparansi Anggaran</p>
              <h2 class="mt-3 text-[28px] leading-tight text-forest-950 sm:text-[34px]">
                Transparansi Realisasi APBDes {{ budget.year }}
              </h2>
              <p class="mt-2 text-[13.5px] leading-relaxed text-forest-900/60">
                Ikhtisar pelaksanaan anggaran pendapatan dan belanja desa, disajikan terbuka untuk
                seluruh warga.
              </p>
            </div>
            <div class="flex flex-wrap items-center gap-2.5">
              <span class="chip-green">
                <AppIcon name="badge-check" :size="13" />
                Status: Audit Terverifikasi
              </span>
              <a href="#" class="btn-outline btn-sm" @click.prevent>
                <AppIcon name="download" :size="14" />
                Unduh Laporan PDF
              </a>
            </div>
          </div>

          <div class="p-6 sm:p-8">
            <div class="grid gap-3 sm:grid-cols-3">
              <div class="rounded-xl border border-forest-100 bg-forest-50/60 p-4">
                <p class="label">Total Pendapatan</p>
                <p class="mt-1.5 font-display text-[22px] font-semibold tracking-tight text-forest-900">{{ rupiah(budget.totalIncome) }}</p>
                <p class="mt-1 flex items-center gap-1 text-[11px] font-semibold text-forest-600">
                  <AppIcon name="trending-up" :size="13" /> 100% dari target
                </p>
              </div>
              <div class="rounded-xl border border-forest-100 bg-white p-4">
                <p class="label">Total Belanja</p>
                <p class="mt-1.5 font-display text-[22px] font-semibold tracking-tight text-forest-900">{{ rupiah(budget.totalSpend) }}</p>
                <p class="mt-1 flex items-center gap-1 text-[11px] font-semibold text-forest-600">
                  <AppIcon name="check-circle" :size="13" /> 95,1% terserap
                </p>
              </div>
              <div class="rounded-xl border border-forest-100 bg-white p-4">
                <p class="label">Pembiayaan & Silpa</p>
                <p class="mt-1.5 font-display text-[22px] font-semibold tracking-tight text-forest-900">{{ rupiah(budget.remaining) }}</p>
                <p class="mt-1 flex items-center gap-1 text-[11px] font-semibold text-gold-600">
                  <AppIcon name="wallet" :size="13" /> Saldo kas desa
                </p>
              </div>
            </div>

            <div class="mt-7">
              <div class="flex items-center justify-between gap-4">
                <h3 class="text-sm font-bold uppercase tracking-[0.1em] text-forest-900">Realisasi per Bidang Prioritas</h3>
                <span class="hidden text-[11px] text-forest-900/45 sm:block">Diperbarui 31 Desember {{ budget.year }}</span>
              </div>
              <ul class="mt-4 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                <li v-for="program in budget.programs" :key="program.name">
                  <div class="flex items-start justify-between gap-4">
                    <p class="text-[12.5px] font-semibold leading-snug text-forest-900/85">{{ program.name }}</p>
                    <p class="shrink-0 text-[11.5px] font-bold text-forest-800">
                      {{ program.percent }}%
                      <span class="ml-1 font-medium text-forest-900/40">({{ program.amount }})</span>
                    </p>
                  </div>
                  <div class="progress-track mt-2" role="img" :aria-label="`Realisasi ${program.name}: ${program.percent}%`">
                    <div class="progress-fill" :style="{ width: program.percent + '%' }" />
                  </div>
                  <p class="mt-1.5 text-[11.5px] leading-snug text-forest-900/50">{{ program.note }}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Berita -->
    <section id="berita" class="section pt-0">
      <div class="container-x">
        <SectionHeader
          eyebrow="Warta Resmi Sekretariat Desa"
          title="Kabar Desa & Publikasi"
          description="Informasi kegiatan, program bantuan, dan capaian pembangunan Desa Bandungrejo."
          link-label="Arsip berita lengkap"
          link-to="/#berita"
        />

        <div class="mt-9 grid gap-6 md:grid-cols-3">
          <article v-for="(item, index) in news" :key="item.title" class="card card-hover group overflow-hidden" v-reveal="index * 80">
            <a href="#" class="block overflow-hidden" @click.prevent>
              <div class="relative aspect-[16/10] overflow-hidden">
                <img :src="item.image" :alt="item.title" loading="lazy" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <span class="absolute left-3 top-3 rounded-md bg-forest-900/90 px-2.5 py-1 text-[10.5px] font-bold text-white backdrop-blur">
                  {{ item.category }}
                </span>
              </div>
            </a>
            <div class="flex flex-col p-5">
              <p class="flex items-center gap-2 text-[11px] font-medium text-forest-900/50">
                <span class="inline-flex items-center gap-1"><AppIcon name="calendar" :size="12" />{{ item.date }}</span>
                <span class="h-1 w-1 rounded-full bg-forest-300" />
                {{ item.source }}
              </p>
              <h3 class="mt-2.5 text-[19px] leading-snug text-forest-950">
                <a href="#" class="transition group-hover:text-forest-700" @click.prevent>{{ item.title }}</a>
              </h3>
              <p class="mt-2 text-[12.5px] leading-relaxed text-forest-900/60">{{ item.excerpt }}</p>
              <a href="#" class="link-arrow mt-4 pt-2 text-[12.5px]" @click.prevent>
                Baca Selengkapnya
                <AppIcon name="arrow-up-right" :size="14" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Potensi & UMKM -->
    <section id="potensi" class="relative overflow-hidden bg-forest-900 py-16 text-white sm:py-20 lg:py-24">
      <div class="hero-grain absolute inset-0 opacity-30" />
      <div class="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-forest-700/40 blur-3xl" />
      <div class="container-x relative">
        <SectionHeader
          eyebrow="Potensi Unggulan & Produk Warga"
          title="Kekayaan Lokal, Kemandirian Ekonomi"
          description="Produk unggulan hasil pertanian, peternakan, dan UMKM warga Desa Bandungrejo yang dikelola bersama BUMDes."
          link-label="Lihat katalog lengkap"
          link-to="/#potensi"
          light
        />

        <div class="mt-9 grid gap-5 md:grid-cols-3">
          <article v-for="(product, index) in products" :key="product.title" class="group overflow-hidden rounded-2xl bg-white text-ink transition duration-300 hover:-translate-y-1 hover:shadow-2xl" v-reveal="index * 80">
            <div class="relative aspect-[4/3] overflow-hidden">
              <img :src="product.image" :alt="product.title" loading="lazy" class="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <span class="absolute left-3 top-3 rounded-md bg-gold-300 px-2.5 py-1 text-[10.5px] font-bold text-forest-950">
                {{ product.tag }}
              </span>
            </div>
            <div class="p-5">
              <h3 class="text-[19px] leading-snug text-forest-950">{{ product.title }}</h3>
              <p class="mt-1.5 text-[12.5px] leading-relaxed text-forest-900/60">{{ product.desc }}</p>
              <div class="mt-4 flex items-center justify-between gap-3 border-t border-forest-100 pt-4">
                <p class="text-[12.5px] font-bold text-forest-800">{{ product.price }}</p>
                <a href="#" class="grid h-9 w-9 place-items-center rounded-full bg-forest-50 text-forest-700 transition hover:bg-forest-800 hover:text-white" aria-label="Lihat detail produk" @click.prevent>
                  <AppIcon name="arrow-up-right" :size="16" />
                </a>
              </div>
            </div>
          </article>
        </div>

        <p class="mt-7 flex items-center gap-2 text-[11.5px] text-white/50">
          <AppIcon name="info" :size="14" />
          Katalog produk dikelola oleh BUMDes Bandungrejo. Harga dapat berubah sesuai panen dan stok.
        </p>
      </div>
    </section>

    <!-- Kantor & Peta -->
    <section id="kantor" class="section">
      <div class="container-x">
        <SectionHeader
          eyebrow="Kantor Balai Desa & Fasilitas Publik"
          title="Kunjungi Balai Desa Bandungrejo"
          description="Layanan tatap muka tersedia setiap hari kerja. Untuk urusan darurat, hubungi hotline desa 24 jam."
          link-label="Rute perjalanan"
          link-to="/#kantor"
        />

        <div class="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div class="card relative min-h-[340px] overflow-hidden">
            <img
              src="/img/map.svg"
              alt="Peta ilustrasi lokasi Kantor Balai Desa Bandungrejo, Kecamatan Karanganyar, Kabupaten Demak"
              class="absolute inset-0 h-full w-full object-cover"
            />
            <div class="pointer-events-none absolute inset-0 bg-forest-900/5" />

            <div class="pointer-events-none absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-1/2">
              <span class="absolute inset-0 -m-4 animate-ping rounded-full bg-forest-700/20" />
              <span class="relative grid h-11 w-11 place-items-center rounded-full border-2 border-white bg-forest-800 text-white shadow-lg">
                <AppIcon name="map-pin" :size="20" />
              </span>
            </div>

            <span class="absolute right-2 top-2 rounded bg-white/85 px-1.5 py-0.5 text-[9px] text-forest-900/60">
              Ilustrasi peta desa
            </span>

            <div class="pointer-events-none absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-xl border border-forest-100 bg-white/95 p-3 shadow-lg backdrop-blur sm:inset-x-4 sm:bottom-4">
              <div class="flex items-center gap-2.5">
                <span class="grid h-9 w-9 place-items-center rounded-lg bg-forest-100 text-forest-700">
                  <AppIcon name="map-pin" :size="18" />
                </span>
                <div>
                  <p class="text-[12.5px] font-bold text-forest-950">Kantor Balai Desa Bandungrejo</p>
                  <p class="text-[11px] text-forest-900/55">Jl. Raya Bandungrejo No. 01, Demak</p>
                </div>
              </div>
              <span class="hidden chip-green sm:inline-flex">Buka hari ini</span>
            </div>
          </div>

          <div class="card flex flex-col p-6 sm:p-7">
            <div class="flex items-start gap-3">
              <span class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-forest-50 text-forest-700">
                <AppIcon name="building" :size="21" />
              </span>
              <div>
                <p class="label">Sekretariat Desa</p>
                <h3 class="mt-1 text-xl text-forest-950">Kantor Balai Desa Bandungrejo</h3>
                <p class="mt-1 text-[12.5px] leading-relaxed text-forest-900/60">
                  Jl. Raya Bandungrejo No. 01, Kec. Karanganyar, Kab. Demak, Jawa Tengah 59582
                </p>
              </div>
            </div>

            <dl class="mt-5 divide-y divide-forest-100 border-y border-forest-100 text-[12.5px]">
              <div class="flex items-center justify-between gap-4 py-2.5">
                <dt class="text-forest-900/55">Senin – Kamis</dt>
                <dd class="font-semibold tabular-nums text-forest-900">08.00 – 15.30 WIB</dd>
              </div>
              <div class="flex items-center justify-between gap-4 py-2.5">
                <dt class="text-forest-900/55">Jumat</dt>
                <dd class="font-semibold tabular-nums text-forest-900">08.00 – 11.30 WIB</dd>
              </div>
              <div class="flex items-center justify-between gap-4 py-2.5">
                <dt class="text-forest-900/55">Petugas Piket</dt>
                <dd class="font-semibold text-forest-900">Sekretariat Desa</dd>
              </div>
            </dl>

            <div class="mt-5 space-y-2.5 text-[12.5px]">
              <a href="tel:0291685112" class="flex items-center gap-2.5 font-semibold text-forest-800 transition hover:text-forest-950">
                <AppIcon name="phone" :size="15" class="text-forest-500" />
                (0291) 685-112
              </a>
              <a href="mailto:pemdes@bandungrejo-demak.desa.id" class="flex items-center gap-2.5 text-forest-800 transition hover:text-forest-950">
                <AppIcon name="mail" :size="15" class="text-forest-500" />
                pemdes@bandungrejo-demak.desa.id
              </a>
            </div>

            <div class="mt-auto flex flex-wrap gap-2.5 pt-6">
              <a href="https://wa.me/6281225907811" target="_blank" rel="noopener" class="btn-primary btn-sm">
                <AppIcon name="phone" :size="14" />
                Hubungi via WhatsApp
              </a>
              <a href="https://www.openstreetmap.org/?mlat=-6.895&mlon=110.6715#map=16/-6.895/110.6715" target="_blank" rel="noopener" class="btn-outline btn-sm">
                <AppIcon name="map-pin" :size="14" />
                Buka Peta
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
