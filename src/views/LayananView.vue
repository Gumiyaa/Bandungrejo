<script setup>
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import AppIcon from '../components/AppIcon.vue'
import SectionHeader from '../components/SectionHeader.vue'
import ServiceCard from '../components/ServiceCard.vue'
import { categories, services } from '../data/services'
import { contacts } from '../data/site'

const route = useRoute()

const query = ref(route.query.q?.toString() || '')
const category = ref(route.query.kategori?.toString() || 'semua')
const trackId = ref('')
const trackResult = ref('')
const trackError = ref('')
const sent = ref(false)

watch(
  () => route.query.q,
  (value) => {
    query.value = value?.toString() || ''
  },
)

watch(
  () => route.query.kategori,
  (value) => {
    const key = value?.toString() || 'semua'
    category.value = categories.some((item) => item.key === key) ? key : 'semua'
  },
)

const categoryCount = (key) =>
  key === 'semua' ? services.length : services.filter((s) => s.category === key).length

const filtered = computed(() => {
  const term = query.value.trim().toLowerCase()
  return services.filter((service) => {
    const matchCategory = category.value === 'semua' || service.category === category.value
    const haystack = [service.title, service.short, service.code, service.badge.label, ...service.requirements]
      .join(' ')
      .toLowerCase()
    return matchCategory && (!term || haystack.includes(term))
  })
})

function scrollToCatalog() {
  document.querySelector('#katalog')?.scrollIntoView({ behavior: 'smooth' })
}

function submitSearch() {
  category.value = 'semua'
  scrollToCatalog()
}

function resetFilter() {
  query.value = ''
  category.value = 'semua'
}

function track() {
  const value = trackId.value.trim()
  trackResult.value = ''
  trackError.value = ''

  if (value.length < 6) {
    trackError.value = 'Masukkan nomor berkas lengkap, contoh: BDR-2025-081.'
    return
  }

  trackResult.value = `Berkas ${value.toUpperCase()} sedang dalam verifikasi operator desa. Estimasi selesai 1 hari kerja.`
}

function sendReport() {
  sent.value = true
}
</script>

