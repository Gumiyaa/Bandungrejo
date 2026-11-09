<script setup>
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import AppIcon from './AppIcon.vue'
import { useApply } from '../composables/useApply'

const { state, closeApply } = useApply()

const submitted = ref(false)
const ticket = ref('')
const nameInput = ref(null)

function submit() {
  const year = new Date().getFullYear()
  const seq = Math.floor(Math.random() * 400) + 81
  ticket.value = `BDR-${year}-${String(seq).padStart(4, '0')}`
  submitted.value = true
}

function close() {
  closeApply()
}

function onKeydown(event) {
  if (event.key === 'Escape' && state.open) close()
}

watch(
  () => state.open,
  async (open) => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (open) {
      submitted.value = false
      ticket.value = ''
      await nextTick()
      nameInput.value?.focus()
    }
  },
)

onMounted(() => document.addEventListener('keydown', onKeydown))
onUnmounted(() => {
  document.removeEventListener('keydown', onKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="opacity-0"
    >
      <div
        v-if="state.open"
        class="fixed inset-0 z-[90] flex items-end justify-center bg-forest-950/45 p-0 backdrop-blur-sm sm:items-center sm:p-6"
        @click.self="close"
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="apply-title"
          class="max-h-[94vh] w-full overflow-y-auto rounded-t-2xl border border-forest-100 bg-white shadow-2xl sm:max-w-lg sm:rounded-2xl"
        >
          <div class="flex items-start justify-between gap-4 border-b border-forest-100 px-5 py-4 sm:px-6">
            <div>
              <p class="label">Formulir Permohonan Online</p>
              <h2 id="apply-title" class="mt-1 text-xl text-forest-950">Ajukan Layanan Desa</h2>
            </div>
            <button
              type="button"
              class="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-forest-200 text-forest-800 transition hover:bg-forest-50"
              aria-label="Tutup formulir"
              @click="close"
            >
              <AppIcon name="x" :size="17" />
            </button>
          </div>

          <template v-if="!submitted">
            <div class="space-y-4 px-5 py-5 sm:px-6">
              <div class="flex items-start gap-3 rounded-xl bg-forest-50 p-4">
                <span class="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white text-forest-700">
                  <AppIcon :name="state.service?.icon || 'doc'" :size="20" />
                </span>
                <div class="min-w-0">
                  <p class="text-sm font-semibold leading-snug text-forest-950">{{ state.service?.title }}</p>
                  <p class="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11.5px] text-forest-900/60">
                    <span class="inline-flex items-center gap-1"><AppIcon name="clock" :size="12" />{{ state.service?.duration }}</span>
                    <span>Kode {{ state.service?.code }}</span>
                    <span class="font-semibold text-forest-700">Gratis / Rp 0</span>
                  </p>
                </div>
              </div>

              <form class="space-y-4" @submit.prevent="submit">
                <div>
                  <label for="apply-name" class="label">Nama Lengkap</label>
                  <input
                    id="apply-name"
                    ref="nameInput"
                    type="text"
                    required
                    autocomplete="name"
                    placeholder="Sesuai KTP"
                    class="field mt-1.5"
                  />
                </div>
                <div class="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label for="apply-nik" class="label">NIK</label>
                    <input
                      id="apply-nik"
                      type="text"
                      inputmode="numeric"
                      pattern="[0-9]{16}"
                      maxlength="16"
                      required
                      placeholder="16 digit NIK"
                      class="field mt-1.5"
                    />
                  </div>
                  <div>
                    <label for="apply-phone" class="label">No. WhatsApp</label>
                    <input
                      id="apply-phone"
                      type="tel"
                      required
                      autocomplete="tel"
                      placeholder="08xx xxxx xxxx"
                      class="field mt-1.5"
                    />
                  </div>
                </div>

                <div>
                  <span class="label">Unggah Berkas Pendukung</span>
                  <label
                    for="apply-file"
                    class="mt-1.5 flex cursor-pointer flex-col items-center justify-center gap-1.5 rounded-xl border border-dashed border-forest-300 bg-forest-50/50 px-4 py-6 text-center transition hover:border-forest-400 hover:bg-forest-50"
                  >
                    <AppIcon name="upload" :size="22" class="text-forest-600" />
                    <span class="text-[12.5px] font-semibold text-forest-800">Pilih foto KTP / KK</span>
                    <span class="text-[11px] text-forest-900/50">JPG, PNG, atau PDF — maks. 5 MB</span>
                    <input id="apply-file" type="file" accept="image/*,.pdf" class="sr-only" />
                  </label>
                </div>

                <p class="flex items-start gap-2 rounded-lg bg-gold-100/60 p-3 text-[11.5px] leading-relaxed text-gold-700">
                  <AppIcon name="lock" :size="14" class="mt-0.5 shrink-0" />
                  Data hanya digunakan untuk keperluan administrasi desa dan tidak dibagikan kepada pihak ketiga.
                </p>

                <button type="submit" class="btn-primary w-full">
                  Kirim Permohonan
                  <AppIcon name="send" :size="15" />
                </button>
              </form>
            </div>
          </template>

          <div v-else class="px-5 py-10 text-center sm:px-10">
            <span class="mx-auto grid h-14 w-14 place-items-center rounded-full bg-forest-100 text-forest-700">
              <AppIcon name="check-circle" :size="28" />
            </span>
            <h3 class="mt-4 text-xl text-forest-950">Permohonan terkirim</h3>
            <p class="mx-auto mt-2 max-w-sm text-[13.5px] leading-relaxed text-forest-900/65">
              Berkas Anda sedang diverifikasi operator desa. Simpan nomor tiket untuk melacak status permohonan.
            </p>
            <p class="mt-5 inline-flex items-center gap-2 rounded-xl border border-dashed border-forest-300 bg-forest-50 px-5 py-3 font-mono text-base font-bold tracking-wide text-forest-900">
              {{ ticket }}
            </p>
            <p class="mt-4 text-[11px] text-forest-900/45">Mode demo — data tidak benar-benar dikirim.</p>
            <button type="button" class="btn-primary mt-6 w-full" @click="close">Selesai</button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
