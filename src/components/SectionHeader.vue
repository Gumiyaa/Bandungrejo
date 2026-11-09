<script setup>
import AppIcon from './AppIcon.vue'

defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  description: { type: String, default: '' },
  linkLabel: { type: String, default: '' },
  linkTo: { type: String, default: '/' },
  light: { type: Boolean, default: false },
})
</script>

<template>
  <div class="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
    <div class="max-w-2xl">
      <p class="eyebrow" :class="light ? 'eyebrow-light' : ''">{{ eyebrow }}</p>
      <h2
        class="mt-3 text-[28px] leading-[1.12] sm:text-[36px]"
        :class="light ? 'text-white' : 'text-forest-950'"
      >
        {{ title }}
      </h2>
      <p
        v-if="description"
        class="mt-3 max-w-xl text-[14px] leading-relaxed sm:text-[15px]"
        :class="light ? 'text-white/70' : 'text-forest-900/65'"
      >
        {{ description }}
      </p>
      <slot name="meta" />
    </div>
    <RouterLink
      v-if="linkLabel"
      :to="linkTo"
      class="link-arrow shrink-0"
      :class="light ? 'text-gold-200 hover:text-gold-100' : ''"
    >
      {{ linkLabel }}
      <AppIcon name="arrow-right" :size="15" />
    </RouterLink>
  </div>
</template>