<template>
  <div>
    <!-- Page hero -->
    <section class="relative overflow-hidden bg-gradient-to-b from-forest-100/70 via-forest-50/70 to-paper">
      <div class="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full bg-gold-200/30 blur-3xl" />
      <div class="container-x relative py-10 sm:py-14 lg:py-16">
        <nav class="flex items-center gap-2 text-[11.5px] font-medium text-forest-900/50" aria-label="Breadcrumb">
          <RouterLink to="/" class="transition hover:text-forest-800">Beranda</RouterLink>
          <AppIcon name="chevron-down" :size="12" class="-rotate-90" />
          <span class="text-forest-900/75">Layanan Administrasi</span>
        </nav>

        <div class="mt-6 grid gap-8 lg:grid-cols-[1.5fr_0.8fr] lg:items-start lg:gap-14">
          <div>
            <p class="eyebrow">Satu Pintu, Tanpa Ribet</p>
            <h1 class="mt-3 max-w-[720px] text-[32px] leading-[1.08] text-forest-950 sm:text-[42px] lg:text-[50px]">
              Pusat Layanan Terpadu & Administrasi Digital
            </h1>
            <p class="mt-4 max-w-2xl text-[14px] leading-relaxed text-forest-900/65 sm:text-[15.5px]">
              Gerbang administrasi kependudukan, perizinan usaha mikro, bantuan sosial, dan aspirasi
              warga Desa Bandungrejo, Kec. Karanganyar, Kab. Demak. Seluruh pengurusan dokumen resmi
              tidak dipungut biaya retribusi.
            </p>

            <div class="mt-6 grid max-w-xl gap-2.5 sm:grid-cols-2">
              <div class="flex items-center gap-3 rounded-xl border border-forest-100 bg-white p-3.5">
                <span class="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-forest-50 text-forest-700">
                  <AppIcon name="wallet" :size="18" />
                </span>
                <div>
                  <p class="text-[9.5px] font-bold uppercase tracking-[0.12em] text-forest-900/45">Biaya Administrasi</p>
                  <p class="text-[13.5px] font-bold text-forest-950">100% Gratis</p>
                </div>
              </div>
              <div class="flex items-center gap-3 rounded-xl border border-forest-100 bg-white p-3.5">
                <span class="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gold-100 text-gold-700">
                  <AppIcon name="badge-check" :size="18" />
                </span>
                <div>
                  <p class="text-[9.5px] font-bold uppercase tracking-[0.12em] text-forest-900/45">Validasi Surat</p>
                  <p class="text-[13.5px] font-bold text-forest-950">TTE Balai Sertifikasi BsRE</p>
                </div>
              </div>
            </div>
          </div>

          <aside class="rounded-2xl bg-forest-900 p-6 text-white shadow-[0_24px_50px_-30px_rgba(15,34,19,.8)]">
            <p class="eyebrow eyebrow-light">Butuh Pendampingan?</p>
            <h2 class="mt-3 text-[21px] leading-snug text-white">Operator desa siap membantu pengisian formulir Anda.</h2>
            <p class="mt-2 text-[12.5px] leading-relaxed text-white/60">
              Datang langsung ke meja pelayanan atau hubungi hotline pada jam kerja. Pendampingan
              tanpa biaya.
            </p>
            <a href="tel:0291685112" class="mt-5 flex items-center gap-3 rounded-xl border border-white/15 bg-white/10 p-3.5 backdrop-blur transition hover:bg-white/15">
              <span class="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gold-300 text-forest-950">
                <AppIcon name="phone" :size="19" />
              </span>
              <span>
                <span class="block text-[10px] font-bold uppercase tracking-[0.13em] text-white/50">Hotline Layanan</span>
                <span class="block text-base font-bold">(0291) 685-112</span>
              </span>
            </a>
            <p class="mt-3 flex items-center gap-2 text-[11px] text-white/45">
              <AppIcon name="clock" :size="13" />
              Senin – Jumat · 08.00 – 15.30 WIB
            </p>
          </aside>
        </div>
      </div>
    </section>

    <!-- Search + lacak berkas -->
    <div class="container-x relative z-10 -mt-6">
      <div class="grid gap-2.5 rounded-2xl border border-forest-100 bg-white p-2.5 shadow-[0_22px_50px_-32px_rgba(15,34,19,.5)] lg:grid-cols-[1.15fr_0.85fr]" v-reveal>
        <form class="flex flex-col gap-2 sm:flex-row sm:items-center" role="search" @submit.prevent="submitSearch">
          <div class="relative flex-1">
            <AppIcon name="search" :size="18" class="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-forest-900/40" />
            <input
              v-model="query"
              type="search"
              aria-label="Cari nama surat atau layanan"
              placeholder="Cari nama surat: SKU, KTP, Domisili, SKTM…"
              class="field border-forest-100 bg-forest-50/40 pl-10"
            />
          </div>
          <button type="submit" class="btn-primary shrink-0">
            <AppIcon name="search" :size="16" />
            Temukan Layanan
          </button>
        </form>

        <form class="rounded-xl bg-forest-900 px-4 py-3 text-white" @submit.prevent="track">
          <div class="flex items-center justify-between gap-3">
            <p class="text-[10px] font-bold uppercase tracking-[0.13em] text-gold-200">Lacak Berkas Mandiri</p>
            <span class="hidden items-center gap-1.5 text-[10px] text-white/45 sm:inline-flex">
              <span class="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Sistem aktif
            </span>
          </div>
          <div class="mt-3 flex gap-2">
            <input
              v-model="trackId"
              type="text"
              aria-label="Nomor berkas"
              placeholder="Masukkan ID berkas (cth: BDR-2025-081)"
              class="min-w-0 flex-1 rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-[12.5px] text-white outline-none transition placeholder:text-white/55 focus:border-gold-300/60 focus:bg-white/15"
            />
            <button type="submit" class="btn-gold btn-sm shrink-0">Cek Status</button>
          </div>
          <p v-if="trackError" class="mt-2 text-[11px] font-medium text-red-300">{{ trackError }}</p>
          <p v-else-if="trackResult" class="mt-2 flex items-start gap-1.5 text-[11px] leading-snug text-gold-100">
            <AppIcon name="check-circle" :size="13" class="mt-0.5 shrink-0" />
            {{ trackResult }}
          </p>
          <p v-else class="mt-2 text-[10.5px] text-white/35">Nomor berkas dikirim ke WhatsApp setelah pengajuan.</p>
        </form>
      </div>

      <div class="mt-2 text-center lg:text-left">
        <p class="text-[11px] text-forest-900/45">
          Halaman ini melayani {{ services.length }} jenis administrasi. Butuh bantuan? <a href="#lapor" class="font-semibold text-forest-700 underline decoration-forest-200 underline-offset-2">Sampaikan lewat pengaduan</a>.
        </p>
      </div>
    </div>

    <!-- Dua jalur layanan -->
    <section class="pb-4 pt-12">
      <div class="container-x grid gap-4 md:grid-cols-2">
        <article class="card flex items-start gap-4 p-5 sm:p-6" v-reveal>
          <span class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-forest-50 text-forest-700">
            <AppIcon name="check-circle" :size="21" />
          </span>
          <div>
            <div class="flex flex-wrap items-center gap-2">
              <h2 class="text-[17px] text-forest-950">Layanan Daring Penuh (TTE Elektronik)</h2>
              <span class="chip-green">Langsung Jadi</span>
            </div>
            <p class="mt-1.5 text-[12.5px] leading-relaxed text-forest-900/60">
              SKU, Surat Pengantar Domisili, dan Keterangan Penghasilan dapat diunduh dalam format
              PDF resmi ber-barcode verifikasi tanpa hadir ke Balai Desa.
            </p>
          </div>
        </article>

        <article class="card flex items-start gap-4 p-5 sm:p-6" v-reveal="80">
          <span class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gold-100 text-gold-700">
            <AppIcon name="building" :size="21" />
          </span>
          <div>
            <div class="flex flex-wrap items-center gap-2">
              <h2 class="text-[17px] text-forest-950">Layanan Terpadu Balai Desa (Fisik)</h2>
              <span class="chip-gold">Hadir di Lokasi</span>
            </div>
            <p class="mt-1.5 text-[12.5px] leading-relaxed text-forest-900/60">
              Perekaman KTP-el pemula, pengambilan fisik Kartu Keluarga tebal, dan pengesahan akta
              tetap mewajibkan verifikasi identitas fisik di Loket I Balai Desa Bandungrejo.
            </p>
          </div>
        </article>
      </div>
    </section>

    <!-- Katalog -->
    <section id="katalog" class="section pt-12 sm:pt-14">
      <div class="container-x">
        <SectionHeader
          eyebrow="Katalog Standar Operasional Pelayanan"
          title="Pilih Jenis Administrasi Surat"
          description="Setiap layanan mencantumkan estimasi waktu, persyaratan dokumen, dan alur pengurusan yang transparan."
        >
          <template #meta>
            <p class="mt-3 text-[11.5px] text-forest-900/45">
              Menampilkan <span class="font-semibold text-forest-800">{{ filtered.length }}</span> dari
              {{ services.length }} layanan
            </p>
          </template>
        </SectionHeader>

        <div class="mt-6 flex gap-2 overflow-x-auto pb-1" role="tablist" aria-label="Kategori layanan">
          <button
            v-for="tab in categories"
            :key="tab.key"
            type="button"
            role="tab"
            :aria-pressed="category === tab.key"
            class="shrink-0 rounded-lg px-4 py-2.5 text-[12.5px] font-semibold transition"
            :class="category === tab.key
              ? 'bg-forest-800 text-white shadow-sm'
              : 'border border-forest-200 bg-white text-forest-900/70 hover:border-forest-300 hover:text-forest-900'"
            @click="category = tab.key"
          >
            {{ tab.label }} ({{ categoryCount(tab.key) }})
          </button>
        </div>

        <div v-if="filtered.length" class="mt-6 grid gap-5 md:grid-cols-2">
          <ServiceCard v-for="(service, index) in filtered" :key="service.id" :service="service" v-reveal="Math.min(index, 4) * 50" />
        </div>

        <div v-else class="card mt-6 flex flex-col items-center px-6 py-14 text-center">
          <span class="grid h-12 w-12 place-items-center rounded-full bg-forest-50 text-forest-600">
            <AppIcon name="search" :size="22" />
          </span>
          <h3 class="mt-4 text-xl text-forest-950">Layanan tidak ditemukan</h3>
          <p class="mt-1.5 max-w-sm text-[13px] leading-relaxed text-forest-900/60">
            Coba kata kunci lain seperti “KTP”, “usaha”, atau “domisili”, atau lihat seluruh layanan
            yang tersedia.
          </p>
          <button type="button" class="btn-outline btn-sm mt-5" @click="resetFilter">Tampilkan semua layanan</button>
        </div>

        <p class="mt-6 flex items-start gap-2 rounded-xl border border-forest-100 bg-forest-50/60 p-4 text-[11.5px] leading-relaxed text-forest-900/55">
          <AppIcon name="info" :size="15" class="mt-0.5 shrink-0 text-forest-500" />
          Seluruh layanan administrasi Desa Bandungrejo bebas retribusi sesuai Perdes No. 04 Tahun 2023.
          Biaya materai atau fotokopi menjadi tanggung jawab pemohon.
        </p>
      </div>
    </section>

    <!-- Lapor & pengaduan -->
    <section id="lapor" class="section bg-forest-50/50 pt-4">
      <div class="container-x">
        <div class="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div class="relative overflow-hidden rounded-2xl bg-forest-900 p-6 text-white sm:p-8" v-reveal>
            <div class="hero-grain absolute inset-0 opacity-25" />
            <div class="relative">
              <p class="eyebrow eyebrow-light">Layanan Pengaduan & Aspirasi</p>
              <h2 class="mt-3 text-[27px] leading-tight text-white sm:text-[31px]">
                Lapor Desa &<br />Pengaduan Warga
              </h2>
              <p class="mt-3 max-w-md text-[13px] leading-relaxed text-white/65">
                Sampaikan laporan terkait infrastruktur, pelayanan, bantuan sosial, atau usulan
                pembangunan. Setiap laporan diverifikasi petugas dan diteruskan kepada Kepala Desa
                serta BPD.
              </p>

              <div class="mt-6 rounded-xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                <div class="flex items-baseline justify-between gap-3">
                  <p class="text-[10.5px] font-bold uppercase tracking-[0.13em] text-white/55">
                    Laporan Selesai Ditindaklanjuti
                  </p>
                  <p class="font-display text-2xl font-semibold text-gold-200">94%</p>
                </div>
                <div class="mt-2.5 h-1.5 overflow-hidden rounded-full bg-white/15">
                  <div class="h-full w-[94%] rounded-full bg-gold-300" />
                </div>
                <div class="mt-2 flex items-center justify-between text-[10.5px] text-white/45">
                  <span>Agustus 2024 – 2025</span>
                  <span>Total 182 laporan</span>
                </div>
              </div>

              <ul class="mt-6 space-y-3 text-[12px] text-white/60">
                <li class="flex gap-2.5">
                  <AppIcon name="shield" :size="15" class="mt-0.5 shrink-0 text-gold-300" />
                  Identitas pelapor dijamin kerahasiaannya sesuai regulasi whistleblowing desa.
                </li>
                <li class="flex gap-2.5">
                  <AppIcon name="clock" :size="15" class="mt-0.5 shrink-0 text-gold-300" />
                  Laporan diverifikasi maksimal 1×24 jam pada hari kerja.
                </li>
              </ul>

              <p class="mt-6 flex items-center gap-2 border-t border-white/10 pt-4 text-[11px] text-white/40">
                <AppIcon name="phone" :size="13" />
                Darurat? Hubungi 0812-2590-7811 (24 jam)
              </p>
            </div>
          </div>

          <div class="card p-6 sm:p-8" v-reveal="80">
            <div v-if="!sent">
              <div class="flex items-start justify-between gap-4">
                <div>
                  <p class="label">Formulir Pengaduan</p>
                  <h3 class="mt-1 text-xl text-forest-950">Kirim Laporan Resmi</h3>
                </div>
                <span class="chip-outline">Respon 1×24 jam</span>
              </div>

              <form class="mt-5 space-y-4" @submit.prevent="sendReport">
                <div class="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label for="lapor-name" class="label">Nama Pelapor <span class="font-normal normal-case tracking-normal text-forest-900/40">(opsional)</span></label>
                    <input id="lapor-name" type="text" autocomplete="name" placeholder="Kosongkan untuk anonim" class="field mt-1.5" />
                  </div>
                  <div>
                    <label for="lapor-phone" class="label">No. WhatsApp</label>
                    <input id="lapor-phone" type="tel" autocomplete="tel" placeholder="08xx xxxx xxxx" class="field mt-1.5" />
                  </div>
                </div>

                <div class="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label for="lapor-category" class="label">Kategori Laporan</label>
                    <select id="lapor-category" class="field mt-1.5">
                      <option>Infrastruktur & Jalan</option>
                      <option>Pelayanan Administrasi</option>
                      <option>Bantuan Sosial (Bansos)</option>
                      <option>Keamanan & Ketertiban</option>
                      <option>Usulan Pembangunan</option>
                      <option>Lainnya</option>
                    </select>
                  </div>
                  <div>
                    <label for="lapor-location" class="label">Lokasi Kejadian</label>
                    <input id="lapor-location" type="text" required placeholder="Dusun / RT / patokan" class="field mt-1.5" />
                  </div>
                </div>

                <div>
                  <label for="lapor-detail" class="label">Kronologi Laporan</label>
                  <textarea id="lapor-detail" rows="4" required placeholder="Jelaskan kondisi, waktu kejadian, dan dampak yang dirasakan warga…" class="field mt-1.5 resize-none" />
                </div>

                <label for="lapor-file" class="flex cursor-pointer items-center gap-4 rounded-xl border border-dashed border-forest-300 bg-forest-50/50 px-4 py-4 transition hover:border-forest-400 hover:bg-forest-50">
                  <span class="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white text-forest-600 shadow-sm">
                    <AppIcon name="camera" :size="19" />
                  </span>
                  <span>
                    <span class="block text-[12.5px] font-semibold text-forest-800">Klik untuk memilih foto atau seret berkas ke sini</span>
                    <span class="block text-[11px] text-forest-900/45">JPG, PNG, atau WEBP (maks. 5 MB)</span>
                  </span>
                  <input id="lapor-file" type="file" accept="image/*" class="sr-only" />
                </label>

                <label class="flex items-start gap-2.5 rounded-xl bg-forest-50 px-4 py-3 text-[11.5px] leading-relaxed text-forest-900/65">
                  <input type="checkbox" class="mt-0.5 h-4 w-4 rounded border-forest-300 accent-forest-700" />
                  Sembunyikan identitas saya — laporkan secara anonim (whistleblowing).
                </label>

                <button type="submit" class="btn-primary w-full">
                  <AppIcon name="send" :size="16" />
                  Kirim Laporan Resmi
                </button>
              </form>
            </div>

            <div v-else class="py-10 text-center">
              <span class="mx-auto grid h-14 w-14 place-items-center rounded-full bg-forest-100 text-forest-700">
                <AppIcon name="check-circle" :size="28" />
              </span>
              <h3 class="mt-4 text-xl text-forest-950">Laporan diterima</h3>
              <p class="mx-auto mt-2 max-w-sm text-[13px] leading-relaxed text-forest-900/60">
                Tim Sekretariat Desa akan memverifikasi laporan maksimal 1×24 jam pada hari kerja.
                Status tindak lanjut dapat ditanyakan melalui hotline desa.
              </p>
              <button type="button" class="btn-outline btn-sm mt-5" @click="sent = false">Kirim laporan lain</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Kontak cepat -->
    <section class="pb-16 sm:pb-20">
      <div class="container-x grid gap-4 sm:grid-cols-3">
        <div v-for="contact in contacts" :key="contact.title" class="card flex items-start gap-3.5 p-5">
          <span class="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-forest-50 text-forest-700">
            <AppIcon :name="contact.icon" :size="19" />
          </span>
          <div>
            <p class="text-[13px] font-bold leading-snug text-forest-950">{{ contact.title }}</p>
            <p class="mt-1 text-[11.5px] leading-snug text-forest-900/55">{{ contact.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
