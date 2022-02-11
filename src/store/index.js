import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

// import * as order from './modules/order'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    modules: {
        // order
    },
    state: {
        // user: {
        //     name: '',
        //     role: ''
        // },
        utils: {
            // BASE_URL: 'http://localhost:3000',
            // isLoading: false,
            // alertToggle: true,
            // alertType: 'error',
            // alertMessage: '',
            // alertsQueue: [],
        }
    },
    mutations: {},
    actions: {}
})
