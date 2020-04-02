import Vue from 'vue'
import Vuex from 'vuex'
import coronavirus from './store/modules/coronavirus/coronavirus'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    coronavirus
  }
})
