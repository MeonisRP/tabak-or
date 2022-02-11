import Vue from 'vue'
import VueRouter from 'vue-router'

import Catalog from '../pages/Catalog'
import Product from '../pages/Product'

Vue.use(VueRouter)

const routes = [
    {
        path: '/catalog',
        name: 'Catalog',
        component: Catalog
    },
    {
        path: '/product',
        name: 'Product',
        component: Product
    }
    // {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () =>
    //         import(/* webpackChunkName: "about" */ '../views/About.vue')
    // }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
