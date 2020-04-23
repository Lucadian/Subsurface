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
        contacts:false,
        arkTitle:true
    },
    overlay:{
        visible : false,
        message :'',
    },
    hash:{
      page:1,
      total:1,
      queryKey:'',
      queryVal:'',
    },
    blog:{
      blogText:{
        date:''
      }
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
    },
    rewriteHash(state){
      let query = state.hash.queryKey ? state.hash.queryKey + '=' + state.hash.queryVal : ''
      let page  = state.hash.total > 1 ? '&page=' + state.hash.page : ''
      window.location.hash = query + page
    },
    updateArkTitle(state){
      state.headbar.title = state.hash.queryKey ? ( state.hash.queryKey === 'category' ? '分类列表' : '查找结果' ) : '次表面网络空间'
      state.headbar.subtitle = state.hash.queryKey ? state.hash.queryVal : ''
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
