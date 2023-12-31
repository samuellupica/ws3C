import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from '../views/ShopView.vue'
import ContactView from '../views/ContactView.vue'
import AboutUsView from '@/views/AboutUsView.vue'
import AgbView from '@/views/AgbView.vue'
import DatenschutzView from '@/views/DatenschutzView.vue'

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
        isNavItem: true
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: {
        isNavItem: true
      }
    },
    {
      path: '/about-us',
      name: 'about us',
      component: AboutUsView,
      meta: {
        isNavItem: true
      }
    },
    {
      path: '/agb',
      name: 'AGB',
      component: AgbView,
      meta: {
        isNavItem: false
      }
    },
    {
      path: '/datenschutz',
      name: 'Datenschutz',
      component: DatenschutzView,
      meta: {
        isNavItem: false
      }
    }
  ]
})

export default router
