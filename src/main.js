import Vue from 'vue'
import App from './App.vue'
import store from './store'
import axios from 'axios';


Vue.config.productionTip = false
Vue.prototype.$axios = axios

axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5'

axios.defaults.params = {
    appid: process.env.VUE_APP_API_KEY,
    units: "metric"
}

new Vue({
    store,
    render: h => h(App)
}).$mount('#app')