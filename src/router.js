import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import LayananView from './views/LayananView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'beranda', component: HomeView },
    { path: '/layanan', name: 'layanan', component: LayananView },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
})

export default router
