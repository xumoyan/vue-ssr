import Vue from 'vue'
import i18n from './assets/i18n/i18n'
import './components/element-ui'
import App from './App.vue'

new Vue({
    el: '#app',
    i18n,
    render: h => h(App)
})