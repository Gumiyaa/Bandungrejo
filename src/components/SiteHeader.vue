<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import BrandLogo from './BrandLogo.vue'
import AppIcon from './AppIcon.vue'
import { nav } from '../data/site'

const route = useRoute()
const scrolled = ref(false)
const open = ref(false)

const isHome = computed(() => route.path === '/')
const overlay = computed(() => isHome.value && !scrolled.value)
const pillNav = nav.filter((item) => ['Beranda', 'Profil Desa', 'Layanan', 'Potensi & UMKM', 'Berita'].includes(item.label))

function onScroll() {
  scrolled.value = window.scrollY > 32
}

function isActive(item) {
  if (item.to === '/layanan') return route.path === '/layanan'
  if (item.to === '/') return route.path === '/' && !route.hash
  return route.path === '/' && route.hash === item.hash
}

function onNav(item) {
  if (route.path === '/' && route.hash === item.hash) {
    document.querySelector(item.hash)?.scrollIntoView({ behavior: 'smooth' })
  }
  open.value = false
}

watch(open, (value) => {
  document.body.style.overflow = value ? 'hidden' : ''
})

watch(
  () => route.fullPath,
  () => {
    open.value = false
  },
)

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  document.body.style.overflow = ''
})
</script>

<template>
  <header
    class="sticky top-0 z-50 transition-colors duration-300"
    :class="
      overlay
        ? 'bg-transparent'
        : 'border-b border-forest-100 bg-white shadow-[0_8px_30px_-24px_rgba(15,34,19,.5)]'
    "
  >
    <!-- Home: satu baris mengambang di atas hero -->
    <div v-if="isHome" class="container-x relative flex h-20 items-center justify-between gap-4">
      <RouterLink to="/" class="relative z-10 flex items-center gap-2.5" aria-label="Beranda Desa Bandungrejo">
        <BrandLogo :size="54" class="shrink-0" />
        <span class="hidden leading-tight sm:block">
          <span
            class="block font-display text-lg font-semibold"
            :class="overlay ? 'text-white' : 'text-forest-900'"
          >
            Bandungrejo
          </span>
          <span
            class="block text-[9.5px] font-semibold uppercase tracking-[0.13em]"
            :class="overlay ? 'text-white/70' : 'text-forest-700/70'"
          >
            Kec. Karanganyar, Demak
          </span>
        </span>
      </RouterLink>

      <nav class="absolute left-1/2 hidden -translate-x-1/2 lg:block" aria-label="Navigasi utama">
        <ul
          class="flex items-center gap-0.5 rounded-full border p-1 backdrop-blur-md transition-colors"
          :class="overlay ? 'border-white/25 bg-white/15' : 'border-forest-900/10 bg-forest-900/90 shadow-[0_10px_30px_-20px_rgba(15,34,19,.8)]'"
        >
          <li v-for="item in pillNav" :key="item.to">
            <RouterLink
              :to="item.to"
              class="inline-flex items-center rounded-full px-4 py-2 text-[12.5px] font-semibold transition"
              :class="
                isActive(item)
                  ? 'bg-white text-forest-950 shadow-sm'
                  : overlay
                    ? 'text-white/80 hover:text-white'
                    : 'text-white/70 hover:text-white'
              "
              @click="onNav(item)"
            >
              {{ item.label }}
            </RouterLink>
          </li>
        </ul>
      </nav>

      <div class="relative z-10 flex items-center gap-2">
        <RouterLink
          to="/layanan#lapor"
          class="hidden items-center gap-2 rounded-full px-4 py-2.5 text-[12.5px] font-semibold transition sm:inline-flex"
          :class="
            overlay
              ? 'bg-white text-forest-950 shadow-lg hover:bg-gold-100'
              : 'bg-forest-800 text-white hover:bg-forest-700'
          "
        >
          <AppIcon name="phone" :size="14" />
          Hubungi Kami
        </RouterLink>
        <button
          type="button"
          class="grid h-10 w-10 place-items-center rounded-full border transition lg:hidden"
          :class="
            overlay
              ? 'border-white/40 text-white hover:bg-white/15'
              : 'border-forest-200 text-forest-900 hover:bg-forest-50'
          "
          :aria-expanded="open"
          aria-controls="menu-mobile"
          aria-label="Buka menu navigasi"
          @click="open = !open"
        >
          <AppIcon :name="open ? 'x' : 'menu'" :size="19" />
        </button>
      </div>
    </div>

    <!-- Halaman lain: header lengkap -->
    <template v-else>
      <div
        class="hidden overflow-hidden bg-forest-950 text-white/70 transition-all duration-300 md:block"
        :class="scrolled ? 'max-h-0 opacity-0' : 'max-h-10 opacity-100'"
      >
        <div class="container-x flex h-9 items-center justify-between gap-4 text-[11px]">
          <div class="flex items-center gap-5">
            <span class="inline-flex items-center gap-1.5">
              <AppIcon name="shield" :size="13" class="text-gold-300" />
              Portal Resmi Pemerintah Desa Bandungrejo
            </span>
            <span class="hidden items-center gap-1.5 lg:inline-flex">
              <AppIcon name="clock" :size="13" class="text-gold-300" />
              Pelayanan: Senin – Jumat (08.00 – 15.30 WIB)
            </span>
          </div>
          <div class="flex items-center gap-4">
            <a href="tel:0291685112" class="inline-flex items-center gap-1.5 transition hover:text-white">
              <AppIcon name="phone" :size="13" />
              (0291) 685-112
            </a>
            <a
              href="mailto:pemdes@bandungrejo-demak.desa.id"
              class="hidden items-center gap-1.5 transition hover:text-white xl:inline-flex"
            >
              <AppIcon name="mail" :size="13" />
              pemdes@bandungrejo-demak.desa.id
            </a>
            <a href="tel:081225904411" class="inline-flex items-center gap-1.5 font-semibold text-gold-200 transition hover:text-gold-100">
              <span class="h-1.5 w-1.5 rounded-full bg-red-400" />
              Darurat
            </a>
          </div>
        </div>
      </div>

      <div class="container-x flex h-20 items-center justify-between gap-6 lg:h-[88px]">
        <RouterLink to="/" class="flex items-center gap-3" aria-label="Beranda Desa Bandungrejo">
          <BrandLogo :size="60" class="shrink-0" />
          <span class="block leading-tight">
            <span class="block font-display text-xl font-semibold text-forest-900 sm:text-2xl">Desa Bandungrejo</span>
            <span class="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.13em] text-forest-700/70">
              Kec. Karanganyar, Kab. Demak, Jawa Tengah
            </span>
          </span>
        </RouterLink>

        <div class="flex items-center gap-2.5">
          <RouterLink to="/layanan" class="btn-primary btn-sm hidden sm:inline-flex">
            <AppIcon name="id-card" :size="15" />
            Layanan Mandiri Warga
          </RouterLink>
          <a
            href="tel:081225904411"
            class="grid h-10 w-10 place-items-center rounded-lg border border-forest-200 text-forest-800 transition hover:bg-forest-50 sm:hidden"
            aria-label="Telepon darurat desa"
          >
            <AppIcon name="phone" :size="17" />
          </a>
          <button
            type="button"
            class="grid h-10 w-10 place-items-center rounded-lg border border-forest-200 text-forest-900 transition hover:bg-forest-50 lg:hidden"
            :aria-expanded="open"
            aria-controls="menu-mobile"
            aria-label="Buka menu navigasi"
            @click="open = !open"
          >
            <AppIcon :name="open ? 'x' : 'menu'" :size="19" />
          </button>
        </div>
      </div>

      <nav class="hidden border-t border-forest-100/80 py-2.5 lg:block" aria-label="Navigasi utama">
        <div class="container-x flex items-center justify-between gap-4">
          <ul class="flex items-center gap-0.5 rounded-full border border-forest-900/10 bg-forest-900/90 p-1 shadow-[0_10px_30px_-20px_rgba(15,34,19,.8)] backdrop-blur">
            <li v-for="item in nav" :key="item.to">
              <RouterLink
                :to="item.to"
                class="inline-flex items-center rounded-full px-3.5 py-2 text-[12.5px] font-semibold transition"
                :class="
                  isActive(item)
                    ? 'bg-white text-forest-900 shadow-sm'
                    : 'text-white/70 hover:text-white'
                "
                @click="onNav(item)"
              >
                {{ item.label }}
              </RouterLink>
            </li>
          </ul>
          <RouterLink to="/layanan#lapor" class="link-arrow shrink-0 text-[12.5px]">
            <AppIcon name="megaphone" :size="14" />
            Pengaduan Warga
          </RouterLink>
        </div>
      </nav>
    </template>

    <!-- Mobile drawer -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-if="open"
        id="menu-mobile"
        class="fixed inset-x-0 bottom-0 top-20 z-40 overflow-y-auto border-t border-forest-100 bg-white px-5 pb-10 pt-4 lg:hidden"
      >
        <nav aria-label="Navigasi mobile">
          <ul class="divide-y divide-forest-100">
            <li v-for="item in nav" :key="item.to">
              <RouterLink
                :to="item.to"
                class="flex items-center justify-between py-3.5 text-[15px] font-semibold"
                :class="isActive(item) ? 'text-forest-800' : 'text-forest-900/75'"
                @click="onNav(item)"
              >
                {{ item.label }}
                <AppIcon name="arrow-up-right" :size="16" class="text-forest-400" />
              </RouterLink>
            </li>
          </ul>
        </nav>

        <RouterLink to="/layanan" class="btn-primary mt-5 w-full" @click="open = false">
          <AppIcon name="id-card" :size="16" />
          Layanan Mandiri Warga
        </RouterLink>

        <div class="mt-6 rounded-xl bg-forest-50 p-4 text-sm">
          <p class="label">Hotline Desa</p>
          <a href="tel:0291685112" class="mt-1.5 flex items-center gap-2 font-semibold text-forest-900">
            <AppIcon name="phone" :size="15" class="text-forest-600" />
            (0291) 685-112
          </a>
          <p class="mt-1 flex items-center gap-2 text-forest-900/65">
            <AppIcon name="clock" :size="15" class="text-forest-600" />
            Senin – Jumat, 08.00 – 15.30 WIB
          </p>
        </div>
      </div>
    </Transition>
  </header>
</template>