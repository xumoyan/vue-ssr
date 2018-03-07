import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './routes/index'
import { sync } from 'vuex-router-sync'

Vue.mixin({
    beforeMount() {
        const { asyncData } = this.$options
        if (asyncData) {
            this.dataPromise = asyncData({
                store: this.$store
            })
        }
    }
})

export function createApp() {
    const router = createRouter()
    const store = createStore()
    sync(store, router)
    const app = new Vue({
        router,
        store,
        render: h => h(App)
    })
    return { app, router, store }
}