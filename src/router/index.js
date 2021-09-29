import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/home')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/about.vue')
  }
  ,
  {
    path: '/consultants/:id',
    name: 'consultant-profile',
    component: () => import('../components/consultant-profile')
  },
  {
    path: '/consultants',
    name: 'consultant-profile',
    component: () => import('../components/consultant-profile')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../components/home')
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: () => import('../components/sign-up')
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: () => import('../components/sign-in')
  },
  {
    path: '/home-owner',
    name: 'home-owner',
    component: () => import('../components/home-owner')
  },
  {
    path: '/publications',
    name: 'publications',
    component: () => import('../components/publications')
  },
  {
    path: '/home-consultant',
    name: 'home-consultant',
    component: () => import('../components/home-consultant')
  },
  {
    path: '/appointments',
    name: 'appointments',
    component: () => import('../components/appointments')
  },
  {
    path: '/appointments/new',
    name: 'add-appointment',
    component: () => import('../components/add-appointment')
  },
  {
    path: '/restaurants/:id',
    name: 'restaurants',
    component: () => import('../components/restaurants')
  },
  {
    path: '/restaurants/:id',
    name: 'edit-restaurant',
    component: () => import('../components/edit-restaurant')
  },
  {
    path: '/consultancies',
    name: 'filters',
    component: () => import('../components/filters')
  },
  {
    path: '/sales',
    name: 'sales',
    component: () => import('../components/sales')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../components/products')
  },
  {
    path: '/categories',
    name: 'categories',
    component: () => import('../components/categories')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router