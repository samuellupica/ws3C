import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from '../views/ShopView.vue'
import ContactView from '../views/ContactView.vue'
import AboutUsView from '@/views/AboutUsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        isNavItem: false
      }
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopView,
      meta: {
        color: '#8C8AE6',
        isNavItem: true
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: {
        color: '#2D0077',
        isNavItem: true
      }
    },
    {
      path: '/about-us',
      name: 'about us',
      component: AboutUsView,
      meta: {
        color: '#927DC9',
        isNavItem: true
      }
    }
  ]
})

export default router
