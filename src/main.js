import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import { store } from './store'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

import HomeComponent from './container-components/Home/Home'

Vue.component('HomeComponent', HomeComponent)

export const http = Axios.create({
  baseURL: 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/'
})

Vue.use(Vuex)

Vue.config.productionTip = false
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')