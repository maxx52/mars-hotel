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
  routes
})

export default router
