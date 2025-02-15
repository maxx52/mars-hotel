import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Apartments from '@/views/Apartments.vue'
import Hotel from '@/views/Hotel.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/apartments',
    name: 'apartments',
    component: Apartments
  },
  {
    path: '/hotel',
    name: 'Hotel',
    component: Hotel
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.href) {
      return {
        selector: to.href,
        behavior: 'smooth'
      }
    }
    return {
      x: 0,
      y: 0
    }
  }
})

export default router
