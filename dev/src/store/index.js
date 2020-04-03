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
      if(!state.display.isMobile){
        document.getElementById('html').classList.remove('scroller')
        document.getElementById('headbar').classList.remove('scroller')
      }
    },
    showScrollbar(state){
      if(!state.display.isMobile){
        document.getElementById('html').classList.add('scroller')
        document.getElementById('headbar').classList.add('scroller')
      }

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
