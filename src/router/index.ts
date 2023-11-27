import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from "../views/ShopView.vue";
import ContactView from "../views/ContactView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopView,
      meta: {
        color: '#8C8AE6',
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: {
        color: '#2D0077',
      }
    }
  ]
})

export default router
