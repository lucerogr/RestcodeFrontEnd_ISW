import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../components/home')
    },
    // Users login and registration
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
        path: '/sign-up/:id/add-restaurant',
        name: 'create-restaurant',
        component: () => import('../components/restaurant/add-restaurant')
    },
    // Profiles
    {
        path: '/consultants/:id',
        name: 'consultant-profile',
        component: () => import('../components/consultant-profile')
    },
    {
        path: '/owners/:id',
        name: 'owner-profile',
        component: () => import('../components/owner-profile')
    },
    // Restaurant views
    {
        path: '/restaurant',
        name: 'restaurant',
        component: () => import('../components/restaurant/restaurant')
    },
    {
        path: '/restaurants/:id',
        name: 'edit-restaurant',
        component: () => import('../components/restaurant/edit-restaurant')
    },

    // Appointments and consultancies&appointments
    {
        path: '/consultancies',
        name: 'consultancies',
        component: () => import('../components/consultancies&appointments/consultancies')
    },
    {
        path: '/consultants',
        name: 'consultants',
        component: () => import('../components/consultancies&appointments/consultants')
    },
    {
        path: '/appointments',
        name: 'appointments',
        component: () => import('../components/consultancies&appointments/appointments')
    },
    {
        path: '/appointments/new',
        name: 'add-appointment',
        component: () => import('../components/consultancies&appointments/add-appointment')
    },
    {
        path: '/consultancy/new',
        name: 'add-consultancy',
        component: () => import('../components/consultancies&appointments/add-consultancy')
    },
    {
        path: '/consultancy',
        name: 'view-consultancy',
        component: () => import('../components/consultancies&appointments/view-consultancy')
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