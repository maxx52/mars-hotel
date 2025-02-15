import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Apartments from "@/views/Apartments.vue";
import Hotel from "@/views/Hotel.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/apartments", name: "Apartments", component: Apartments },
  { path: "/hotel", name: "Hotel", component: Hotel },
];

const router = createRouter({ history: createWebHistory(), routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
 });
export default router;
