import { reactive } from 'vue'

const state = reactive({
  open: false,
  service: null,
})

export function useApply() {
  function openApply(service) {
    state.service = service
    state.open = true
  }

  function closeApply() {
    state.open = false
  }

  return { state, openApply, closeApply }
}
