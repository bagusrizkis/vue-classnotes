import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './store'

const instance = axios.create({
  baseURL: 'http://localhost:3000'
})

Vue.config.productionTip = false
Vue.prototype.$axios = instance

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
