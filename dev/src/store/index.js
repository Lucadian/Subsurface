import Vue from 'vue'
import Vuex from 'vuex'

import * as headbar from './modules/headbar'
import * as footbar from './modules/footbar'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    display:{
        isMobile:false
    },
    visible:{
        category:false,
        contacts:false
    },
    overlay:{
        visible : false,
        message :'',
    }
  },
  mutations: {
    hideScrollbar(state){
      let root = document.getElementById('html')
          root.classList.remove('scroller')
      if (state.display.isMobile)
        root.classList.remove('mr-17')
      else
        document.getElementById('headbar').classList.remove('scroller')
    },
    showScrollbar(state){
      let root = document.getElementById('html')
      root.classList.add('scroller')
      if (state.display.isMobile)
        root.classList.add('mr-17')
      else
        document.getElementById('headbar').classList.add('scroller')
    }
  },
  actions: {

  },
  getters:{

  },
  modules: {
    headbar,footbar
  }
})
