<script setup>
defineProps({ size: { type: [String, Number], default: 44 } })
</script>

<template>
  <img
    src="/img/logo-demak.png"
    :width="size"
    :height="size"
    alt="Lambang Kabupaten Demak"
    class="shrink-0 object-contain mix-blend-multiply"
  />
</template>
