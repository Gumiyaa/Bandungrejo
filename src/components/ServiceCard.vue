<script setup>
import AppIcon from './AppIcon.vue'
import { useApply } from '../composables/useApply'

const props = defineProps({
  service: { type: Object, required: true },
  compact: { type: Boolean, default: false },
})

const { openApply } = useApply()

const toneClass = {
  green: 'chip-green',
  gold: 'chip-gold',
  red: 'chip-red',
}

function tone(toneName) {
  return toneClass[toneName] || 'chip-green'
}
</script>

<template>
  <article class="card card-hover group flex h-full flex-col">
    <div class="flex flex-1 flex-col p-5 sm:p-6">
      <div class="flex items-start justify-between gap-3">
        <span class="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-forest-50 text-forest-700 transition group-hover:bg-forest-800 group-hover:text-white">
          <AppIcon :name="props.service.icon" :size="21" />
        </span>
        <div class="flex flex-col items-end gap-1.5">
          <span :class="[tone(props.service.badge.tone), 'whitespace-nowrap']">{{ props.service.duration }}</span>
          <span class="text-[10px] font-semibold uppercase tracking-[0.12em] text-forest-900/40">
            Kode {{ props.service.code }}
          </span>
        </div>
      </div>

      <h3 class="mt-4 text-[18px] leading-snug text-forest-950 sm:text-[19px]">
        {{ props.service.title }}
      </h3>
      <p class="mt-2 text-[13px] leading-relaxed text-forest-900/65">{{ props.service.short }}</p>

      <div v-if="!props.compact" class="mt-3 flex flex-wrap items-center gap-1.5">
        <span :class="tone(props.service.badge.tone)">{{ props.service.badge.label }}</span>
        <span class="chip-outline">Gratis / Rp 0</span>
      </div>

      <div class="mt-4 rounded-xl bg-forest-50/80 p-4">
        <p class="label">Persyaratan & Dokumen</p>
        <ul class="mt-2.5 space-y-1.5 text-[12.5px] leading-snug text-forest-900/75">
          <li v-for="item in props.service.requirements" :key="item" class="flex gap-2">
            <AppIcon name="check-circle" :size="14" class="mt-0.5 shrink-0 text-forest-500" />
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>

      <div v-if="!props.compact" class="mt-4">
        <p class="label">Alur Pengurusan</p>
        <ol class="mt-2.5 grid grid-cols-3 gap-2">
          <li v-for="(step, index) in props.service.steps" :key="step.title" class="rounded-lg bg-forest-50/70 p-2.5 text-center">
            <p class="text-[11px] font-bold leading-tight text-forest-800">{{ index + 1 }}. {{ step.title }}</p>
            <p class="mt-0.5 text-[10.5px] leading-tight text-forest-900/55">{{ step.desc }}</p>
          </li>
        </ol>
      </div>

      <div class="mt-auto pt-5">
        <button
          v-if="props.compact"
          type="button"
          class="btn w-full bg-forest-50 text-forest-800 transition hover:bg-forest-800 hover:text-white"
          @click="openApply(props.service)"
        >
          Ajukan Online
          <AppIcon name="arrow-up-right" :size="15" />
        </button>
        <div v-else class="flex items-center justify-between gap-3 border-t border-forest-100 pt-4">
          <span class="text-[11.5px] font-medium text-forest-900/45">Gratis / Rp 0</span>
          <button type="button" class="btn-primary btn-sm" @click="openApply(props.service)">
            Ajukan Sekarang
            <AppIcon name="arrow-right" :size="14" />
          </button>
        </div>
      </div>
    </div>
  </article>
</template>
