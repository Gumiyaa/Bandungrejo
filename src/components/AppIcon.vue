<script setup>
const icons = {
  search:
    '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  'arrow-right': '<path d="M4 12h15"/><path d="m13 6 6 6-6 6"/>',
  'arrow-up-right': '<path d="M7 17 17 7"/><path d="M8 7h9v9"/>',
  check: '<path d="m5 12.5 4.5 4.5L19 6.5"/>',
  'check-circle':
    '<circle cx="12" cy="12" r="9"/><path d="m8 12.5 2.7 2.7L16.5 9"/>',
  download:
    '<path d="M12 4v11"/><path d="m7.5 11 4.5 4.5L16.5 11"/><path d="M5 20h14"/>',
  info:
    '<circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><path d="M12 8h.01"/>',
  shield:
    '<path d="M12 3.5 19 6v5.2c0 4.4-2.9 7.4-7 9.3-4.1-1.9-7-4.9-7-9.3V6l7-2.5Z"/><path d="m9 12 2 2 4-4"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  phone:
    '<path d="M6.6 3.5h3l1.4 4-2 1.4a12 12 0 0 0 5.1 5.1l1.4-2 4 1.4v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4.6 5.7a2 2 0 0 1 2-2.2Z"/>',
  mail:
    '<rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="m4 7.5 8 5.5 8-5.5"/>',
  'map-pin':
    '<path d="M12 21c4-4 7-7.4 7-11a7 7 0 1 0-14 0c0 3.6 3 7 7 11Z"/><circle cx="12" cy="10" r="2.5"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  x: '<path d="m6 6 12 12M18 6 6 18"/>',
  doc:
    '<path d="M6 3.5h7l5 5v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1Z"/><path d="M13 3.5v5h5"/><path d="M8 13h8M8 17h5"/>',
  'id-card':
    '<rect x="3" y="5" width="18" height="14" rx="2.5"/><circle cx="9" cy="11" r="2"/><path d="M6 16c.6-1.6 1.7-2.3 3-2.3s2.4.7 3 2.3"/><path d="M15 10h4M15 14h4"/>',
  store:
    '<path d="M4 9.5 5.5 4h13L20 9.5"/><path d="M4 9.5h16"/><path d="M5 9.5V20h14V9.5"/><path d="M9.5 20v-5h5v5"/>',
  house:
    '<path d="m3.5 10.5 8.5-7 8.5 7"/><path d="M5.5 9v11h13V9"/><path d="M10 20v-5h4v5"/>',
  heart:
    '<path d="M12 20s-7.5-4.6-7.5-9.4A4.1 4.1 0 0 1 12 7.4a4.1 4.1 0 0 1 7.5 3.2C19.5 15.4 12 20 12 20Z"/>',
  sprout:
    '<path d="M12 21v-7"/><path d="M12 14c-4.5 0-7-2.5-7-6.5 4.5 0 7 2.5 7 6.5Z"/><path d="M12 12c0-4 2.5-6.5 7-6.5 0 4-2.5 6.5-7 6.5Z"/>',
  sparkles:
    '<path d="M12 3.5 13.7 9l5.5 1.7-5.5 1.7L12 18l-1.7-5.6L4.8 10.7 10.3 9 12 3.5Z"/><path d="m18.5 16 .7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2Z"/>',
  megaphone:
    '<path d="M4 10v4a1 1 0 0 0 1 1h2l9 4V5L7 9H5a1 1 0 0 0-1 1Z"/><path d="M7 15v4"/><path d="M19 9.5a3.5 3.5 0 0 1 0 5"/>',
  graduation:
    '<path d="M3 9.5 12 5l9 4.5-9 4.5-9-4.5Z"/><path d="M7 12v4.5c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V12"/><path d="M21 9.5v5"/>',
  building:
    '<rect x="4" y="4" width="16" height="16" rx="1.5"/><path d="M8 8h2M14 8h2M8 12h2M14 12h2M8 16h2M14 16h2"/>',
  users:
    '<circle cx="9" cy="9" r="3"/><path d="M3.5 19c.7-3 2.7-4.5 5.5-4.5s4.8 1.5 5.5 4.5"/><path d="M16 6.2a3 3 0 0 1 0 5.6"/><path d="M17.5 14.8c2 .6 3.2 2 3.7 4.2"/>',
  leaf: '<path d="M4 20C4 11 10 5 20 4c0 10-5 16-13 16"/><path d="M4 20c1-6 4-9 9-11"/>',
  wallet:
    '<path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H18v3"/><rect x="4" y="7.5" width="16" height="11.5" rx="2"/><path d="M15 12.5h4v3h-4a1.5 1.5 0 0 1 0-3Z"/>',
  'trending-up':
    '<path d="m4 16 5.5-5.5 3.5 3.5L20 7"/><path d="M15 7h5v5"/>',
  lock:
    '<rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8.5 10V7.5a3.5 3.5 0 0 1 7 0V10"/><path d="M12 14v2"/>',
  upload:
    '<path d="M12 16V5"/><path d="m7.5 9 4.5-4.5L16.5 9"/><path d="M5 16v3.5A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V16"/>',
  send: '<path d="M20.5 3.5 10 14"/><path d="M20.5 3.5 14 20.5l-4-6.5-6.5-4 17-6.5Z"/>',
  calendar:
    '<rect x="3.5" y="5" width="17" height="15.5" rx="2"/><path d="M8 3v4M16 3v4M3.5 10h17"/>',
  quote:
    '<path d="M9.5 6.5C6.5 8 5 10.5 5 13.5c0 2.2 1.3 3.5 3 3.5 1.6 0 2.8-1.1 2.8-2.7 0-1.5-1-2.6-2.5-2.6-.2 0-.5 0-.7.1.4-1.5 1.4-2.7 3-3.6L9.5 6.5Z"/><path d="M19 6.5C16 8 14.5 10.5 14.5 13.5c0 2.2 1.3 3.5 3 3.5 1.6 0 2.8-1.1 2.8-2.7 0-1.5-1-2.6-2.5-2.6-.2 0-.5 0-.7.1.4-1.5 1.4-2.7 3-3.6L19 6.5Z"/>',
  'badge-check':
    '<path d="m12 3 2.2 1.6 2.7-.2.9 2.6 2.3 1.4-.8 2.6.8 2.6-2.3 1.4-.9 2.6-2.7-.2L12 21l-2.2-1.6-2.7.2-.9-2.6L3.9 15.6l.8-2.6-.8-2.6 2.3-1.4.9-2.6 2.7.2L12 3Z"/><path d="m8.8 12 2.2 2.2 4.2-4.2"/>',
  external:
    '<path d="M14 4h6v6"/><path d="M20 4 11 13"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
  'chevron-down': '<path d="m6 9 6 6 6-6"/>',
  camera:
    '<path d="M4 8h3l1.5-2h7L17 8h3v11H4V8Z"/><circle cx="12" cy="13" r="3.5"/>',
  list: '<path d="M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01"/>',
  user:
    '<circle cx="12" cy="8" r="3.5"/><path d="M5 20c.8-3.5 3.3-5.2 7-5.2s6.2 1.7 7 5.2"/>',
}

defineProps({
  name: { type: String, required: true },
  size: { type: [String, Number], default: 20 },
})
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.7"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    v-html="icons[name] || ''"
  />
</template>
