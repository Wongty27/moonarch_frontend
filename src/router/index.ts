/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/pages/index.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      component: () => import('@/pages/shop.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/pages/cart.vue')
    },
    {
      path: '/payment',
      name: 'payment',
      component: () => import('@/pages/payment.vue')
    },
    {
      path: '/customise',
      name: 'customise',
      component: () => import('@/pages/customise.vue')
    }
  ]
})

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.('Failed to fetch dynamically imported module')) {
    if (!localStorage.getItem('vuetify:dynamic-reload')) {
      console.log('Reloading page to fix dynamic import error')
      localStorage.setItem('vuetify:dynamic-reload', 'true')
      location.assign(to.fullPath)
    } else {
      console.error('Dynamic import error, reloading page did not fix it', err)
    }
  } else {
    console.error(err)
  }
})

router.isReady().then(() => {
  localStorage.removeItem('vuetify:dynamic-reload')
})

export default router
