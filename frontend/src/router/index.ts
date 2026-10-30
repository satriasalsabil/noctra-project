import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import AdminLayout from '@/layouts/AdminLayout.vue'
import AccountLayout from '@/layouts/AccountLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import CheckoutLayout from '@/layouts/CheckoutLayout.vue'
import StorefrontLayout from '@/layouts/StorefrontLayout.vue'
import { registerGuards } from './guards'

/*
 * Placeholder view for routes whose page is not built yet. It keeps the route,
 * layout, and navigation shell usable while later stages fill in the screens.
 */
const ComingSoonView = () => import('@/views/ComingSoonView.vue')
const NotFoundView = () => import('@/views/NotFoundView.vue')

const DEFAULT_TITLE = 'NOCTRA Market — Heritage-Inspired Essentials'

/*
 * Route tree mirrors docs/routing-map.md: one parent per layout, pages as children.
 * `meta.title` is the short page name; the full document title is composed below.
 */
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: StorefrontLayout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/home/HomeView.vue'),
      },
      {
        path: 'shop',
        name: 'shop',
        component: ComingSoonView,
        meta: { title: 'Shop All' },
      },
      {
        path: 'category/:slug',
        name: 'category',
        component: ComingSoonView,
        meta: { title: 'Category' },
      },
      {
        path: 'product/:slug',
        name: 'product-detail',
        component: ComingSoonView,
        meta: { title: 'Product' },
      },
      {
        path: 'search',
        name: 'search',
        component: ComingSoonView,
        meta: { title: 'Search' },
      },
      {
        path: 'cart',
        name: 'cart',
        component: ComingSoonView,
        meta: { title: 'Cart' },
      },
      {
        path: 'journal',
        name: 'journal',
        component: ComingSoonView,
        meta: { title: 'The Journal' },
      },
      {
        path: 'journal/:slug',
        name: 'journal-detail',
        component: ComingSoonView,
        meta: { title: 'Journal Story' },
      },
      {
        path: ':pathMatch(.*)*',
        name: 'not-found',
        component: NotFoundView,
        meta: { title: 'Page Not Found' },
      },
    ],
  },
  {
    path: '/checkout',
    component: CheckoutLayout,
    children: [
      {
        path: '',
        name: 'checkout',
        component: ComingSoonView,
        meta: { title: 'Checkout' },
      },
      {
        path: 'success/:orderId',
        name: 'checkout-success',
        component: ComingSoonView,
        meta: { title: 'Order Confirmed' },
      },
    ],
  },
  {
    path: '/',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        name: 'login',
        component: ComingSoonView,
        meta: { title: 'Sign In', guestOnly: true },
      },
      {
        path: 'register',
        name: 'register',
        component: ComingSoonView,
        meta: { title: 'Create Account', guestOnly: true },
      },
      {
        path: 'forgot-password',
        name: 'forgot-password',
        component: ComingSoonView,
        meta: { title: 'Reset Password', guestOnly: true },
      },
    ],
  },
  {
    path: '/account',
    component: AccountLayout,
    children: [
      {
        path: '',
        name: 'account-profile',
        component: ComingSoonView,
        meta: { title: 'Profile', requiresAuth: true },
      },
      {
        path: 'orders',
        name: 'account-orders',
        component: ComingSoonView,
        meta: { title: 'Order History', requiresAuth: true },
      },
      {
        path: 'orders/:id',
        name: 'account-order-detail',
        component: ComingSoonView,
        meta: { title: 'Order Detail', requiresAuth: true },
      },
      {
        path: 'wishlist',
        name: 'account-wishlist',
        component: ComingSoonView,
        meta: { title: 'Wishlist', requiresAuth: true },
      },
      {
        path: 'addresses',
        name: 'account-addresses',
        component: ComingSoonView,
        meta: { title: 'Addresses', requiresAuth: true },
      },
      {
        path: 'security',
        name: 'account-security',
        component: ComingSoonView,
        meta: { title: 'Security', requiresAuth: true },
      },
      {
        path: 'fitting',
        name: 'account-fitting',
        component: ComingSoonView,
        meta: { title: 'Fitting Notes', requiresAuth: true },
      },
    ],
  },
  {
    path: '/admin',
    component: AdminLayout,
    children: [
      {
        path: '',
        name: 'admin-dashboard',
        component: ComingSoonView,
        meta: { title: 'Dashboard', requiresAdmin: true },
      },
      {
        path: 'orders',
        name: 'admin-orders',
        component: ComingSoonView,
        meta: { title: 'Orders', requiresAdmin: true },
      },
      {
        path: 'orders/:id',
        name: 'admin-order-detail',
        component: ComingSoonView,
        meta: { title: 'Order Detail', requiresAdmin: true },
      },
      {
        path: 'products',
        name: 'admin-products',
        component: ComingSoonView,
        meta: { title: 'Products', requiresAdmin: true },
      },
      {
        path: 'products/new',
        name: 'admin-product-new',
        component: ComingSoonView,
        meta: { title: 'New Product', requiresAdmin: true },
      },
      {
        path: 'products/:id/edit',
        name: 'admin-product-edit',
        component: ComingSoonView,
        meta: { title: 'Edit Product', requiresAdmin: true },
      },
      {
        path: 'categories',
        name: 'admin-categories',
        component: ComingSoonView,
        meta: { title: 'Categories', requiresAdmin: true },
      },
      {
        path: 'customers',
        name: 'admin-customers',
        component: ComingSoonView,
        meta: { title: 'Customers', requiresAdmin: true },
      },
      {
        path: 'inventory',
        name: 'admin-inventory',
        component: ComingSoonView,
        meta: { title: 'Inventory', requiresAdmin: true },
      },
      {
        path: 'reports',
        name: 'admin-reports',
        component: ComingSoonView,
        meta: { title: 'Reports', requiresAdmin: true },
      },
      {
        path: 'promotions',
        name: 'admin-promotions',
        component: ComingSoonView,
        meta: { title: 'Promotions', requiresAdmin: true },
      },
      {
        path: 'settings',
        name: 'admin-settings',
        component: ComingSoonView,
        meta: { title: 'Settings', requiresAdmin: true },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      // Offset for the sticky storefront header when jumping to in-page anchors.
      return { el: to.hash, top: 96, behavior: 'smooth' }
    }
    return { top: 0 }
  },
})

registerGuards(router)

router.afterEach((to) => {
  const pageTitle = to.meta.title
  document.title = pageTitle ? `${pageTitle} — NOCTRA Market` : DEFAULT_TITLE
})

export default router
