import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import { useAuthStore } from '@/stores/auth'

// Define protected routes more explicitly
const MASTER_ONLY_ROUTES = [
  '/dashboard',
  '/dashboard/profits',
  '/dashboard/orders',
  '/dashboard/conversions',
  '/dashboard/ratings',
  '/dashboard/brands',
  '/dashboard/stocks',
  '/dashboard/traffics',
  '/dashboard/sources'
]

const CUSTOMER_ONLY_ROUTES = [
  '/cart',
  '/checkout',
  '/profile'
]

const GUEST_ONLY_ROUTES = [
  '/login',
  '/register'
]

const PUBLIC_ROUTES = [
  '/',
  '/shop',
  '/build'
]

// Add meta data to routes
routes.forEach(route => {
  if (MASTER_ONLY_ROUTES.includes(route.path)) {
    route.meta = {
      ...route.meta,
      requiresAuth: true,
      requiresMaster: true,
    }
  } else if (CUSTOMER_ONLY_ROUTES.includes(route.path)) {
    route.meta = {
      ...route.meta,
      requiresAuth: true,
      requiresCustomer: true,
    }
  } else if (GUEST_ONLY_ROUTES.includes(route.path)) {
    route.meta = {
      ...route.meta,
      guestOnly: true,
    }
  }

  if (route.component) {
    const originalComponent = route.component
    route.component = async () => {
      const comp = await (originalComponent as () => Promise<any>)()
      return comp.default
    }
  }
})

const errorRoutes = [
  {
    path: '/unauthorized',
    name: 'unauthorized',
    component: () => import('../pages/UnauthorizedView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../pages/NotFoundView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes, ...errorRoutes]
})

// Navigation Guards remain the same...
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  const isAuthenticated = authStore.isAuthenticated
  const isMaster = authStore.isMaster
  const isCustomer = authStore.isCustomer

  // Check if the route requires authentication
  const requiresAuth = to.meta.requiresAuth
  const requiresMaster = to.meta.requiresMaster
  const requiresCustomer = to.meta.requiresCustomer
  const guestOnly = to.meta.guestOnly

  // Handle guest-only routes (login, register)
  if (guestOnly && isAuthenticated) {
    return next({ path: '/' })
  }

  // Handle authentication required routes
  if (requiresAuth && !isAuthenticated) {
    return next({ 
      path: '/login',
      query: { redirect: to.fullPath }
    })
  }

  // Handle master-only routes
  if (requiresMaster && !isMaster) {
    return next({ path: '/unauthorized' })
  }

  // Handle customer-only routes
  if (requiresCustomer && !isCustomer) {
    return next({ path: '/unauthorized' })
  }

  // Proceed to route
  next()
})

// Handle authentication errors
router.onError((error) => {
  console.error('Router error:', error)
  router.push({ path: '/' })
})

export default router

  