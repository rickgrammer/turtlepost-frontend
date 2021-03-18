import Vue from 'vue'
import App from './App.vue'
import "tailwindcss/tailwind.css"
import GAuth from 'vue-google-oauth2'

import Toasted from 'vue-toasted';
import VueRouter from 'vue-router'

import store from './store'
import routes from './router.js'

const gauthOption = {
  clientId: '611990319369-q96f81cvv5m4uqeuek4b4vdc7426abi7.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}

const router = new VueRouter({
  routes
})

Vue.use(Toasted)
Vue.use(VueRouter)
Vue.use(GAuth, gauthOption)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
