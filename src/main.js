import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

const observer =
  typeof IntersectionObserver === 'undefined'
    ? null
    : new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              observer.unobserve(entry.target)
            }
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -48px 0px' },
      )

const app = createApp(App)

app.directive('reveal', {
  mounted(el, binding) {
    if (!observer) return
    el.classList.add('reveal')
    if (binding.value) el.style.transitionDelay = `${binding.value}ms`
    observer.observe(el)
  },
})

app.use(router)
app.mount('#app')
