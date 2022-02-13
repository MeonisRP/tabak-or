import Vue from 'vue'
import VueRouter from 'vue-router'

import Catalog from '../pages/Catalog'
import Product from '../pages/Product'
import Cart from '../pages/Cart'
import CheckoutPreview from '../pages/CheckoutPreview'
import Checkout from '../pages/Checkout'
import Profile from '../pages/Profile'
import ProfileEdit from '../pages/ProfileEdit'
import OrdersHistory from '../pages/OrdersHistory'
import Favorite from '../pages/Favorite'

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
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/checkout-preview',
        name: 'CheckoutPreview',
        component: CheckoutPreview
    },
    {
        path: '/checkout',
        name: 'Checkout',
        component: Checkout
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/profile-edit',
        name: 'ProfileEdit',
        component: ProfileEdit
    },
    {
        path: '/orders-history',
        name: 'OrdersHistory',
        component: OrdersHistory
    },
    {
        path: '/favorite',
        name: 'Favorite',
        component: Favorite
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
