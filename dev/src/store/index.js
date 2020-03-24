import Vue from 'vue'
import Vuex from 'vuex'

import { headbar } from './modules/headbar'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    headbar,
    display:{
      isMobile:false
    },
    visible:{
      category:true,
      contacts:false
    }
  },
  mutations: {

  },
  actions: {

  },
  getters:{

  },
  modules: {

  }
})
