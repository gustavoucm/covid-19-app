import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import { store } from './store'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import * as firebase from 'firebase/app'
import 'firebase/firestore'
import LoadingComponent from './components/Loading'

import HomeComponent from './container-components/Home/Home'
import VueApexCharts from 'vue-apexcharts'

Vue.component('apexchart', VueApexCharts)
Vue.component('HomeComponent', HomeComponent)
Vue.component('LoadingComponent', LoadingComponent)

export const http = Axios.create({
  baseURL: 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/'
})

export const httpCountry = Axios.create({
  baseURL: 'https://restcountries.eu/rest/v2/'
})

export const httpAS = Axios.create({
  baseURL: 'https://covid-193.p.rapidapi.com/'
})

export const httpMap = Axios.create({
  baseURL: 'https://coronavirus-map.p.rapidapi.com/v1/'
})

var firebaseConfig = {
  apiKey: "AIzaSyBiM36F86FxCu8AlBBq3AxrOquFz4F5uGc",
  authDomain: "covid-19-mx-b8638.firebaseapp.com",
  databaseURL: "https://covid-19-mx-b8638.firebaseio.com",
  projectId: "covid-19-mx-b8638",
  storageBucket: "covid-19-mx-b8638.appspot.com",
  messagingSenderId: "379085754285",
  appId: "1:379085754285:web:7c640390ac766059df5b24",
  measurementId: "G-6SNMC7FRJF"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const httpFire = firebase.firestore()

Vue.use(Vuex)

Vue.config.productionTip = false
new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
