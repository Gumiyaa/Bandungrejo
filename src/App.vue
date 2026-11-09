<script setup>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import ApplyDialog from './components/ApplyDialog.vue'
</script>

<template>
  <a
    href="#konten"
    class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-forest-900 focus:shadow-lg"
  >
    Lewati ke konten utama
  </a>

  <SiteHeader />

  <main id="konten">
    <router-view />
  </main>

  <SiteFooter />
  <ApplyDialog />
</template>
